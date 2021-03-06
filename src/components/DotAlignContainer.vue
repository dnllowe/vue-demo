<template>
  <div class='dotalign-container'>
    <DotAlignHeader v-bind:header="header" />
    <SearchBar
      v-bind:searchTerm="searchTerm"
      v-on:updateSearchTerm="updateSearchTerm"
      v-on:resetSearchTerm="resetSearchTerm"
      v-bind:placeholder="searchPlaceholder"
    />
    <div>
      <img v-if="!showContacts && !showCompanies" src='/images/vue-logo.png' class='container-logo' />
      <EntityList v-if="showContacts" v-bind:entities="filteredContacts" />
      <EntityList v-if="showCompanies" v-bind:entities="filteredCompanies" />
    </div>
    <NavigationFooter
      v-on:setShowContacts="setShowContacts"
      v-on:setShowCompanies="setShowCompanies"
    />
  </div>
</template>

<script lang='ts'>

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import axios from 'axios'
  import DotAlignHeader from './DotAlignHeader.vue'
  import EntityList from './EntityList.vue'
  import SearchBar from './SearchBar.vue'
  import Company from '../classes/Company'
  import Contact from '../classes/Contact'
  import NavigationFooter from './NavigationFooter.vue'

  @Component({
    components: {
      DotAlignHeader,
      EntityList,
      SearchBar,
      NavigationFooter
    }
  })

  class DotAlignContainer extends Vue {

    header = 'Home'
    searchTerm: string = null
    searchPlaceholder: string = null

    allContacts: Contact[] = null
    allCompanies: Company[] = null

    filteredContacts: Contact[] = null
    filteredCompanies: Company[] = null

    showContacts = false
    showCompanies = false

    created() {
      this.fetchContacts()
      this.fetchCompanies()
    }

    updateSearchTerm(newSearchTerm: string) {
      this.searchTerm = newSearchTerm

      if (this.showContacts) {
        this.filterContacts()
      }

      if (this.showCompanies) {
        this.filterCompanies()
      }
    }

    resetSearchTerm() {
      this.searchTerm = ''
      this.resetFilters()
    }

    resetFilters() {
      this.filteredContacts = this.allContacts;
      this.filteredCompanies = this.allCompanies;
    }

    filterContacts() {

      if (this.searchTerm.length) {

        this.filteredContacts = this.allContacts
          .filter(contact => {

            const lowerCaseContactName = contact.name.toLowerCase()
            const lowerCaseCompanyName = contact.company.name.toLowerCase()
            const lowerCaseSearchTerm = this.searchTerm.toLowerCase()
            const firstAndLastName = lowerCaseContactName.split(' ')
            let initials = firstAndLastName[0][0]

            if (firstAndLastName[1]) {
              initials += firstAndLastName[1][0]
            }

            return lowerCaseContactName.indexOf(lowerCaseSearchTerm) >= 0
            || lowerCaseCompanyName.indexOf(lowerCaseSearchTerm) >= 0
            || initials.indexOf(lowerCaseSearchTerm) >= 0 })

      } else {
        this.filteredContacts = this.allContacts
      }
    }

    filterCompanies() {

      if (this.searchTerm.length) {
        this.filteredCompanies= this.allCompanies
        .filter(company => company.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0)
      } else {
        this.filteredCompanies = this.allCompanies
      }
    }

    setHeader(header: string) {
      this.header = header
    }

    setShowContacts() {
      this.resetInnerView()
      this.showContacts = true
      this.header = 'Contacts'
      this.searchPlaceholder = 'Who are you looking for?'
      window.scrollTo(0, 0)
    }

    setShowCompanies() {
      this.resetInnerView()
      this.showCompanies = true
      this.header = 'Companies'
      this.searchPlaceholder = 'Which company are you looking for?'
      window.scrollTo(0, 0)
      window.scroll
    }

    resetInnerView() {

      this.showContacts = false
      this.showCompanies = false

      this.resetSearchTerm()

      this.header = 'Home'
    }

    setContacts(contacts: Contact[]) {
      contacts = contacts.sort((a, b) => b.score - a.score)
      this.allContacts = contacts
      this.filteredContacts = contacts
    }

    fetchContacts() {
      return axios.get('https://shielded-everglades-49151.herokuapp.com/api/contacts')
      .then(res => res.data)
      .then((response: { contacts: Contact[]}) => {
        this.setContacts(response.contacts)
      })
    }

    setCompanies(companies: Company[]) {
      companies = companies.sort((a, b) => b.score - a.score)
      this.allCompanies = companies
      this.filteredCompanies = companies
    }

    fetchCompanies() {
      return axios.get('https://shielded-everglades-49151.herokuapp.com/api/companies')
      .then(res => res.data)
      .then((response: { companies: Company[]}) => {
        this.setCompanies(response.companies)
      })
    }
  }

  export default DotAlignContainer

</script>