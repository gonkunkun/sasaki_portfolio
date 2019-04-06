<template>
  <div class="contact mb-5">
    <my-title :title="title" :icon="icon"/>
  </div>
</template>

<script>
import MyTitle from '~/components/Title.vue'

export default {
  name: 'Contact',
  components: {
    MyTitle
  },
  data() {
    return {
      title: 'SNS/Contact',
      icon: 'contacts'
    }
  }
}
</script>

<style scoped>
</style>