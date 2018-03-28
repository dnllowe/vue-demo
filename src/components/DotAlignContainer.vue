<template>
  <div class='dotalign-container'>
    Welcome to DotAlign!
    <DotAlignHeader v-bind:header="header" />
    <div>{{ contacts }}</div>
    <div>{{ companies }}</div>
  </div>
</template>

<script lang='ts'>

  import Vue from 'vue'
  import DotAlignHeader from './DotAlignHeader.vue'
  import axios from 'axios'

  const DotAlignContainer = Vue.extend({

    components: { DotAlignHeader},

    data: function() {
      return {
        header: '',
        contacts: [{}],
        companies: [{}]
      }
    },

    created: function() {
      this.setHeader()
      this.fetchContacts()
      this.fetchCompanies()
    },

    updated: function() {
      this.setHeader()
    },

    methods: {
      setHeader: function() {

        switch (window.location.pathname) {
          case '/dotalign/contacts':
            this.header = 'Contacts'
            break
          case '/dotalign/companies':
            this.header = 'Companies'
            break
          default:
            this.header = ''
            break
        }
      },

      setContacts: function(contacts: any[]) {
        this.contacts = contacts
      },

      fetchContacts: function() {
        return axios.get('https://shielded-everglades-49151.herokuapp.com/api/contacts')
        .then(res => res.data)
        .then((contacts: any) => {
          this.setContacts(contacts)
        })
      },

       setCompanies: function(companies: any[]) {
        this.companies = companies
      },

      fetchCompanies: function() {
        return axios.get('https://shielded-everglades-49151.herokuapp.com/api/companies')
        .then(res => res.data)
        .then((companies: any) => {
          this.setCompanies(companies)
        })
      }
    }
  })

  export default DotAlignContainer

</script>