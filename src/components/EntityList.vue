<template>
  <ul>
    <EntityListItem
      v-for="item in items"
      v-bind:key="item"
      v-bind:text="item"
    />
  </ul>
</template>

<script lang='ts'>

  import Vue from 'vue'
  import EntityListItem from './EntityListItem.vue'

  const EntityList = Vue.extend({

    data: function() {
      return {
        name: 'entity-list'
      }
    },

    components: { EntityListItem },
    props: ['items']

  })

  export default EntityList

</script>