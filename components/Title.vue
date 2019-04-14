<template>
  <v-layout column justify-left align-left>
    <v-flex xs12 sm8 md6 class="mb-1">
      <h3 class="display-1 font-weight-black">
        <v-icon x-large class="mr-1">{{ icon }}</v-icon>
        {{ title }}
      </h3>
      <v-divider class="mb-3"></v-divider>
      <!-- <div class="title mb-3">Check out our newest features!</div>
      <span
        class="subheading"
      >Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>-->
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped></style>
