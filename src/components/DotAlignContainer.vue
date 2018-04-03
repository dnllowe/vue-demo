<template>
  <div class='dotalign-container'>
    <DotAlignHeader v-bind:header="header" />
    <EntityList v-if="showContacts" v-bind:items="contacts" />
    <EntityList v-if="showCompanies" v-bind:items="companies" />
    <span @click="setShowContacts">Show Contacts</span>
    <span @click="setShowCompanies">Show Companies</span>
    <div v-show="showContacts">SHOWING CONTACTS</div>
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
      EntityList,
    }
  })

  class DotAlignContainer extends Vue {

    header = ''
    contacts: Contact[] = []
    companies: Company[] = []
    showContacts: boolean
    showCompanies: boolean

    constructor() {
      super()

      this.setShowCompanies = this.setShowCompanies.bind(this)
      this.setShowContacts = this.setShowContacts.bind(this)
      this.resetInnerView = this.resetInnerView.bind(this)
    }

    created() {
      this.checkRoute()
      this.fetchContacts()
      this.fetchCompanies()
    }

    updated() {
      console.log("UPDATING", this)
    }

    checkRoute() {

      switch (window.location.pathname) {
        case '/dotalign/contacts':
          this.setHeader('Contacts')
          this.setShowContacts()
          break
        case '/dotalign/companies':
          this.setHeader('Companies')
          this.setShowCompanies()
          break
        default:
          this.setHeader('')
          this.resetInnerView()
          break
      }
    }

    setHeader(header: string) {
      this.header = header
    }

    setShowContacts() {
      this.resetInnerView()
      this.showContacts = true
    }

    setShowCompanies() {
      this.resetInnerView()
      this.showCompanies = true
    }

    resetInnerView() {
      this.showContacts = false
      this.showCompanies = false
    }

    setContacts(contacts: Contact[]) {
      this.contacts = contacts
    }

    fetchContacts() {
      return axios.get('https://shielded-everglades-49151.herokuapp.com/api/contacts')
      .then(res => res.data)
      .then((response: any) => {
        this.setContacts(response.contacts)
      })
    }

    setCompanies(companies: Company[]) {
      this.companies = companies
    }

    fetchCompanies() {
      return axios.get('https://shielded-everglades-49151.herokuapp.com/api/companies')
      .then(res => res.data)
      .then((response: any) => {
        this.setCompanies(response.companies)
      })
    }
  }

  export default DotAlignContainer

</script>