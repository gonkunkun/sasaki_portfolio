<template>
  <div class="skill mb-5">
    <my-title :title="title" :icon="icon"/>

    <v-container fluid>
      <v-card class="pa-1">
        <v-flex xs12 class="mb-1">
          <h4 class="headline font-weight-black">
            <v-icon x-large class="mr-1">desktop_mac</v-icon>Front-end
          </h4>
        </v-flex>
        <v-layout row wrap align-center justify-center fill-height>
          <card-skl v-for="item in items" :key="item.title" :item="item"/>
        </v-layout>
      </v-card>
    </v-container>

    <v-container fluid>
      <v-card class="pa-1">
        <v-layout row wrap align-center justify-start fill-height>
          <h4 class="headline">
            <i class="fas fa-server fa-fw fa-lg"/>
          </h4>
          <h4 class="headline font-weight-black pt-3">Back-end</h4>
        </v-layout>
        <v-layout row wrap align-center justify-center fill-height>
          <card-skl v-for="item in items" :key="item.title" :item="item"/>
        </v-layout>
      </v-card>
    </v-container>

    <v-container fluid>
      <v-card class="pa-1">
        <v-flex xs12 class="mb-1">
          <h4 class="headline font-weight-black">
            <v-icon x-large class="mr-1">brightness_high</v-icon>DevOps
          </h4>
        </v-flex>

        <v-layout row wrap align-center justify-center fill-height>
          <card-skl v-for="item in items" :key="item.title" :item="item"/>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import MyTitle from '~/components/Title.vue'
import CardSkl from '~/components/CardSkl.vue'

export default {
  name: 'Skill',
  components: {
    MyTitle,
    CardSkl
  },
  data() {
    return {
      title: 'My skill set',
      icon: 'build',
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          title: 'Javalllllll',
          text: 'hogehogehogehhoege。'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          title: 'Javalllllll',
          text: 'hogehogehogehhoege。'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          title: 'Javalllllll',
          text: 'hogehogehogehhoege。'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          title: 'Javalllllll',
          text: 'hogehogehogehhoege。'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          title: 'Javalllllll',
          text: 'hogehogehogehhoege。'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          title: 'Javalllllll',
          text: 'hogehogehogehhoege。'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          title: 'Javalllllll',
          text: 'hogehogehogehhoege。'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>