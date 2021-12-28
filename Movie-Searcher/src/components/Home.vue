<template>
  <v-app id="app">
    <v-app-bar id="app-bar"
        absolute
        color="black"
        dark
        dense
        extension-height="40"
    >
      <!--background for app-bar-->
      <template id="app-bar-background"
          v-slot:img="{ props }"
      >
        <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(3,10,50,.7)"
        >
        </v-img>
      </template>

      <!--radio buttons-->
      <template id="radio-buttons"
          v-slot:extension
      >
        <v-row id="radio"
            class="justify-center align-center">
          <v-radio-group
              v-model="radioValue"
              hide-details
              row
          >
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
            <v-radio id="new"
                value=" "
                class="me-0"
                @click="
                    visibleNewMovieCards = true
                    visibleSelectedMovieCard = false
                    visibleFoundMovieCards = false
                    newBtnClick = !newBtnClick"
            >
              <template v-slot:label>
                <span
                    class="font-weight-black text-subtitle-1 font-italic"
                >
                  <strong>NEW</strong>
                </span>
              </template>
            </v-radio>
          </v-radio-group>
        </v-row>
      </template>

      <!--logo-->
      <v-img id="logo"
          :src="logo"
      >
      </v-img>

      <!--title-->
      <v-toolbar-title id="toolbar-title"
          class="mx-4 pe-3 text-h5 font-weight-bold font-italic mt-1 secondary--text"
      >
        LET'S FIND!
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!--search form-->
      <v-row id="large-size-search-form"
          class="ma-0 pa-0 justify-center col-6 d-none d-md-flex"
      >
        <v-form id="large"
            @submit.prevent=""
            v-if="visibleSearchForm"
            class="col-8 px-0 pt-1 "
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
              @keydown="onKeydownSearch"
              autofocus
          >
            <!--inner search button-->
            <template id="btn-search-inner"
                v-slot:prepend-inner>
              <v-btn
                  icon
                  @click = "
                      visibleNewMovieCards = false
                      visibleSelectedMovieCard = false
                      visibleFoundMovieCards = false
                      searchBtnClick = !searchBtnClick
                      checkRadioValue()
                      checkInputValue()"
              >
                <v-icon >mdi-magnify</v-icon>
              </v-btn>
            </template>
          </v-text-field>
        </v-form>
      </v-row>

      <!--search form open button-->
      <v-btn id="btn-showing-input-form"
          icon
          color="secondary"
          @click="visibleSearchForm = !visibleSearchForm"
      >
        <v-icon id="search-btn"
            v-if="visibleSearchForm === false"
        >
          mdi-magnify
        </v-icon>
        <v-icon id="close-btn"
            v-else
        >
          mdi-close-outline
        </v-icon>
      </v-btn>
    </v-app-bar>

    <!--search form-->
    <v-row id="small-size-search-form"
        class="mx-0 mb-0 pa-0 mt-16  pt-6  justify-center align-content-start col d-flex d-md-none"
    >
      <v-form id="small"
          @submit.prevent=""
          v-if="visibleSearchForm"
          class="col-8 px-0 pt-1 mb-2 mx-0  d-md-none"
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
        >
          <template v-slot:prepend-inner>
            <v-btn
                icon
                @click="
                    visibleNewMovieCards = false
                    visibleSelectedMovieCard = false
                    visibleFoundMovieCards = false
                    searchBtnClick = !searchBtnClick
                    checkRadioValue()
                    checkInputValue()"
            >
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </v-form>
    </v-row>

    <!--calling the MoviesCards component-->
    <MoviesCards id="movies-card"
        :visible-new-movie-cards="visibleNewMovieCards"
        :visible-found-movie-cards="visibleFoundMovieCards"
        :visible-selected-movie-card="visibleSelectedMovieCard"
        :input-value="inputValue"
        :radio-value="radioValue"
        :search-btn-click="searchBtnClick"
        :new-btn-click="newBtnClick"
        :set-empty-radio="setEmptyRadio">
    </MoviesCards>

    <!--footer-->
    <v-footer padless>
      <v-col
          cols="12">
        <v-row class="col-12 justify-center align-center py-2 px-0 mx-auto">
        <span class="text-body-2 info--text me-2 my-2">
          Created by
            <strong>
              <a
                  class="secondary--text text-decoration-none"
                  href="https://telegram.me/Ivan_V_Kono"
                  target="_blank"
              >
                Ivan V. Kono
              </a>
            </strong>
          with
        </span>
          <a id="vue-link"
             href="https://vuejs.org/"
             target="_blank"
             class="text-decoration-none"
          >
            <v-img id="vue-logo"
                   :src="vueLogo"
                   max-width="28"
                   max-height="28"
                   class="me-2"
            ></v-img>
          </a>
          <span class="info--text me-2">&</span>
          <a id="vuetify-link"
             href="https://vuetifyjs.com/"
             target="_blank"
             class="text-decoration-none"
          >
            <v-img id="vuetify-logo"
                   :src="vuetifyLogo"
                   max-width="26"
                   max-height="25"
                   class="me-2"
            ></v-img>
          </a>

        </v-row>
      </v-col>
    </v-footer>
  </v-app>
</template>


<script>
/*import the MoviesCards component*/
import MoviesCards from "@/components/MoviesCards";

const ENTER = 13

export default {
  name: "Home",
  components: {
    MoviesCards,
  },
  data: () => ({

    /**
     * @desc The value entered in the search field
     * @type {string}
     */
    inputValue: '',

    /*----- Source of the logo image ------*/
    logo: require('@/assets/logo-orange25.png'),

    /**
     * @description Switch to return to new movies page
     * @type {boolean}
     */
    newBtnClick: true,

    /**
     * @description Chosen value of radio-button
     * @type {string}
     */
    radioValue: ' ',

    /**
     * @description Switch indicating that a new search has started
     * @type {boolean}
     */
    searchBtnClick: true,

    /**
     * @description Switch indicating the visibility of the search form
     * @type {boolean}
     */
    visibleSearchForm: false,

    /**
     * @description Switch indicating the visibility of the visibility of a row of cards of found movies
     * @type {boolean}
     */
    visibleFoundMovieCards: false,

    /**
     * @description Switch indicating the visibility of the card with the description of the selected movie
     * @type {boolean}
     */
    visibleSelectedMovieCard: false,

    /**
     * @description Switch indicating the visibility of a row of cards of new movies
     * @type {boolean}
     */
    visibleNewMovieCards: true,

    /*----- Source of the vue logo image  -----*/
    vueLogo: require('@/assets/vue_logo.svg'),

    /*----- Source of the vuetify logo image -----*/
    vuetifyLogo: require('@/assets/vuetify_logo.svg'),

  }),

  methods: {
    /**
     * This method checks if a value is entered into the search form and if Russian letters are present there,
     * removes spaces
     * @param{string} inputValue Entered value into the search form
     */
    checkInputValue() {
      if(/[а-яё]/i.test(this.inputValue) || this.inputValue == null) this.inputValue = ''
      this.inputValue = this.inputValue.trim()
    },

    /**
     * This method checks a value of radio-buttons and modifies it (if necessary) for use in the API request
     * @param{string} radioValue Value of radio-button
     */
    checkRadioValue() {
      if(this.radioValue === " " || !this.radioValue) this.radioValue = "&type="
    },

    /**
     * This method starts a movie search when you press Enter
     * @param{key} e Pressed key
     */
    onKeydownSearch(e) {
      if (e.keyCode === ENTER) {
        this.visibleNewMovieCards = false
        this.visibleSelectedMovieCard = false
        this.visibleFoundMovieCards = false
        this.visibleAlert = false
        this.searchBtnClick = !this.searchBtnClick
        this.checkRadioValue()
        this.checkInputValue()
      }
    },

    /**
     * This method used for invalid inputValue to reset radioValue
     * @param {string} radioValue Value of radio-button
     */
    setEmptyRadio() {
      this.radioValue = ''
    },
  },

}
</script>

<style>
/*------ background styles -------------*/
#app,
footer {
  background: #000 linear-gradient(to top right, rgba(100,115,201,.7), rgba(3,10,50,.7)) !important;
  height: 100%
}

/*------ logo styles -------------------*/
#logo {
  max-height: 29px;
  max-width: 29px;
}

/*------ search forms styles -----------*/
#large {
  max-height: 40px!important;
  min-width: 256px;
  max-width: 960px !important;
}
#small {
  max-height: 40px!important;
  min-width: 280px;
  max-width: 960px !important;
}

/*------ radio buttons styles-----------*/
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
.v-label span :hover{
  color: #FFE0B2 !important;
}
.v-item--active .v-label span strong {
  color: #FFA726 !important;
}

/*------- input styles-----------------*/
.v-input__control {
  max-height: 20px !important;
}
.theme--light.v-input,
.theme--light.v-input input,
.theme--light.v-input textarea {
  color: rgba(0,0,0,0.54) !important;
  caret-color: rgba(0,0,0,0.54) !important;
}
.v-text-field.v-input--dense:not(.v-text-field--outlined) input {
  padding: 0;
}
form {
  align-self: center!important;
}

/*------ cards row styles -------------*/
#movies-card {
  background-position: center;
  background-size: cover;
  height: 100%;
}

/*------------  card styles -----------*/
.card-img :hover,
.v-image :hover,
.v-responsive__content :hover,
.v-image__image .v-image__image--cover :hover {
  transition: 0.75s !important;
  transform: scale(1.1) !important;
  overflow: hidden !important;
}

/*------- pagination styles -----------*/
#pagination .v-pagination__item {
  background: #000 linear-gradient(to top right, rgba(100,115,201,.7), rgba(3,10,50,.7))!important;
  color: #FFA726!important;
  font-weight: bold;
}
#pagination .v-pagination__item--active {
  background: #FFE0B2 !important;
  color: #030a32 !important;
}
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
#vuetify-logo {
  margin-bottom: 2px;
}

</style>