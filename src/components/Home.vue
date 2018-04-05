<template>
  <div class='home'>
    <img style='margin-left: 110px; margin-top: 150px;' src='/images/vue-logo.png' />
    <span class='home-plus'>+</span>
    <img src='/images/dotalign-logo.png' />
    <br />
    <button class='start-demo' style='cursor: pointer' @click="openApp">Start DotAlign Vue Demo</button>
  </div>
</template>


<script lang='ts'>

  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  class Home extends Vue {

    name = 'home'

    openApp() {
      window.open(
          '/dotalign',
          'detab',
          'width=343,height=640,left=0,top=0,menubar=no,toolbar=no,locationbar=no,statusbar=no,resizable=no,scrollbar=yes')
    }
  }

  export default Home

</script>