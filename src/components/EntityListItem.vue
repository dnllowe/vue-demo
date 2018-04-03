<template>
  <li>{{ this.text }}</li>
</template>

<script lang='ts'>

  import Vue from 'vue'
  import Component from 'vue-class-component'

  const EntityListItem = Vue.extend({

    data: function() {
      return {
        name: 'entity-list-item'
      }
    },

    // props: ['text']

    props: {
      text: {
        type: String,
        default: '???'
      }
    }

  })

  export default EntityListItem

</script>