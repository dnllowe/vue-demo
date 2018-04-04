<template>
  <div class='navigation-menu-footer'>
    <span class='navigation-tile' @click="setShowContacts">
      <NavigationTile iconName='' />
      Contacts
    </span>
    <span class='navigation-tile' @click="setShowCompanies">
      <NavigationTile iconName='' />
      Companies
    </span>
  </div>
</template>

<script lang='ts'>

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Emit } from 'vue-property-decorator'
  import NavigationTile from './NavigationTile.vue'

  @Component({
    components: { NavigationTile }
  })

  class NavigationFooter extends Vue {

    @Emit()
    setShowContacts() {
      this.$emit('setShowContacts')
    }

    @Emit()
    setShowCompanies() {
      this.$emit('setShowCompanies')
    }
  }

  export default NavigationFooter

</script>