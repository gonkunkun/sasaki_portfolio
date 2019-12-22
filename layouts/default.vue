<template>
  <v-app>
    <!-- <default-sidebar/> -->
    <default-header />
    <nuxt />
    <!-- <default-right-drawer /> -->
    <default-footer />
  </v-app>
</template>

<script>
import DefaultHeader from '~/components/layouts/header'
import DefaultFooter from '~/components/layouts/footer'
export default {
  name: 'Default',
  components: {
    DefaultHeader,
    DefaultFooter
  },
  data() {
    return {}
  }
}
</script>
