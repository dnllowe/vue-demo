<template>
  <ul>
    <EntityListItem
      v-for="item in items"
      v-bind:key="item"
      v-bind:entity="item"
    />
  </ul>
</template>

<script lang='ts'>

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'
  import EntityListItem from './EntityListItem.vue'
  import Contact from '../types/Contact'
  import Company from '../types/Company'

  @Component({
    components:  { EntityListItem }
  })

  class EntityList extends Vue {

    name: 'entity-list'

    @Prop()
    items: Contact[] & Company[]

  }

  export default EntityList

</script>