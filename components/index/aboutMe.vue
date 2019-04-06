<template>
  <div class="aboutme mb-5">
    <my-title :title="title" :icon="icon"/>
  </div>
</template>

<script>
import MyTitle from '~/components/Title.vue'

export default {
  name: 'aboutme',
  components: {
    MyTitle
  },
  data() {
    return {
      title: 'About me',
      icon: 'face'
    }
  }
}
</script>

<style scoped>
</style>