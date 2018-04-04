<template>
  <input
    v-model="searchTerm"
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

    @Prop()
    placeholder: string

    @Prop()
    searchTerm: string

    @Emit()
    updateSearchTerm() {
      this.$emit('updateSearchTerm', this.searchTerm)
    }
  }

  export default SearchBar

</script>