<template>
  <div class='dotalign-container'>
    <DotAlignHeader v-bind:header="header" />
    <SearchBar
      v-on:updateSearchTerm="updateSearchTerm"
      placeholder="What are you looking for?"
    />
    <div>
      <EntityList v-if="showContacts" v-bind:items="filteredContacts" />
      <EntityList v-if="showCompanies" v-bind:items="filteredCompanies" />
    </div>
    <div>
      <span @click="setShowContacts">Contacts</span>
      <span @click="setShowCompanies">Companies</span>
    </div>
  </div>
</template>

<script lang='ts'>

  // import Vue from 'vue'
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import axios from 'axios'
  import DotAlignHeader from './DotAlignHeader.vue'
  import EntityList from './EntityList.vue'
  import SearchBar from './SearchBar.vue'
  import Company from '../classes/Company'
  import Contact from '../classes/Contact'

  @Component({
    components: {
      DotAlignHeader,
      EntityList,
      SearchBar
    }
  })

  class DotAlignContainer extends Vue {

    header: string = null
    searchTerm: string = null

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
      this.filterContacts()
      this.filterCompanies()
    }

    filterContacts() {

      if (this.searchTerm.length) {
        this.filteredContacts = this.allContacts
          .filter(contact => contact.name.indexOf(this.searchTerm) >= 0)
      } else {
        this.filteredContacts = this.allContacts
      }
    }

    filterCompanies() {

      if (this.searchTerm.length) {
        this.filteredCompanies= this.allCompanies
        .filter(company => company.name.indexOf(this.searchTerm) >= 0)
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
    }

    setShowCompanies() {
      this.resetInnerView()
      this.showCompanies = true
      this.header = 'Companies'
    }

    resetInnerView() {
      this.showContacts = false
      this.showCompanies = false
      this.header = ''
    }

    setContacts(contacts: Contact[]) {
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