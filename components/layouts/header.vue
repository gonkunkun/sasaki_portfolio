<template>
  <v-toolbar :clipped-left="clipped" fixed app>
    <v-toolbar-side-icon @click="$store.commit('default/tglDrawer')"/>
    <v-btn icon @click.stop="$store.commit('default/tglMiniVariant')">
      <v-icon>{{ `chevron_${$store.state.default.miniVariant ? 'right' : 'left'}` }}</v-icon>
    </v-btn>
    <v-toolbar-title v-text="$store.state.default.title"/>
    <v-spacer/>
    <!-- <v-btn icon @click.stop="$store.commit('default/tglRightDrawer')">
        <v-icon>menu</v-icon>
    </v-btn>-->
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
