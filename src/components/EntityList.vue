<template>
  <ul class='entity-list'>
    <EntityListItem
      v-for="entity in entities"
      v-bind:key="entity.id"
      v-bind:entity="entity"
    />
  </ul>
</template>

<script lang='ts'>

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'
  import EntityListItem from './EntityListItem.vue'
  import Contact from '../classes/Contact'
  import Company from '../classes/Company'

  @Component({
    components:  { EntityListItem }
  })

  class EntityList extends Vue {

    name: 'entity-list'

    created() {
      setTimeout(this.calibrateHeight, 500)
    }

    updated() {
      this.calibrateHeight()
    }

    calibrateHeight() {

      if (this.$el) {

        const totalHeight = Array.from(this.$el.children)
          .map(child => child.clientHeight)
          .reduce((total, height) => total + height)

        this.$el.style.height = `${totalHeight + 200}px`
      }
    }

    @Prop()
    entities: Contact[] & Company[]

  }


  export default EntityList

</script>