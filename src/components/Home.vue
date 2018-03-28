<template>
  <span style='cursor: pointer' @click="openApp">Start DotAlign Vue Demo</span>
</template>


<script lang='ts'>

  import Vue from 'vue'

  const Home = Vue.extend({
    name: 'home',
    data () {
      return {
        openApp: () => window.open('/dotalign', 'detab', 'width=320,height=640,left=0,top=0,menubar=no,toolbar=no,locationbar=no,statusbar=no,resizable=no')
      }
    }
  })

  export default Home

</script>