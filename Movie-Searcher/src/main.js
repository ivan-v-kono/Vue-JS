import Vue from 'vue';
import App from './App.vue';
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify)

Vue.config.productionTip = false


new Vue({
  vuetify: new Vuetify({
    theme: {
      themes: {
        light: {
          //primary: '',
          secondary: '#FFA726', //text
          //accent: '#bdbdbdb', //no-active      rgba(189,189,189,0.6)
          //error: '',
          info: '#FFE0B2', //hover,card-title text
          //success: '',
          //warning: '',
        },
      },
    },
  }),

  render: h => h(App),
}).$mount('#app')




