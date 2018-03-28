<template>
  <div class='dotalign-header'>
    <h3>{{ this.header }}</h3>
  </div>
</template>

<script lang='ts'>

  import Vue from 'vue'

  export default Vue.extend({
    name: 'dotalign-header',
    props: {
      header: {
        type: String
      }
    }
  })

</script>
