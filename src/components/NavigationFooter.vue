<template>
  <div class='navigation-menu-footer'>
    <span>
      <NavigationTile iconName='' />
      Contacts
    </span>
      <NavigationTile iconName='' />
      Companies
    <span>
    </span>
  </div>
</template>

<script lang='ts'>

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import NavigationTile from './NavigationTile.vue'

  @Component({
    components: { NavigationTile }
  })

  class NavigationFooter extends Vue {

  }

  export default NavigationFooter

</script>