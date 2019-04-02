<template>
  <v-content>
    <v-container fluid>
      <v-layout column justify-center align-center>
        <v-flex xs12 sm8 md6 class="mb-5">
          <h3 class="display-1">About me</h3>
          <v-divider class="mb-3"></v-divider>
          <div class="title mb-3">Check out our newest features!</div>
          <span
            class="subheading"
          >Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
          <v-btn class="mx-0" color="primary" large>See more</v-btn>
        </v-flex>
      </v-layout>

      <v-layout column justify-center align-center>
        <v-flex xs12 sm8 md6 class="mb-1">
          <h3 class="display-1">Works</h3>
          <v-divider class="mb-3"></v-divider>
          <div class="title mb-3">Check out our newest features!</div>
          <span
            class="subheading"
          >Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
        </v-flex>
      </v-layout>

      <v-layout row wrap align-center justify-space-around fill-height class="mb-5">
        <v-flex xs12 sm6 md4 class="pa-3">
          <v-card>
            <v-img
              class="white--text"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">Top 10 Australian beaches</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <span class="grey--text">Number 10</span>
                <br>
                <span>Whitehaven Beach</span>
                <br>
                <span>Whitsunday Island, Whitsunday Islands</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn outline color="indigo">Outline Button</v-btn>
              <v-btn outline color="indigo">Outline Button</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6 md4 class="pa-3">
          <v-card>
            <v-img
              class="white--text"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">Top 10 Australian beaches</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <span class="grey--text">Number 10</span>
                <br>
                <span>Whitehaven Beach</span>
                <br>
                <span>Whitsunday Island, Whitsunday Islands</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 class="pa-3">
          <v-card>
            <v-img
              class="white--text"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">Top 10 Australian beaches</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <span class="grey--text">Number 10</span>
                <br>
                <span>Whitehaven Beach</span>
                <br>
                <span>Whitsunday Island, Whitsunday Islands</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout column justify-center align-center>
        <v-flex xs12 sm8 md6 class="mb-5">
          <h3 class="display-1">My skill set</h3>
          <v-divider class="mb-3"></v-divider>
          <div class="title mb-3">Check out our newest features!</div>
          <span
            class="subheading"
          >Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
          <v-btn class="mx-0" color="primary" large>See more</v-btn>
        </v-flex>

        <v-flex xs12 sm8 md6 class="mb-5">
          <h3 class="display-1">SNS/Contact</h3>
          <v-divider class="mb-3"></v-divider>
          <div class="title mb-3">Check out our newest features!</div>
          <span
            class="subheading"
          >Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
          <v-btn class="mx-0" color="primary" large>See more</v-btn>
        </v-flex>
      </v-layout>

      <v-layout column justify-center align-center>
        <v-flex xs12 sm8 md6>
          <div class="text-xs-center">
            <logo/>
            <vuetify-logo/>
          </div>
          <v-card>
            <v-card-title class="headline">Welcome to the Vuetify + Nuxt.js template</v-card-title>
            <v-card-text>
              <p>
                Vuetify is a progressive Material Design component framework for
                Vue.js. It was designed to empower developers to create amazing
                applications.
              </p>
              <p>
                For more information on Vuetify, check out the
                <a
                  href="https://vuetifyjs.com"
                  target="_blank"
                >documentation</a>.
              </p>
              <p>
                If you have questions, please join the official
                <a
                  href="https://chat.vuetifyjs.com/"
                  target="_blank"
                  title="chat"
                >discord</a>.
              </p>
              <p>
                Find a bug? Report it on the github
                <a
                  href="https://github.com/vuetifyjs/vuetify/issues"
                  target="_blank"
                  title="contribute"
                >issue board</a>.
              </p>
              <p>
                Thank you for developing with Vuetify and I look forward to bringing
                more exciting features in the future.
              </p>
              <div class="text-xs-right">
                <em>
                  <small>&mdash; John Leider</small>
                </em>
              </div>
              <hr class="my-3">
              <a href="https://nuxtjs.org/" target="_blank">Nuxt Documentation</a>
              <br>
              <a href="https://github.com/nuxt/nuxt.js" target="_blank">Nuxt GitHub</a>
            </v-card-text>
            <v-card-actions>
              <v-spacer/>
              <v-btn color="primary" flat nuxt to="/inspire">Continue</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      card_text:
        'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
    }
  }
}
</script>
