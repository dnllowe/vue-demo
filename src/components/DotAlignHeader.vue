<template>
  <div class='dotalign-header'>
    <h3>{{ header }}</h3>
  </div>
</template>

<script lang='ts'>

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'

  @Component
  class DotAlignHeader extends Vue {

    name: 'dotalign-header'

    @Prop(String)
    header: string

  }

  export default DotAlignHeader

</script>
