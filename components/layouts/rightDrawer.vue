<template>
    <v-navigation-drawer v-model="$store.state.default.rightDrawer" :right="$store.state.default.right" temporary fixed>
      <v-list>
        <v-list-tile @click.native="$store.commit('default/tglRight')">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
    }
  }
}
</script>
