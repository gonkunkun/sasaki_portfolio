<template>
  <v-navigation-drawer
    v-model="$store.state.default.drawer"
    :mini-variant="$store.state.default.miniVariant"
    :clipped="$store.state.default.clipped"
    disable-resize-watcher
    fixed
    app
  >
    <v-list>
      <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to" router exact>
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"/>
        </v-list-tile-content>
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
          icon: 'face',
          title: 'About me',
          to: "{ name: 'id', params: { id: about }}"
        },
        {
          icon: 'build',
          title: 'My skill set',
          to: '#skill'
        },
        {
          icon: 'create',
          title: 'Works',
          to: '#works'
        },
        {
          icon: 'contacts',
          title: 'SNS/Contact',
          to: '#contacts'
        }
      ]
    }
  }
}
</script>
