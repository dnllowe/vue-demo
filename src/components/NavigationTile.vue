<template>
  <i v-bind:class="iconName + ' center bg-primary navigation-tile'" />
</template>

<script lang='ts'>

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'

  @Component
  class NavigationTile extends Vue {

    name: 'navigation-tile'

    @Prop(String)
    iconName: string

  }

  export default NavigationTile

</script>