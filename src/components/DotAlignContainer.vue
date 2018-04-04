<template>
  <div class='dotalign-container'>
    <DotAlignHeader v-bind:header="header" />
    <div>
      <EntityList v-if="showContacts" v-bind:items="contacts" />
      <EntityList v-if="showCompanies" v-bind:items="companies" />
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
  import DotAlignHeader from './DotAlignHeader.vue'
  import EntityList from './EntityList.vue'
  import Company from '../types/Company'
  import Contact from '../types/Contact'
  import axios from 'axios'

  @Component({
    components: {
      DotAlignHeader,
      EntityList
      }
  })

  class DotAlignContainer extends Vue {

    header: string = null
    contacts: Contact[] = null
    companies: Company[] = null
    showContacts = false
    showCompanies = false

    created() {
      this.fetchContacts()
      this.fetchCompanies()
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
      this.contacts = contacts
    }

    fetchContacts() {
      return axios.get('https://shielded-everglades-49151.herokuapp.com/api/contacts')
      .then(res => res.data)
      .then((response: { contacts: Contact[]}) => {
        this.setContacts(response.contacts)
      })
    }

    setCompanies(companies: Company[]) {
      this.companies = companies
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