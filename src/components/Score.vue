<template>
  <div class="score center-text bg-primary">
    {{ score }}
  </div>
</template>

<script lang='ts'>

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'

  @Component
  class Score extends Vue {

    name: 'score'

    @Prop(Number)
    score: number

  }

  export default Score

</script>