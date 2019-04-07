<template>
  <div class="aboutme mb-5">
    <my-title :title="title" :icon="icon"/>

    <v-layout row wrap align-center justify-center fill-height>
      <v-flex xs12 sm6 md5 align-center justify-center layout class="pa-2">
        <v-avatar :tile="tile" size="150" color="grey lighten-4">
          <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
        </v-avatar>
      </v-flex>
      <v-flex xs10 sm6 md7 offset-xs1 offset-sm0 offset-md0 class="pa-2">ogehogehogehoge</v-flex>
    </v-layout>
  </div>
</template>

<script>
import MyTitle from '~/components/Title.vue'

export default {
  name: 'aboutme',
  components: {
    MyTitle
  },
  data() {
    return {
      title: 'About me',
      icon: 'face'
    }
  }
}
</script>

<style scoped>
</style>