<template>
  <div class="works">
    <my-title :title="title" :icon="icon"/>

    <v-layout row wrap align-center justify-space-around fill-height class="mb-5">
      <div class="card-group">
        <ul>
          <li v-for="item in items" :key="item.title">
            <card :src="item.src" :title="item.title" :text="item.text"/>
          </li>
        </ul>
      </div>
    </v-layout>
  </div>
</template>

<script>
import MyTitle from '~/components/Title.vue'
import Card from '~/components/Card.vue'

export default {
  name: 'works',
  components: {
    MyTitle,
    Card
  },
  data() {
    return {
      title: 'Works',
      icon: 'create',
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          title: 'Java',
          text:
            '学部2年次の必修科目で1年程度触れた後、3年次の演習科目でAndroidアプリ製作時に使用しました。' +
            '今後のAndroidアプリの開発にはKotlinを使用する予定です。'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          title: 'Python',
          text:
            '使用可能なプログラミング言語の中で一番得意な言語です。' +
            '本ポートフォリオ作成時には2年ほど使用しており、卒業研究のプログラムにも使われています。'
        }
      ]
    }
  }
}
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
li {
  list-style: none;
}
</style>