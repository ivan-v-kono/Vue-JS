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
          //accent: '',
          //error: '',
          info: '#FFE0B2', //hover, card-title text
          success: '#498eef', //loader
          //warning: '',
        },
      },
    },
  }),

  render: h => h(App),
}).$mount('#app')




