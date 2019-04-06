<template>
  <div class="my-card">
    <v-flex xs12 sm6 md4 class="pa-3">
      <v-card width="300px" aspect-radio="2.75">
        <v-img class="white--text" height="200px" :src="src">
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
            <span>{{ title }}</span>
            <br>
            <span>{{ text }}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn outline color="indigo">Button</v-btn>
          <v-btn outline color="indigo">Outline</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    src: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
p {
  display: inline-block;
}

.card-title {
  font-weight: bold;
  background: #f1c40f;
  color: white;
  border-radius: 8px;
  padding: 0.2rem 0.7rem 0.2rem 0.7rem;
  margin-bottom: 1rem;
}
</style>