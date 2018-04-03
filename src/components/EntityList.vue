<template>
  <ul>
    <li v-for="item in items" v-bind:key="item">{{ item }}</li>
    <!-- <EntityListItem
      v-for="item in items"
      v-bind:key="item"
      v-bind:text="item"
    /> -->
  </ul>
</template>

<script lang='ts'>

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import EntityListItem from './EntityListItem.vue'

  @Component ({
    components: { EntityListItem },
    props: {
      items: Array
    }
  })

  class DotAlignHeader extends Vue {
    name = 'dotalign-header'
  }

  export default DotAlignHeader

</script>