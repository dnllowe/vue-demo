<template>
  <input
    v-bind:value="searchTerm"
    v-bind:placeholder="placeholder"
    @input="updateSearchTerm"
  />
</template>

<script lang='ts'>

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop, Emit} from 'vue-property-decorator'

  @Component
  class SearchBar extends Vue {

    name: string = 'search-bar'

    @Prop(String)
    searchTerm: string

    @Prop(String)
    placeholder: string

    @Emit()
    updateSearchTerm(event: any) {
      this.$emit('updateSearchTerm', event.target.value)
    }
  }

  export default SearchBar

</script>