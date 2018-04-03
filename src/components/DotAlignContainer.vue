<template>
  <div class='dotalign-container'>
    <span @click="setShowContacts">Contacts</span>
    <span @click="setShowCompanies">Companies</span>
    <DotAlignHeader v-bind:header="header" />
    <EntityList v-if="showContacts" v-bind:items="contacts" />
    <EntityList v-if="showCompanies" v-bind:items="companies" />
  </div>
</template>

<script lang='ts'>

  // import Vue from 'vue'
  import Vue from 'vue'
  import DotAlignHeader from './DotAlignHeader.vue'
  import EntityList from './EntityList.vue'
  import Company from '../types/Company'
  import Contact from '../types/Contact'
  import axios from 'axios'

  const DotAlignContainer = Vue.extend({

    data: function() {
      return {
        header: { type: String },
        contacts: { type: Array },
        companies: { type: Array },
        showContacts: { type: Boolean, default: true},
        showCompanies: { type: Boolean, default: true }
      }
    },

    components: {
      DotAlignHeader,
      EntityList,
    },

    created: function() {
      this.checkRoute()
      this.fetchContacts()
      this.fetchCompanies()
    },

    updated: function() {
      console.log("UPDATING", this)
    },

    methods: {

      setHeader: function(header: string) {
        this.header = header
      },

      setShowContacts: function() {
        this.resetInnerView()
        this.showContacts = true
        this.header = 'Contacts'
      },

      setShowCompanies: function() {
        this.resetInnerView()
        this.showCompanies = true
        this.header = 'Companies'
      },

      resetInnerView: function() {
        this.showContacts = false
        this.showCompanies = false
        this.header = ''
      },

      setContacts: function(contacts: Contact[]) {
        //this.contacts = contacts
      },

      fetchContacts: function() {
        return axios.get('https://shielded-everglades-49151.herokuapp.com/api/contacts')
        .then(res => res.data)
        .then((response: any) => {
          this.setContacts(response.contacts)
        })
      },

      setCompanies: function(companies: Company[]) {
        //this.companies = companies
      },

      fetchCompanies: function() {
        return axios.get('https://shielded-everglades-49151.herokuapp.com/api/companies')
        .then(res => res.data)
        .then((response: any) => {
          this.setCompanies(response.companies)
        })
      }
    }
  })

  export default DotAlignContainer

</script>