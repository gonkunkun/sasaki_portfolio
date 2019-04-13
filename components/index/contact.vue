<template>
  <div id="contacts" class="contact">
    <my-title :title="title" :icon="icon"/>
    <v-flex xs12 sm12 md12 class="ma-1">
      <v-layout text-md-center text-sm-center text-xs-center align-center justify-center row wrap>
        <v-flex xs2 sm2 md2>
          <a href="https://github.com/gonkunkun" target="_blank">
            <i class="fab fa-github fa-fw fa-3x"/>
          </a>
        </v-flex>
        <!-- <v-flex xs2 sm2 md2>
          <i class="fab fa-twitter fa-fw fa-3x twitter"/>
        </v-flex>-->
        <v-flex xs2 sm2 md2>
          <a href="https://qiita.com/gogogonkun" target="_blank">
            <img class="icon-image" alt="Qiitaロゴ" src="~/assets/Qiita.png">
          </a>
        </v-flex>
        <v-flex xs2 sm2 md2>
          <a href="https://www.wantedly.com/users/89974724" target="_blank">
            <img class="icon-image" alt="Wantedlyロゴ" src="~/assets/wantedly.svg">
          </a>
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
  /* color: #1da1f2; */
}
</style>