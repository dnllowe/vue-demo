<template>
  <div class='dotalign-header'>
    <h3>{{ header }}</h3>
  </div>
</template>

<script lang='ts'>

  import Vue from 'vue'
  import Component from 'vue-class-component'


  const DotAlignHeader = Vue.extend({

    data: function() {

      return {
        name: 'dotalign-header'
      }
    },

    props: ['header']
  })

  export default DotAlignHeader

</script>
