<template>
  <div class="works mb-5">
    <my-title :title="title" :icon="icon"/>

    <v-layout row wrap align-center justify-space-around fill-height>
      <div class="card-group">
        <ul>
          <li v-for="item in items" :key="item.title">
            <card :item="item"/>
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
          overview: 'overview',
          title: 'Java',
          date: '2019/02/21',
          tags: [
            {
              color: 'orange',
              textColor: 'white',
              title: 'PHP'
            },
            {
              color: 'orange',
              textColor: 'white',
              title: 'PPP'
            }
          ],
          text: 'hogehoge。' + 'hogehogehogehogehoge。',
          links: [
            {
              color: 'orange',
              title: 'HP',
              url: 'hogehoge.jp'
            },
            {
              color: 'orange',
              title: 'PPAP',
              url: 'hogehoge.jp'
            }
          ]
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          overview: 'overview',
          title: 'PHP',
          date: '2019/02/21',
          tags: [
            {
              color: 'orange',
              textColor: 'white',
              title: 'PHP'
            },
            {
              color: 'orange',
              textColor: 'white',
              title: 'PPP'
            }
          ],
          text: 'hogehoge。' + 'hogehogehogehogehoge。',
          links: [
            {
              color: 'orange',
              title: 'HP',
              url: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
            },
            {
              color: 'orange',
              title: 'PPAP',
              url: 'hogehoge.jp'
            }
          ]
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