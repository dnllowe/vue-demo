<template>
  <li>{{ this.text }}</li>
</template>

<script lang='ts'>

  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component ({
    props: {
      text: String
    }
  })

  class EntityListItem extends Vue {
    name = 'dotalign-header'
  }

  export default EntityListItem

</script>