<template>
  <div>

    <input
      class='search-bar'
      v-bind:value="searchTerm"
      v-bind:placeholder="placeholder"
      @input="updateSearchTerm"
    />
    <i class='fa fa-search' />
    <i class='fa fa-times' @click="resetSearchTerm"/>
  </div>
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

    @Emit()
    resetSearchTerm(event: any) {
      this.$emit('resetSearchTerm')
    }
  }

  export default SearchBar

</script>