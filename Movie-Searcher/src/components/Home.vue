<!--TODO: USE GIT-->
<!--TODO: chek when input is absent/wrong or movie absent + max page in pagination = 0-->

<template>
  <v-app
  style="background: #000 linear-gradient(to top right, rgba(100,115,201,.7), rgba(3,10,50,.7));">
    <template id="appBar">
        <v-app-bar id="app-bar"
            absolute
            color="black"
            dark
            dense
            extension-height="40"
            >
        <template
              v-slot:img="{ props }">
            <v-img
                v-bind="props"
                gradient="to top right, rgba(100,115,201,.7), rgba(3,10,50,.7)"
            ></v-img>
          </template><!--app-bar background-->
        <template
              v-slot:extension
          >
            <v-row class="justify-center align-center">
              <v-radio-group id="radio"
                 v-model="radio"
                 hide-details
                 row

                 class=""
              ><!--mandatory-->
                <v-radio id="all"
                    value="&type="
                    class="me-6"

                >
                  <template v-slot:label>
                  <span
                      class="font-weight-black text-subtitle-1 font-italic"
                  >
                    <strong>ALL</strong>
                  </span>
                  </template>
                </v-radio>
                <v-radio id="movie"
                    value="&type=movie"
                    class="me-6"
                >
                  <template v-slot:label>
                  <span
                      class="font-weight-black text-subtitle-1 font-italic"
                  >
                    <strong>MOVIE</strong>
                  </span>
                  </template>
                </v-radio>
                <v-radio id="series"
                    value="&type=series"
                    class="me-6"
                >
                  <template v-slot:label>
                  <span
                      class="font-weight-black text-subtitle-1 font-italic"
                  >
                    <strong>SERIES</strong>
                  </span>
                  </template>
                </v-radio>
                <v-radio id="soon"
                    value=" "
                    class="me-0"
                    @click="
                      visibleUpcomingCards = true
                      visibleSelectedCard = false
                      visibleFoundCards = false
                      visibleSelectedFoundCard = false
                      visibleAlert = false"
                >
                  <template v-slot:label>
                  <span
                      class="font-weight-black text-subtitle-1 font-italic"
                  >
                    <strong>SOON</strong>
                  </span>
                  </template>
                </v-radio>
              </v-radio-group>
            </v-row>
          </template><!--radio-->

        <v-img
              :src="logo"
              style="max-height: 29px; max-width: 29px;"
              class=""
          ></v-img> <!--logo-->

        <v-toolbar-title

            class="mx-4 pe-3 text-h5 font-weight-bold font-italic mt-1 secondary--text"
        >
          LET'S FIND!
        </v-toolbar-title>

        <v-spacer></v-spacer>

          <v-row id="form-lg"
              class="ma-0 pa-0 justify-center col-6 d-none d-md-flex"
          >
            <v-form id="large"
                    @submit.prevent=""
                    v-if="visibleForm"
                    class="col-8 px-0 pt-1 "
                    style="max-height: 40px!important; min-width: 256px; max-width: 960px !important;"
            >
              <v-text-field id="text-field"
                  v-model="inputValue"
                  clearable
                  type="text"
                  color="rgba(118,118,118)"
                  solo
                  dense
                  hide-details
                  background-color="#fff"
                  light

                  class=""
                  @keydown="onKeydown"
                  autofocus

              ><!--   @blur="inputValue = ''"  --> <!--@focus="inputValue = ''"-->
                <template id="btn-search-inner"
                    v-slot:prepend-inner>
                  <v-btn
                      icon
                      @click="
                        getFoundMoviesData()
                        visibleUpcomingCards = false
                        visibleSelectedCard = false
                        visibleFoundCards = true
                        page = 1
                        visibleAlert = false
                      "

                  ><!--radio = ''"--><!--radio = '&type='-->
                    <v-icon >mdi-magnify</v-icon>
                  </v-btn>
                </template>
              </v-text-field>
            </v-form>
          </v-row>
          <v-btn id="btn-show-input"
            icon
            color="secondary"
            @click="visibleForm = !visibleForm"
          >
            <v-icon v-if="visibleForm === false">mdi-magnify</v-icon>
            <v-icon v-if="visibleForm === true">mdi-close-outline</v-icon><!--close-circle-outline-->
          </v-btn>


        </v-app-bar>
    </template><!--app-bar-->
    <v-main
        :style="{ backgroundImage: 'url(' + `${backgroundImgSrc[0]}` + ')' }"
        style="background-position: center; background-size: cover; height: fit-content"
        class="align-center "
    >
      <!--TODO: make pre-load img (loader in JS version)-->
      <v-row id="form-small"
             class="mx-0 mb-0 pa-0 mt-15 pt-8 justify-center col d-flex d-md-none"
      ><!--style="   -->
        <v-form
                @submit.prevent=""
                v-if="visibleForm"
                class="col-8 pa-0 ma-0  d-md-none"
                style="max-height: 40px!important; min-width: 280px; max-width: 960px !important; "

        >
          <v-text-field id="text-field"
                        v-model="inputValue"
                        clearable
                        type="text"
                        color="rgba(118,118,118)"
                        solo
                        dense
                        hide-details
                        background-color="#fff"
                        light

                        autofocus

                        class=""
          ><!--@blur="inputValue = ''"--> <!--@focus="inputValue = ''"-->
            <template v-slot:prepend-inner>
              <v-btn
                  icon
                  @click="
                        getFoundMoviesData(inputValue)
                        visibleUpcomingCards = false
                        visibleSelectedCard = false
                        visibleFoundCards = true
                        page = 1"
              >
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </template>
          </v-text-field>
        </v-form>
      </v-row>

      <v-row id="upcomingCards"
        v-if="visibleUpcomingCards"
        class="my-0 mx-0 mt-md-16 pt-md-8 justify-center justify-md-space-between justify-lg-space-around "
      >
        <template>
          <v-card
              v-for="(movie,index) in upcomingMoviesDetail.slice(0,12)"
              :key="index"
              class="mx-4 my-2"
              max-width="240"
              style="background: #000 linear-gradient(to top right, rgba(100,115,201,.7), rgba(3,10,50,.7)); overflow: hidden;"
              @click="
                getSelectedMovieDetail(movie['imdbID'])
                visibleUpcomingCards = false
                visibleSelectedCard = true
                backgroundImgSrc[0] = movie['Poster']
                scrollTo(0,0)"
          >
            <v-img
                class="white--text align-end ma-2 card-img"
                :src="movie['Poster']"
                height="315"
                width="220"
                aspect-ratio="270/410"
            >
            </v-img>
            <v-card-title
                class="info--text align-self-start pt-0 px-2 text-wrap"
                style="font-size: 17px;"
            >
              {{ movie["Title"] }}
            </v-card-title>
            <v-card-subtitle class="pb-1 red--text info--text px-2 mb-2">
              {{ movie["Released"] }}
            </v-card-subtitle>
            <p
                class="text-h5 secondary red--text font-weight-black ma-0 ps-16 card-img mt-n10"
                style="
                    -webkit-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                    position: relative;
                    bottom: 360px;
                    right: 60px;
                    max-width: 250px"
            >Soon</p>
          </v-card>
        </template>
      </v-row>

      <v-row id="foundCards"
        v-if="visibleFoundCards"
        class="mt-0  mx-0 mt-md-16 pt-md-8 justify-center justify-md-space-between justify-lg-space-around "
      >
        <template>
          <v-card
              v-for="(movie,i) in foundMoviesData"
              :key="i"
              class="mx-4 my-2 "
              max-width="240"
              style="background: #000 linear-gradient(to top right, rgba(100,115,201,.7), rgba(3,10,50,.7)); overflow: hidden;"
              @click="
                getSelectedMovieDetail(movie['imdbID'])
                visibleUpcomingCards = false
                visibleFoundCards = false
                visibleSelectedCard = false
                visibleSelectedFoundCard = true
                backgroundImgSrc[0] = movie['Poster']
                scrollTo(0,0)"
          >
            <v-img
                v-if="movie['Poster'] && (movie['Poster'] !== 'N/A' )"
                class="white--text align-end ma-2 card-img"
                :src="movie['Poster']"
                height="295"
                width="220"
                aspect-ratio="270/410"
            >
            </v-img><!--poster available-->
            <v-img
                v-else
                class="white--text align-end ma-2 card-img"
                :src="posterNotAvailable"
                height="295"
                width="220"
                aspect-ratio="270/410"
            >
            </v-img><!--poster not available-->
            <v-card-title
                v-if="movie['Title'].length > 23"
                class="info--text align-self-start pt-0 px-2"
                style="
                  font-size: 17px;"
            >
              {{ (movie["Title"]).substr(0,21) + '...'}}
            </v-card-title><!-- length > 23 -->
            <v-card-title
                v-else
                class="info--text align-self-start pt-0 px-2"
                style="
                  font-size: 17px;"
            >
              {{ movie["Title"] }}
            </v-card-title><!-- length < 23-->
            <v-card-subtitle class="pb-1 red--text info--text px-2">
              {{ movie["Year"] }}
            </v-card-subtitle>
          </v-card>
        </template><!--cards-->
      </v-row>
      <p class="mt-4 d-none d-md-flex"></p>
      <v-row id="selectedCard"
        v-if="visibleSelectedCard"
        class="mt-1 mb-0 py-0 mx-2 transparent rounded justify-center"
        style=" border: 1px solid #FFE0B2 !important;
                background: #000 linear-gradient(to top right, rgba(100,115,201,.7), rgba(3,10,50,.7));"
      >
        <template>
          <v-col id="posters"
              class="col-12 col-sm-6 col-lg-4 col-xl-3">
            <v-card
                    max-height="676"
                    width="440"
                    class="pa-0"
            >
              <v-img
                  :src="this.selectedMovieDetail['Poster']"
                  aspect-ratio="0.65"
                  class=""
              >
              </v-img>
            </v-card>
          </v-col>
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
              <v-list-item class="">
                <v-list-item-content class="info--text text-h6">
                  {{ this.selectedMovieDetail['Title'] }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item class="">
                <v-list-item-content class="info--text pt-0 pb-3">
                  Awards: {{ this.selectedMovieDetail['Awards'] }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                  v-for="(item, index) in Object.entries(this.selectedMovieDetail).slice(1,9)"
                  :key="index"
              >
                <v-list-item-content class="info--text pt-0 pb-3">
                  {{ item[0] + ':  ' + "  " + item[1] }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content class="info--text pt-0 pb-3 text-justify">
                  {{ this.selectedMovieDetail['Plot'] }}
                </v-list-item-content>
              </v-list-item>
              <v-btn
                  outlined
                  max-height="30"
                  color="info"
                  class="float-right me-4 align-self-end"
                  @click="
                  visibleUpcomingCards = true
                  visibleSelectedCard = false
                  scrollTo(0,0)"
              >
                Close
              </v-btn>
            </v-list>
          </v-card>
        </template>
      </v-row>

      <v-row id="selectedFoundCard"
             v-if="visibleSelectedFoundCard"
             class="mt-1 mb-0 py-0 mx-2 transparent rounded justify-center"
             style=" border: 1px solid #FFE0B2 !important;
                background: #000 linear-gradient(to top right, rgba(100,115,201,.7), rgba(3,10,50,.7));"
      >
        <template>
          <v-col id="poster"
                 class="col-12 col-sm-6 col-lg-4 col-xl-3">
            <v-card
                max-height="676"
                width="440"
                class="pa-0"
            >
              <v-img
                  v-if="this.selectedMovieDetail['Poster'] && (this.selectedMovieDetail['Poster'] !== 'N/A' )"
                  :src="this.selectedMovieDetail['Poster']"
                  aspect-ratio="0.65"
                  class=""
              >
              </v-img><!--poster available-->
              <v-img
                  v-else
                  :src="posterNotAvailable"
                  aspect-ratio="0.65"
                  class=""
              >
              </v-img><!--poster not available-->
            </v-card>
          </v-col>
          <v-card id="list2"
                  color="transparent"
                  class="col px-0 "
                  flat
          >
            <v-list
                class="pa-0 ma-0 mb-3"
                color="transparent"
                dense

            >
              <v-list-item class="">
                <v-list-item-content class="info--text text-h6">
                  {{ this.selectedMovieDetail['Title'] }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item class="">
                <v-list-item-content class="info--text pt-0 pb-3">
                  IMDB: {{ this.selectedMovieDetail['imdbRating'] + "   " }} <!--{{stars.length}}-->
                  <v-img
                      v-for="s in stars.length"
                      :key="s"
                      :src= starSvg
                      max-height="18"
                      max-width="18"
                      class="mb-1"
                  >
                  </v-img><!---->
                </v-list-item-content>
              </v-list-item>
              <v-list-item class="">
                <v-list-item-content class="info--text pt-0 pb-3">
                  Awards: {{ this.selectedMovieDetail['Awards'] }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                  v-for="(item,i) in Object.entries(this.selectedMovieDetail).slice(1,9)"
                  :key="i"
              >
                <v-list-item-content class="info--text pt-0 pb-3">
                  {{ item[0] + ':  ' + "  " + item[1] }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content class="info--text pt-0 pb-3 text-justify">
                  {{ this.selectedMovieDetail['Plot'] }}
                </v-list-item-content>
              </v-list-item>
              <v-btn
                  outlined
                  max-height="30"
                  color="info"
                  class="float-right me-4 align-self-end"
                  @click="
                    visibleUpcomingCards = false
                    visibleSelectedCard = false
                    visibleSelectedFoundCard = false
                    visibleFoundCards = true
                    scrollTo(0,0)"
              >
                Close
              </v-btn>
            </v-list>
          </v-card>
        </template>
      </v-row>

      <v-row id="pagination"
          v-if="visibleFoundCards"
          class="my-0 mx-auto pt-0 col-12 justify-center">
        <template>
            <v-pagination
                 v-model="page"
                 :length="Math.trunc(Number(this.foundResults)/10)"
                 :total-visible="paginationCount"
                 prev-icon="mdi-arrow-left-bold"
                 next-icon="mdi-arrow-right-bold"
                 light
                 @input="getFoundMoviesData"
            ></v-pagination>
        </template>
      </v-row>
      <v-row id="alert"
             v-if="visibleAlert"
             class="my-0 mx-auto pt-0 col-12 justify-center"
      >
        <span class="text-h4 secondary--text font-weight-bold font-italic mb-16 pb-16">Oh... can't find anything. Try again ;)</span>
      </v-row>
    </v-main>

    <!--<p class="ps-16 ms-16 text-h3 white&#45;&#45;text">{{this.page}}</p>-->
    <!--<p class="ps-4 white&#45;&#45;text">{{inputValue}}</p>-->
    <!--<p class="ps-16 ms-16 text-h3 white&#45;&#45;text">{{foundMoviesData.totalResults}}</p>-->

  </v-app>

</template>

<script>

  const ENTER = 13

  export default {
    name: "Home",
    components: {
    },
    props: {
    },
    data: () => ({
      logo: require('@/assets/logo-orange25.png'),
      upcomingMoviesIDs: [],
      upcomingMoviesDetail: [],
      selectedMovieDetail: [],
      releasedDate: [],
      visibleForm: false,   // ----for input----
      inputValue: '',       // ----for input----
      upcomingMoviesPoster: [],
      visibleUpcomingCards: true,
      visibleSelectedCard: false,
      visibleFoundCards: false,
      visibleSelectedFoundCard: false,
      visibleAlert: false,
      backgroundImgSrc: [],
      starSvg: require('@/assets/star.svg'),
      foundMoviesData: [],
      radio: ' ',
      stars: [],
      page: 1,
      foundResults: '',
      paginationCount: 5,
      posterNotAvailable: require('@/assets/poster_n-a.jpg'),
    }),
    methods: {
      getUpcomingMoviesIDs() {
      fetch("https://data-imdb1.p.rapidapi.com/movie/order/upcoming/?page_size=50", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
          "x-rapidapi-key": "ba1bc5516dmsh751a3d2c0550f65p160274jsn784996b2b7a1"
        }
      })
        .then(response => response.json())
        .then(data => this.getUpcomingMoviesDetail(data));
    },

      getUpcomingMoviesDetail(data) {
      /*console.log(data)*/
      this.upcomingMoviesIDs = data.results.map(item => item['imdb_id'])
      /*console.log(this.upcomingMoviesIDs)*/
      for (let id of this.upcomingMoviesIDs/*i = 0; i < 30; i++*/) {
        fetch('https://www.omdbapi.com/?apikey=d87285dc&i=' + id)
            .then(response => response.json())
            .then(data => {

              if ((new Date(data["Released"]) >= new Date) && data["Poster"] !== 'N/A') {
                this.upcomingMoviesDetail.push(data);
                this.upcomingMoviesPoster.push(data["Poster"])
                this.backgroundImgSrc.push(data["Poster"])
              }
            });
      }

    },

      getSelectedMovieDetail(id) {
      /*console.log(this.backgroundImgSrc)*/
      fetch('https://www.omdbapi.com/?apikey=d87285dc&plot=full&i=' + id)
          .then(response => response.json())
          .then(data => {
            this.selectedMovieDetail = data
            if (data["imdbRating"] && data["imdbRating"] !== 'N/A') {
              this.getStars(data)
            }
          });
    },

      getFoundMoviesData() {
      fetch('https://www.omdbapi.com/?apikey=d87285dc&s=' + this.inputValue + '&page=' + this.page + this.radio)
          .then(response => response.json())
          .then(data => {
            if(data.Response === "False") {
              this.visibleUpcomingCards = false
              this.visibleSelectedCard = false
              this.visibleFoundCards = false
              this.visibleSelectedFoundCard = false
              this.visibleAlert = true
              this.backgroundImgSrc[0] = ''
              this.radio = ''
            }
            else {
              if(this.radio === " " || !this.radio) this.radio = "&type="
              this.foundMoviesData = data['Search']
              this.backgroundImgSrc.unshift(data['Search'][0]['Poster'])
              this.foundResults = data["totalResults"]
            }
          });
    },

      scrollTo(x,y){
      window.scrollTo(x,y)
    },

      onKeydown(e) {
        if (e.keyCode === ENTER) {
          this.getFoundMoviesData()
          this.visibleUpcomingCards = false
          this.visibleSelectedCard = false
          this.visibleFoundCards = true
          this.visibleAlert = false
        }
      },

      getStars(data) {
        this.stars.length = Math.round(Number(data["imdbRating"]))
      },
    },

  beforeMount() {
    this.getUpcomingMoviesIDs();
  },
}
</script>

<style > /*scoped*/


/*---------- radio-------------------*/
.v-toolbar__content {
  padding-bottom: 0!important;
  padding-left: 12px!important;
  padding-right: 12px!important;
}
.v-toolbar__extension {
  padding-top: 0!important;
  padding-bottom: 0!important;
}
.v-input--selection-controls {
  padding: 0!important;
}
.v-input--selection-controls__input {
  display: none !important;
}
.v-label span strong {
  color: rgba(189,189,189,0.7) !important;
}
.v-label span /*strong*/ :hover{
  color: #FFE0B2/*#FFE082*//*#FFCC80*/ !important;
}
.v-item--active .v-label span strong {
  color: #FFA726/*#B71C1C*/ !important;
}

/*------- input-----------------*/
.v-input__control {
  max-height: 20px !important;
}
.theme--light.v-input, .theme--light.v-input input, .theme--light.v-input textarea {
  color: rgba(0,0,0,0.54) !important;
  caret-color: rgba(0,0,0,0.54) !important;
}
.v-text-field.v-input--dense:not(.v-text-field--outlined) input {
  padding: 0;
}
form {
  align-self: center!important;
}

.card-img :hover,
.v-image :hover,
.v-responsive__content :hover,
.v-image__image .v-image__image--cover :hover {
  transition: 0.75s !important;
  transform: scale(1.1) !important;
  overflow: hidden !important;
}

/*------- Pagination --------------*/
#pagination .v-pagination__item {
  background: #000 linear-gradient(to top right, rgba(100,115,201,.7), rgba(3,10,50,.7))!important;
  /*opacity: 0.9;*/
  color: #FFA726!important;
  font-weight: bold;
}
#pagination .v-pagination__item--active {
  background: #FFE0B2 !important; /*#9cacbf*/ /*#FFA726*/
  color: #030a32 !important;
}/*.v-pagination__item*/  /*#2b6684*/ /**/

.v-pagination__navigation {
  background: transparent !important;
  border: 1px solid #FFA726;
}

.v-pagination__navigation .mdi-arrow-right-bold,
.v-pagination__navigation .mdi-arrow-left-bold {
  color: #FFA726!important;
}
.v-pagination__navigation--disabled {
  opacity: 0.3 !important;
}

</style>





