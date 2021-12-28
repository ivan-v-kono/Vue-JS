<template>
  <v-main id="cards-row"
      class="ma-0 pa-0"
      :style="{ backgroundImage: 'url(' + `${backgroundImgSrc[0]}` + ')' }"
  >
    <!--displaying cards of new films-->
    <v-row id="newCards"
        v-if="visibleNew"
        class="mt-0 mx-0 mt-md-16 pt-md-8 pb-5 justify-center justify-md-space-between justify-lg-space-around">
      <v-card
          v-for="(movie,index) in newMoviesDetail.slice(0,12)"
          :key="index"
          class="mx-4 my-2 cards-in-row"
          max-width="240"
          @click="
              visibleNew = false
              visibleFound = false
              visibleSelected = false
              visibleLoader = true
              returnToParent = 0 //where return by close btn
              backgroundImgSrc[0] = movie['Poster']
              getSelectedMovieDetail(movie['imdbID'])
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
        <!-- length > 23 -->
        <v-card-title
            v-if="movie['Title'].length > 23"
            class="info--text align-self-start pt-0 px-2 card-title"
        >
          {{ (movie["Title"]).substr(0, 21) + '...' }}
        </v-card-title>
        <!-- length < 23-->
        <v-card-title
            v-else
            class="info--text align-self-start pt-0 px-2 card-title"
        >
          {{ movie["Title"] }}
        </v-card-title>
        <v-card-subtitle class="pb-1 red--text info--text px-2 mb-2">
          {{ movie["Released"] }}
        </v-card-subtitle>
        <p id="ribbon"
            class="text-h5 secondary red--text font-weight-black ma-0 ps-16 card-img mt-n10"
        >
          {{ ribbonTitle }}
        </p>
      </v-card>
    </v-row>

    <!--displaying cards of found films-->
    <v-row id="foundCards"
        v-if="visibleFound"
        class="mt-0 mx-0 mt-md-16 pt-md-8 justify-center justify-md-space-between justify-lg-space-around ">
      <v-card
          v-for="(movie,i) in foundMoviesData"
          :key="i"
          class="mx-4 my-2 cards-in-row"
          max-width="240"
          @click="
              visibleNew = false
              visibleFound = false
              visibleSelected = false
              visibleLoader = true
              returnToParent = 1
              backgroundImgSrc[0] = movie['Poster']
              getSelectedMovieDetail(movie['imdbID'])
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
        </v-img>
        <!-- length > 23 -->
        <v-card-title
            v-if="movie['Title'].length > 23"
            class="info--text align-self-start pt-0 px-2 card-title"
        >
          {{ (movie["Title"]).substr(0, 21) + '...' }}
        </v-card-title>
        <!-- length < 23-->
        <v-card-title
            v-else
            class="info--text align-self-start pt-0 px-2 card-title"
        >
          {{ movie["Title"] }}
        </v-card-title>
        <v-card-subtitle class="pb-1 red--text info--text px-2">
          {{ movie["Year"] }}
        </v-card-subtitle>
      </v-card>
      <v-row id="pagination"
          v-if="visibleFound"
          class="my-0 mx-auto pt-0 col-12 justify-center">
        <v-pagination
            v-model="page"
            :length="Math.trunc(Number(this.foundResults)/10)"
            :total-visible="paginationCount"
            prev-icon="mdi-arrow-left-bold"
            next-icon="mdi-arrow-right-bold"
            light
            @input="getFoundMoviesDetails"
        >
        </v-pagination>
      </v-row>
    </v-row>

    <!--displaying alert message-->
    <v-row id="alert"
        v-if="visibleAlert"
        class="mb-0 mt-16 mx-auto pt-16 col-12 justify-center"
    >
      <p class="text-h5 secondary--text font-weight-bold font-italic ma-0 pa-0 ">
        Oh...
      </p>
      <p class="text-h5 secondary--text font-weight-bold font-italic ma-0 pa-0 ">
        Can't find anything.
      </p>
      <p class="text-h5 secondary--text font-weight-bold font-italic ma-0 pa-0 ">
        Try again ;)
      </p>
    </v-row>

    <!--calling the MovieDetails component-->
    <MovieDetails id="movie-details"
        v-if="visibleSelected"
        :selected-movie-detail="selectedMovieDetail"
        :stars="stars"
        :close-to="closeTo"
        :scroll-to="scrollTo"
    >
    </MovieDetails>

    <!--displaying loader-->
    <v-row id="loader"
        v-if="visibleLoader"
        class="justify-content-center"
    >
      <div>
        <div class="loader info--text align-self-center ">
          <div class="inner one "></div>
          <div class="inner two "></div>
          <div class="inner three "></div>
        </div>
        <span class=" loader white--text mt-12 pt-12 ms-4">Loading...</span>
      </div>
    </v-row>

  </v-main>
</template>

<script>
import MovieDetails from "@/components/MovieDetails";

export default {
  name: "MoviesCards",

  components: {
    MovieDetails
  },

  props: {
    setEmptyRadio: Function,
    inputValue: String,
    radioValue: String,
    searchBtnClick: Boolean,
    newBtnClick: Boolean,
    visibleNewMovieCards: Boolean,
    visibleFoundMovieCards: Boolean,
    visibleSelectedMovieCard: Boolean,
  },

  data: () => ({
    /**
     * @desc URL of basic API
     */
    apiUrl: `https://www.omdbapi.com/?apikey=d87285dc`,

    /**
     * @desc Array of poster's URL for background
     */
    backgroundImgSrc: [],

    /**
     * @desc Array of movies data found by user request
     */
    foundMoviesData: [],

    /**
     * @desc Number of movies found
     */
    foundResults: '',

    /**
     * @desc IMDB_id
     */
    id: '',

    /**
     * @desc Array of new movies data
     */
    newMoviesDetail: [],

    /**
     * @desc Array of new movies IMDB_id
     */
    newMoviesIDs: [],

    /**
     * @desc Array of new movies poster's URL
     */
    newMoviesPoster: [],

    /**
     * @desc Pagination start page
     */
    page: 1,

    /**
     * @desc Visible number of pagination pages
     */
    paginationCount: 5,

    /*----- Image source in the absence of a poster -----*/
    posterNotAvailableSrc: require('@/assets/poster_n-a.jpg'),

    /**
     * @desc Trigger for closeTo () method
     */
    returnToParent: null,

    /**
     * @desc Tape lettering for new films
     */
    ribbonTitle: 'New',

    /**
     * @desc Object with selected movie data
     */
    selectedMovieDetail: {},

    /**
     * @desc Array for stars according to IMDB_rating
     */
    stars: [],

    /**
     * @desc Visibility trigger to display error message
     */
    visibleAlert: false,

    /**
     * @desc Visibility trigger for displaying found movies
     */
    visibleFound: false,

    /**
     * @desc Visibility trigger for displaying the loader
     */
    visibleLoader: true,

    /**
     * @desc Visibility trigger to display selected movie data
     */
    visibleSelected: false,

    /**
     * @desc Visibility trigger for displaying new movies
     */
    visibleNew: false,
  }),

  methods: {
    /**
     * This general method receives data from API and calls the function that processes this data
     * @param {string} url API URL
     * @param {function} fn Function that processes data received from API
     */
    getApiData(url, fn) {
      fetch(url)
        .then(response => response.json())
        .then(data => fn(data));
    },

    /**
     * This method gets a list of new movies from API and calls the function that processes this data
     */
    getNewMoviesData() {
      fetch('https://data-imdb1.p.rapidapi.com/movie/byYear/2021/?page_size=100', {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
          "x-rapidapi-key": "82a31a0d7cmsh0377a2b18e7d575p1aef0ejsna2cb4e876560"
        }
      })
        .then(response => response.json())
        .then(data => this.getNewMoviesDetails(data));
    },

    /**
     *This method selects their IMDB_id from the list of new films and receives detailed information from the API for each of them
     * and calls a function that processes this data
     * @param {array} data  Received data of new films
     */
    getNewMoviesDetails(data) {
      this.newMoviesIDs = data["results"].map(item => item['imdb_id'])
      for (let id of this.newMoviesIDs) {
        this.getApiData((this.apiUrl+'&i='+id), this.processingNMD)
      }
      this.backgroundImgSrc = this.newMoviesPoster.slice()
    },

    /**
     * This method, after downloading the data, disables the loader
     * and enables the visibility of a row of cards for new films, choosing a release date and checking for a poster
     * @param {array} data Array of IMDB_ids
     */
    processingNMD(data) {
      if (data) {
        this.visibleLoader = false
        this.visibleNew = true
      }
      if (new Date(data["Released"]) >= new Date(new Date().getTime() - 6*2592000000)) {
        if (data["Poster"] !== 'N/A') {
          this.newMoviesDetail.push(data);
          this.newMoviesPoster.push(data["Poster"])
          this.backgroundImgSrc.push(data["Poster"])
        }
      }
    },

    /**
     *This method receives data from API according to the search query, genre and page
     * and calls a function that processes this data
     */
    getFoundMoviesDetails() {
      this.visibleLoader = true
      this.visibleNew = false
      this.visibleFound = false
      this.getApiData((this.apiUrl + '&s='+ this.inputValue + '&page=' + this.page + this.radioValue), this.processingFMD)
    },

    /**
     * After loading the data, this method turns off the loader
     * and turns on the visibility of a number of cards of found films and, if the data is true, processes them.
     * @param {array} data An array of objects with short information about movies
     */
    processingFMD(data) {
      if (data) {
        this.visibleLoader = false
        this.visibleFound = true
      }
      if(data["Response"] === "False") {
        this.visibleNew = false
        this.visibleFound = false
        this.visibleSelected = false
        this.visibleLoader = false
        this.visibleAlert = true
        this.backgroundImgSrc[0] = ''
        this.foundResults = ''
        this.foundMoviesData = []
        this.setEmptyRadio()
      }
      else {
        this.foundMoviesData = data['Search']
        this.foundMoviesData.forEach(item => {
          if(!item.Poster || item.Poster === 'N/A') item.Poster = this.posterNotAvailableSrc
        })
        this.backgroundImgSrc.unshift(data['Search'][0]['Poster'])
        this.foundResults = data["totalResults"]
        this.scrollTo()
        this.visibleLoader = false
        this.visibleFound = true
      }
    },

    /**
     * This method receives API data about the selected movie and calls a function that processes them
     * @param {string} id IMDB_id of selected movie
     */
    getSelectedMovieDetail(id) {
      this.getApiData((this.apiUrl + '&i=' + id + '&plot=full'),this.processingSMD)
    },

    /**
     * This method processes the data received from the api about the selected movie
     * @param {object} data Data received from the API
     */
    processingSMD(data) {
      if (data) {
        this.visibleLoader = false
        this.visibleSelected = true
      }
      this.selectedMovieDetail = data
      if (data["imdbRating"] && data["imdbRating"] !== 'N/A') {
        this.getStars(data)
      }
    },

    /**
     * This method calculates the number of stars based on the IMDB rating
     * @param {object} data Data received from the API
     */
    getStars(data) {
      this.stars.length = Math.round(Number(data["imdbRating"]))
    },

    /**
     * This method determines the action to be taken when the movie details window is closed
     */
    closeTo() {
      if(this.returnToParent) {
        this.visibleNew = false
        this.visibleFound = true
        this.visibleSelected = false
        this.backgroundImgSrc[0] = this.foundMoviesData[0]['Poster']
      } else {
          this.visibleNew = true
          this.visibleFound = false
          this.visibleSelected = false
          this.backgroundImgSrc[0] = this.newMoviesPoster[0]
      }
    },

    /**
     * This method defines scrolling to coordinates (0,0)
     */
    scrollTo() {
      window.scrollTo(0,0)
    },
  },


  watch: {
    /**
     * This watcher starts the search function when the search button is clicked
     * @param {boolean} oldValue
     * @param {boolean} newValue
     */
    searchBtnClick(oldValue, newValue) {
      if (oldValue !== newValue) {
        this.page = 1
        this.visibleAlert = false
        this.visibleFound = false
        this.visibleSelected = false
        this.visibleLoader = true
        this.getFoundMoviesDetails()
      }
    },

    /**
     * This watcher starts displaying cards of new films when you click on the NEW button
     * @param {boolean} oldValue
     * @param {boolean} newValue
     */
    newBtnClick(oldValue, newValue) {
      if (oldValue !== newValue) {
        this.visibleSelected = false
        this.visibleFound = false
        this.visibleNew = true
        this.visibleAlert = false
        this.backgroundImgSrc[0] = this.newMoviesPoster[0]
      }
    },

    /**
     * This watcher modifies local variables when changing variables in a HOME component
     * @param {boolean} oldValue
     * @param {boolean} newValue
     */
    visibleNewMovieCards(oldValue, newValue) {
      if (oldValue !== newValue) {
        this.visibleNew = this.visibleNewMovieCards
      }
      if (this.visibleNew) {
        this.backgroundImgSrc[0] = this.newMoviesPoster[0]
      }
    },

    /**
     * This watcher modifies local variables when changing variables in a HOME component
     * @param {boolean} oldValue
     * @param {boolean} newValue
     */
    visibleFoundMovieCards(oldValue, newValue) {
      if (oldValue !== newValue) {this.visibleFound = this.visibleFoundMovieCards}
    },

    /**
     * This watcher modifies local variables when changing variables in a HOME component
     * @param {boolean} oldValue
     * @param {boolean} newValue
     */
    visibleSelectedMovieCard(oldValue, newValue) {
      if (oldValue !== newValue) {
        this.visibleSelected = this.visibleSelectedMovieCard}
    },
  },

  /**
   * This Lifecycle hook defines the method to run to get data about new movies from the API.
   * Called just before mounting starts: the render function will be called the first time.
   */
  beforeMount() {
    this.getNewMoviesData();
  },

}
</script>

<style scoped>
/*------ loader styles -----------------*/
  .loader {
      position: absolute;
      top: 40%;
      left: calc(50% - 48px);
      width: 96px;
      height: 96px;
      border-radius: 50%;
      perspective: 800px;
}
  .inner {
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-radius: 50%;
}
  .inner.one {
      left: 0;
      top: 0;
      animation: rotate-one 1s linear infinite;
      border-bottom: 5px solid #fff;
}
  .inner.two {
      right: 0;
      top: 0;
      animation: rotate-two 1s linear infinite;
      border-right: 5px solid #fff;
}
  .inner.three {
      right: 0;
      bottom: 0;
      animation: rotate-three 1s linear infinite;
      border-top: 5px solid #fff;
}

  @keyframes rotate-one {
    0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}
  @keyframes rotate-two {
    0% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
    100% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}
  @keyframes rotate-three {
    0% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
    100% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}

/*------ cards styles ------------------*/
  .cards-in-row {
      background: #000 linear-gradient(to top right, rgba(100,115,201,.7), rgba(3,10,50,.7)) !important;
      overflow: hidden;
  }
  #ribbon {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      position: relative;
      bottom: 360px;
      right: 60px;
      max-width: 250px;
  }
  .card-title {
      font-size: 17px;
  }
</style>
