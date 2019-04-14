<template>
  <v-flex xs4 sm3 md2 offset-md1 class="ma-1">
    <!-- <v-container fluid> -->
    <v-layout
      text-md-center
      text-sm-center
      text-xs-center
      align-center
      justify-center
      row
      wrap
    >
      <v-flex xs12 class="mb-1">
        <v-img :src="item.src" height="125px" contain></v-img>
      </v-flex>
      <v-flex xs12>
        <div class="subheading">{{ item.title }}</div>
      </v-flex>
      <v-flex xs12>
        <div class="caption">{{ item.text }}</div>
      </v-flex>
    </v-layout>
    <!-- </v-container> -->
  </v-flex>
</template>

<script>
export default {
  name: 'CardSkl',
  props: ['item']
}
</script>

<style scoped>
.sklList {
  text-align: center;
}
</style>
