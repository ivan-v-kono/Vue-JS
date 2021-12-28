<template>

  <v-main id="app-card-details"
      class="mt-2 mt-md-12"
  >
    <!--display of detailed information about the selected movie-->
    <v-row id="details-card"
        class="mt-2 mb-0 mx-2 mt-md-16  transparent rounded justify-center"
    >
      <!--poster-->
      <v-col id="posters"
          class="col-12 col-sm-6 col-lg-4 col-xl-3">
        <v-card
            max-height="676"
            width="440"
            class="pa-0"
        >
          <v-img
              v-if="this.selectedMovieDetail['Poster'] && this.selectedMovieDetail['Poster'] !== 'N/A'"
              :src="this.selectedMovieDetail['Poster']"
              aspect-ratio="0.65"
          >
          </v-img>
          <!--in the absence of a poster-->
          <v-img
              v-else
              :src="posterNotAvailableSrc"
              aspect-ratio="0.65"
          >
          </v-img>
        </v-card>
      </v-col>

      <!--details-->
      <v-card id="list"
          color="transparent"
          class="col px-0 "
          flat
      >
        <v-list
            class="pa-0 ma-0 mb-3"
            color="transparent"
            dense
        >
          <!--title-->
          <v-list-item id="title">
            <v-list-item-content class="info--text text-h6">
                {{ this.selectedMovieDetail['Title'] }}
            </v-list-item-content>
          </v-list-item>

          <!--stars with an IMDB rating-->
          <v-list-item id="stars"
              v-if="this.selectedMovieDetail['imdbRating'] && this.selectedMovieDetail['imdbRating'] !== 'N/A'"
          >

            <!--IMDB rating-->
            <v-list-item-content
                  class="info--text pt-0 pb-3"
            >
              IMDB: {{ this.selectedMovieDetail['imdbRating'] + "   " }}
                <v-img
                    v-for="s in stars.length"
                    :key="s"
                    :src= starSvgSrc
                    max-height="18"
                    max-width="18"
                    class="mb-1"
                >
                </v-img>
            </v-list-item-content>
          </v-list-item>
          
          <!--awards-->
          <v-list-item id="awards">
            <v-list-item-content
                class="info--text pt-0 pb-3">
              Awards: {{ this.selectedMovieDetail['Awards'] }}
            </v-list-item-content>
          </v-list-item>

          <!--other detail-->
          <v-list-item id="other-details"
              v-for="(item, index) in Object.entries(this['selectedMovieDetail']).slice(1,9)"
              :key="index"
          >
            <v-list-item-content class="info--text pt-0 pb-3">
              {{ item[0] + ':  ' + "  " + item[1] }}
            </v-list-item-content>
          </v-list-item>
          <v-list-item id="plot">
            <v-list-item-content class="info--text pt-0 pb-3 text-justify">
              {{ this.selectedMovieDetail['Plot'] }}
            </v-list-item-content>
          </v-list-item>

          <!--button to close the full description of the movie-->
          <v-btn id="close-btn"
              outlined
              max-height="30"
              color="info"
              class="float-right me-4 align-self-end"
              @click="
                  closeTo()
                  scrollTo(0,0)"
          >
            Close
          </v-btn>
        </v-list>
      </v-card>
    </v-row>
  </v-main>

</template>

<script>

export default {
  name: "MovieDetails",
  props: {
    closeTo: Function,
    scrollTo: Function,
    stars: Array,
    selectedMovieDetail: Object,
  },
  data: ()  => ({
    /*----- Image source in the absence of a poster -----*/
    posterNotAvailableSrc: require('@/assets/poster_n-a.jpg'),

    /*----- Star picture source -----*/
    starSvgSrc: require('@/assets/star.svg'),
  }),
}
</script>

<style scoped>
/*------ card styles --------------------*/
  #details-card {
      border: 1px solid #FFE0B2 !important;
      background: #000 linear-gradient(to top right, rgba(100,115,201,.6), rgba(3,10,50,.6));
  }
</style>