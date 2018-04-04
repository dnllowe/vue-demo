<template>
  <div class="avatar">
    <img src="{{ imgSrc }}" />
  </div>
</template>

<script lang='ts'>

  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  class Avatar extends Vue {

    name: 'avatar'
    props: AvatarProps = null

  }

  export default Avatar

  export type AvatarProps = {
    imgSrc: string
  }

</script>