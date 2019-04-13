<template>
  <div id="skill" class="skill mb-5">
    <h2>
      <my-title :title="title" :icon="icon"/>
    </h2>

    <v-container fluid class="py-1">
      <v-card class="pa-1">
        <v-flex xs12 class="mb-1">
          <h4 class="headline font-weight-black">
            <v-icon x-large class="mr-1">desktop_mac</v-icon>Front-end
          </h4>
        </v-flex>
        <v-layout
          class="pb-2"
          text-md-center
          text-sm-center
          text-xs-center
          align-center
          justify-center
          row
          wrap
        >
          <v-flex xs4 sm3 md2 offset-md1 class="ma-1">
            <v-flex xs10 offset-xs1>
              <v-layout align-center justify-center row wrap>
                <v-flex xs6>
                  <i class="fab fa-html5 fa-5x"></i>
                </v-flex>
                <v-flex xs6>
                  <i class="fab fa-css3-alt fa-5x"></i>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex>
              <div class="subheading">HTML/CSS</div>
            </v-flex>
            <v-flex>
              <div class="caption">個人開発で使う程度には書けます</div>
            </v-flex>
          </v-flex>
          <v-flex xs4 sm3 md2 offset-md1 class="ma-1">
            <v-flex xs10 offset-xs1>
              <v-layout align-center justify-center row wrap>
                <v-flex xs12>
                  <i class="fab fa-js-square fa-5x"></i>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex>
              <div class="subheading">JavaScript</div>
            </v-flex>
            <v-flex>
              <div class="caption">GoogleMapの操作に使用</div>
            </v-flex>
          </v-flex>
          <v-flex xs4 sm3 md2 offset-md1 class="ma-1">
            <v-flex xs10 offset-xs1>
              <v-layout align-center justify-center row wrap>
                <v-flex xs6>
                  <i class="fab fa-vuejs fa-5x"></i>
                </v-flex>
                <v-flex xs6>
                  <img class="icon-img" alt="Nuxtロゴ" src="~/assets/nuxt.svg">
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex>
              <div class="subheading">Vue/Nuxt</div>
            </v-flex>
            <v-flex>
              <div class="caption">ポートフォリオ作成に使用</div>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>

    <v-container fluid class="py-1">
      <v-card class="pa-1">
        <v-layout row wrap align-center justify-start fill-height>
          <h4 class="headline">
            <i class="fas fa-server fa-fw fa-lg"/>
          </h4>
          <h4 class="headline font-weight-black pt-3">Back-end</h4>
        </v-layout>
        <v-layout
          class="pb-2"
          text-md-center
          text-sm-center
          text-xs-center
          align-center
          justify-center
          row
          wrap
        >
          <v-flex xs4 sm3 md2 offset-md1 class="ma-1">
            <v-flex xs10 offset-xs1>
              <v-layout align-center justify-center row wrap>
                <v-flex xs12>
                  <i class="fab fa-php fa-5x"></i>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex>
              <div class="subheading">PHP</div>
            </v-flex>
            <v-flex>
              <div class="caption">卒業研究用にWebページ開発</div>
            </v-flex>
          </v-flex>
          <v-flex xs4 sm3 md2 offset-md1 class="ma-1">
            <v-flex xs10 offset-xs1>
              <v-layout align-center justify-center row wrap>
                <v-flex xs12>
                  <i class="fab fa-java fa-5x"></i>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex>
              <div class="subheading">Java</div>
            </v-flex>
            <v-flex>
              <div class="caption">社内システムのバックエンドを実装するのに使用</div>
            </v-flex>
          </v-flex>
          <v-flex xs4 sm3 md2 offset-md1 class="ma-1">
            <v-flex xs10 offset-xs1>
              <v-layout align-center justify-center row wrap>
                <v-flex xs12>
                  <img class="icon-img" alt="Rubyロゴ" src="~/assets/ruby-on-rails.svg">
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex>
              <div class="subheading">Ruby on Rails</div>
            </v-flex>
            <v-flex>
              <div class="caption">勉強中。個人アプリ開発に使用</div>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>

    <v-container fluid class="py-1">
      <v-card class="pa-1">
        <v-flex xs12 class="mb-1">
          <h4 class="headline font-weight-black">
            <v-icon x-large class="mr-1">brightness_high</v-icon>DevOps
          </h4>
        </v-flex>
        <v-layout
          class="pb-2"
          text-md-center
          text-sm-center
          text-xs-center
          align-center
          justify-center
          row
          wrap
        >
          <v-flex xs4 sm3 md2 offset-md1 class="ma-1">
            <v-flex xs10 offset-xs1>
              <v-layout align-center justify-center row wrap>
                <v-flex xs12>
                  <img class="icon-img" alt="Logstashロゴ" src="~/assets/logstash.svg">
                </v-flex>
              </v-layout>
            </v-flex>
            <!-- <v-flex>
              <div class="subheading">Logstash</div>
            </v-flex>-->
            <v-flex>
              <div class="caption">社内システムのメトリクス収集</div>
            </v-flex>
          </v-flex>

          <v-flex xs4 sm3 md2 offset-md1 class="ma-1">
            <v-flex xs10 offset-xs1>
              <v-layout align-center justify-center row wrap>
                <v-flex xs12>
                  <img class="icon-img" alt="Elasticsearchロゴ" src="~/assets/elasticsearch.svg">
                </v-flex>
              </v-layout>
            </v-flex>
            <!-- <v-flex>
              <div class="subheading">Elasticsearch</div>
            </v-flex>-->
            <v-flex>
              <div class="caption">メトリクス蓄積用DBとして</div>
            </v-flex>
          </v-flex>

          <v-flex xs4 sm3 md2 offset-md1 class="ma-1">
            <v-flex xs10 offset-xs1>
              <v-layout align-center justify-center row wrap>
                <v-flex xs12>
                  <img class="icon-img" alt="Kibanaロゴ" src="~/assets/kibana.svg">
                </v-flex>
              </v-layout>
            </v-flex>
            <!-- <v-flex>
              <div class="subheading">Kibana</div>
            </v-flex>-->
            <v-flex>
              <div class="caption">メトリクス可視化のために使用</div>
            </v-flex>
          </v-flex>

          <v-flex xs4 sm3 md2 offset-md1 class="ma-1">
            <v-flex xs10 offset-xs1>
              <v-layout align-center justify-center row wrap>
                <v-flex xs12>
                  <img class="icon-img" alt="ansibleロゴ" src="~/assets/ansible.svg">
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex>
              <div class="subheading">Ansible</div>
            </v-flex>
            <v-flex>
              <div class="caption">社内システムの構成管理に</div>
            </v-flex>
          </v-flex>

          <v-flex xs4 sm3 md2 offset-md1 class="ma-1">
            <v-flex xs10 offset-xs1>
              <v-layout align-center justify-center row wrap>
                <v-flex xs12>
                  <i class="fab fa-github fa-5x"/>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex>
              <div class="subheading">Git/GitHub</div>
            </v-flex>
            <v-flex>
              <div class="caption">個人開発で使っています</div>
            </v-flex>
          </v-flex>

          <!-- <v-flex xs4 sm3 md2 offset-md1 class="ma-1">
            <v-flex xs10 offset-xs1>
              <v-layout align-center justify-center row wrap>
                <v-flex xs12>
                  <i class="fab fa-aws fa-5x"/>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex>
              <div class="subheading">AWS</div>
            </v-flex>
            <v-flex>
              <div class="caption">資格取得がてら勉強中</div>
            </v-flex>
          </v-flex>

          <v-flex xs4 sm3 md2 offset-md1 class="ma-1">
            <v-flex xs10 offset-xs1>
              <v-layout align-center justify-center row wrap>
                <v-flex xs12>
                  <i class="fab fa-docker fa-5x"/>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex>
              <div class="subheading">Docker</div>
            </v-flex>
            <v-flex>
              <div class="caption">お勉強中です</div>
            </v-flex>
          </v-flex>-->
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
      icon: 'build'
    }
  }
}
</script>

<style scoped>
.icon-img {
  max-width: 180px;
  max-height: 70px;
}
.fa-html5 {
  color: rgb(234, 98, 39);
}
.fa-css3-alt {
  color: rgb(52, 152, 208);
}
.fa-js-square {
  color: #fbc02d;
}
.fa-vuejs {
  color: rgb(63, 178, 128);
}
.fa-php {
  color: #8a2be2;
}
.fa-java {
  color: #ff4500;
}
.fa-aws {
  color: rgb(255, 140, 0);
}
.fa-docker {
  color: rgb(30, 144, 255);
}
</style>