<template>
  <div id="works" class="works mb-5">
    <my-title :title="title" :icon="icon"/>

    <v-layout row wrap align-center justify-space-around fill-height>
      <div class="card-group">
        <ul class="pa-0">
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
          src: '/amateras.png',
          overview: '',
          title: '気象予測情報の配信システムの開発',
          date: '2018/02/10',
          tags: [
            {
              color: 'green',
              textColor: 'white',
              title: '開発'
            },
            {
              color: 'orange',
              textColor: 'white',
              title: 'PHP'
            },
            {
              color: 'orange',
              textColor: 'white',
              title: 'JS'
            }
          ],
          text:
            '大学の研究で開発していました。水稲栽培の支援のために、気象予測情報から地域毎の危険度を算出し、GoogleMap上で可視化しております。新潟県の農業研究者/普及員約50名程度が活用し、高温被害の軽減に役立てました。',
          links: [
            // {
            // color: 'blue darken-1',
            // title: 'サイト',
            // url: 'http://map32.wat.soft.iwate-pu.ac.jp/amateras/main.php'
            // },
            {
              color: 'blue darken-1',
              title: '学会',
              url:
                'https://ipsj.ixsq.nii.ac.jp/ej/index.php?active_action=repository_view_main_item_snippet&page_id=13&block_id=8&pn=1&count=20&order=16&lang=japanese&creator=%E4%BD%90%E3%80%85%E6%9C%A8%20%E5%84%AA%E5%A4%AA'
            },
            {
              color: 'blue darken-1',
              title: 'ニュース',
              url: 'http://www.news24.jp/articles/2017/10/06/07374457.html'
            }
          ]
        },
        {
          src: '/movhis.png',
          overview: '',
          title: 'Chrome拡張機能 動画閲覧履歴Viewerの開発',
          date: '2018/12/25',
          tags: [
            {
              color: 'green',
              textColor: 'white',
              title: '開発'
            },
            {
              color: 'orange',
              textColor: 'white',
              title: 'Chrome拡張'
            },
            {
              color: 'orange',
              textColor: 'white',
              title: 'Vue'
            },
            {
              color: 'orange',
              textColor: 'white',
              title: 'Element UI'
            }
          ],
          text:
            '初めてのChrome拡張開発です。動画の閲覧履歴をサムネ付きで確認できます。昨日見ていた動画を思い出せずに、次の日後悔した経験が何度もあり、二度と悲しい思いをしたくないと考え開発に至りました。　現在、60名程度のユーザに利用されています。',
          links: [
            {
              color: 'blue darken-1',
              title: 'ストア',
              url:
                'https://chrome.google.com/webstore/detail/gbidhnbjoleffagedagblicnjlknibpd/publish-accepted?hl=ja'
            },
            {
              color: 'blue darken-1',
              title: 'Qiita',
              url: 'https://qiita.com/gogogonkun/items/c34971ce743c54c5a240'
            },
            {
              color: 'blue darken-1',
              title: 'GitHub',
              url: 'https://github.com/gonkunkun/MovieBrowsHistoryViewer'
            }
          ]
        },
        {
          src: '/portfolio.png',
          overview: '',
          title: 'Nuxtでポートフォリオ作成',
          date: '2019/04/10',
          tags: [
            {
              color: 'green',
              textColor: 'white',
              title: '開発'
            },
            {
              color: 'orange',
              textColor: 'white',
              title: 'Nuxt'
            },
            {
              color: 'orange',
              textColor: 'white',
              title: 'firebase'
            }
          ],
          text:
            'このページです。自身の活動を整理するとともに、継続的に勉強するためのモチベーションを維持するために作成しました。当時、会社でvueを使用していたのと、フロントエンドのフレームワークに触れたいという思いからNuxtを採用しました。',
          links: [
            {
              color: 'blue darken-1',
              title: 'サイト',
              url: 'https://sasakiportfolio-2c22c.firebaseapp.com'
            },
            {
              color: 'blue darken-1',
              title: 'GitHub',
              url: 'https://github.com/gonkunkun/sasaki_portfolio'
            }
          ]
        },
        {
          src: '/perches.png',
          overview: '',
          title: '社内プログラミングサークル',
          date: '2019/02/11',
          tags: [
            {
              color: 'purple darken-1',
              textColor: 'white',
              title: '勉強'
            }
          ],
          text:
            'コーディング好き同士で集まって勝手に作りました。サークル名はひよっこエンジニアが空へ羽ばたくための止まり木（遊び場）にしたいという思いで名付けました。会社の同期10名程度がゆるく楽しんでいます。',
          links: [
            {
              color: 'blue darken-1',
              title: 'サイト',
              url: 'https://perches-team.github.io/perches/'
            }
          ]
        },
        {
          src: '/pytin.png',
          overview: '',
          title: '人々の暗黙知を共有する知識投稿アプリ',
          date: '2018/09/17',
          tags: [
            {
              color: 'green',
              textColor: 'white',
              title: '開発'
            },
            {
              color: 'orange',
              textColor: 'white',
              title: 'Django'
            },
            {
              color: 'orange',
              textColor: 'white',
              title: 'MySQL'
            }
          ],
          text:
            'Djangoアプリです。普段語り合うことが少ない暗黙知を投稿して、共有できるサービスです。言い換えるならばQiitaのエロ版です。私の強い思いでアダルトなサービスになりました。以下は同期の紹介ツイートです。',
          links: [
            {
              color: 'blue darken-1',
              title: '紹介ツイート',
              url:
                'https://twitter.com/tachibanayu24/status/1041700568492793856'
            },
            {
              color: 'blue darken-1',
              title: 'GitHub',
              url: 'https://github.com/tachibanayu24/py_slash_tinps'
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