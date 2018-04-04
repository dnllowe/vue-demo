<template>
  <li class='entity-list-item'>
    <span>{{ entity.name }}</span>
    <span><Score v-bind:score="entity.score"/></span>
    <br />
    <span class='entity-list-item-detail'>{{ entity.company ? entity.company.name : null}}</span>
  </li>
</template>

<script lang='ts'>

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'
  import Score from './Score.vue'
  import Company from '../classes/Company'
  import Contact from '../classes/Contact'

  @Component({
    components: { Score }
  })

  class EntityListItem extends Vue {

    name: 'entity-list-item'

    @Prop()
    entity: Company | Contact

  }

  export default EntityListItem

</script>