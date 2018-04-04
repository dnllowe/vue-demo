<template>
  <div class='navigation-menu-footer'>
    <div class='navigation-tile' @click="setShowContacts">
      <NavigationTile iconName='fa fa-user' />
    </div>
    <div class='navigation-tile' @click="setShowCompanies">
      <NavigationTile iconName='fa fa-building' />
    </div>
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