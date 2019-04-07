<template>
  <div class="contact mb-5">
    <my-title :title="title" :icon="icon"/>
    <v-flex xs12 sm12 md12 class="ma-1">
      <v-layout text-md-center text-sm-center text-xs-center align-center justify-center row wrap>
        <v-flex xs2 sm2 md2>
          <i class="fab fa-github fa-fw fa-3x"/>
        </v-flex>
        <v-flex xs2 sm2 md2>
          <i class="fab fa-twitter fa-fw fa-3x twitter"/>
        </v-flex>
        <v-flex xs2 sm2 md2>
          <img class="icon-image" src="~/assets/Qiita.png">
        </v-flex>
        <v-flex xs2 sm2 md2>
          <img class="icon-image" src="~/assets/wantedly.svg">
        </v-flex>
        <v-flex xs12 sm12 md12>
          <div class="text-xs-center">
            <v-chip>
              <v-icon class="fa-fw">mail_outline</v-icon>yuta.sasaki.ipu@gmail.com
            </v-chip>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
  </div>
</template>

<script>
import MyTitle from '~/components/Title.vue'

export default {
  name: 'Contact',
  components: {
    MyTitle
  },
  data() {
    return {
      title: 'SNS/Contact',
      icon: 'contacts'
    }
  }
}
</script>

<style scoped>
.icon-image {
  width: 40px;
  height: 40px;
}
.twitter {
  color: #1da1f2;
}
</style>