<template>
  <div class='dotalign-header'>
    <h3>{{ this.header }}</h3>
  </div>
</template>

<script lang='ts'>

  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component ({
    props: {
      header: String
    }
  })

  class DotAlignHeader extends Vue {
    name = 'dotalign-header'
  }

  export default DotAlignHeader

</script>
