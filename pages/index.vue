<template>
  <v-content>
    <v-container fluid>
      <about-me />
      <skill />
      <works />
      <contact />
    </v-container>
  </v-content>
</template>

<script>
import AboutMe from '~/components/index/aboutMe.vue'
import Skill from '~/components/index/skill.vue'
import Works from '~/components/index/works.vue'
import Contact from '~/components/index/contact.vue'

export default {
  components: {
    AboutMe,
    Skill,
    Works,
    Contact
  },
  data() {
    return {}
  }
}
</script>
