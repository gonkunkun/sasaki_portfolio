<template>
  <div class="skill">
    <my-title :title="title" :icon="icon"/>

    <v-layout row wrap align-center justify-space-around fill-height class="mb-5">
      <v-flex xs6 sm3 md2 class="pa-1">
        <v-card>
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          ></v-img>
          <v-card-title>
            <div>
              <span>Whitsunday Island, Whitsunday Islands</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs6 sm3 md2 class="pa-1">
        <v-card>
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          ></v-img>
          <v-card-title>
            <div>
              <span>Whitsunday Island, Whitsunday Islands</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs6 sm3 md2 class="pa-1">
        <v-card>
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          ></v-img>
          <v-card-title>
            <div>
              <span>Whitsunday Island, Whitsunday Islands</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import MyTitle from '~/components/Title.vue'

export default {
  name: 'Skill',
  components: {
    MyTitle
  },
  data() {
    return {
      title: 'My skill set',
      icon: 'build'
    }
  }
}
</script>

<style scoped>
</style>