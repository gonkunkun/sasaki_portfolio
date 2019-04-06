<template>
  <div class="my-card">
    <v-flex xs12 sm6 md4 class="pa-3">
      <v-card width="300px" aspect-radio="2.75">
        <v-img class="white--text" height="200px" :src="item.src">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{ item.overview }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <div class="headline">{{ item.title }}</div>
            <v-layout row wrap>
              <v-flex xs3>
                <span class="grey--text caption mr-3">{{ item.date }}</span>
              </v-flex>
              <v-flex xs9>
                <v-chip
                  v-for="tag in item.tags"
                  :key="tag.title"
                  small
                  :color="tag.color"
                  :text-color="tag.textColor"
                  class="mx-1 pa-0"
                >{{ tag.title }}</v-chip>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <span>{{ item.text }}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-layout row wrap>
            <v-flex xs12>
              <v-btn
                v-for="link in item.links"
                :key="link.title"
                small
                :color="link.color"
                dark
                class="mx-1 pa-0"
                :href="link.url"
                target="_blank"
              >{{ link.title }}</v-btn>
            </v-flex>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['item']
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