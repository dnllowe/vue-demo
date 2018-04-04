<template>
  <li><span>{{ entity.name }}</span><span><Score v-bind:score="entity.score"/></span></li>
</template>

<script lang='ts'>

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'
  import Score from './Score.vue'

  @Component({
    components: { Score }
  })

  class EntityListItem extends Vue {

    name: 'entity-list-item'

    @Prop()
    entity: string

  }

  export default EntityListItem

</script>