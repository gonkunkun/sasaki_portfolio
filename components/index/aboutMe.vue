<template>
  <div id="about" class="aboutme mb-2">
    <my-title :title="title" :icon="icon"/>

    <v-layout row wrap align-center justify-center fill-height>
      <v-flex xs12 sm5 md4 align-center justify-center layout class="pa-2">
        <v-avatar :tile="tile" size="200" color="grey lighten-4">
          <img src="~/assets/me4.jpg" alt="佐々木の写真">
        </v-avatar>
      </v-flex>
      <v-flex xs10 sm7 md8 offset-xs1 offset-sm0 offset-md0 class="pa-2">
        <span>
          ポートフォリオへようこそ！
          <br>佐々木優太と申します。
          <br>
          <br>普段はこんなものが欲しいな… と自分が感じたものを土日の休みを使って開発しています。
          <br>欲しいものはあるけれども技術的に未熟で実現できないことばかりなので、日々勉強中です。
          <br>
          <br>大学では、お米の栽培支援のために、気象予測情報を配信するシステムの研究・開発をしていました。
          <br>2018年4月から大手通信関係のSIerで働いていて、今年で新卒2年目となります。
          <br>業務では、社内の比較的大きなシステムのメトリクス可視化に携わっております。
        </span>
      </v-flex>
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