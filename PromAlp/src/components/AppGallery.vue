<template>
  <v-main >
    <v-container>
      <v-row align="center" justify="center" no-gutters>
        <v-col
            v-for="(item, index) in gallery"
            :key="index"
            class="d-flex child-flex pa-2 justify-center"
            cols="12"
            md="6"
            lg="4"
            xl="3"

        ><!--aspect-ratio="0.55"-->
          <v-img
              :src="item.src"
              lazy-src="https://via.placeholder.com/16/9"
              class="rounded"
              dark
              aspect-ratio="0.6796875"
              max-width="384"
              max-height="512"
          >
            <template v-slot:placeholder>
              <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
              >
                <v-progress-circular
                    indeterminate
                    color="warning"
                ></v-progress-circular>
              </v-row>
            </template>
            <p
                :class="item.titleColor"
                class="text-h6 font-weight-bold ps-2 ">{{ item.description }}</p>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    gallery: Array,
  },
  data: () => ({
  })
}
</script>

<style scoped>

</style>