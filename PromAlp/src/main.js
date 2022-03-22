import Vue from 'vue';
import App from './App.vue';
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css';
import VueRouter from 'vue-router';
import Home from "@/views/Home";
import Prices from "@/views/Prices";
import About from "@/views/About";
import Contacts from "@/views/Contacts";
import Mountains from "@/views/Mountains";



Vue.use(Vuetify)
Vue.use(VueRouter)

Vue.config.productionTip = false


new Vue({
  vuetify: new Vuetify({
        theme: {
            themes: {
                light: {
                  primary: '#003b57', //sysBar            /*colors.red.darken1, // #E53935*/
                  secondary: '#9dc3d7', //text            /*colors.red.lighten4, // #FFCDD2*/
                  accent: '#011b35', //topBar             /*colors.indigo.base, // #3F51B5*/
                                                          /*error: '#FF5252',*/
                  info: '#d2dfe6', //button
                  success: '#fafefd', //background
                  warning: '#00838F',
        },
      },
    },
  }),
  router: new VueRouter({
      routes: [
          {
              path: '/',
              name: 'home',
              component: Home,
          },
          {
              path: '/prices',
              name: 'prices',
              component: Prices,
          },
          {
              path: '/#weDidIt',
              name: 'projects',
              component: Home,
          },
          {
              path: '/about',
              name: 'about',
              component: About,
          },
          {
              path: '/contacts',
              name: 'contacts',
              component: Contacts,
          },
          {
              path: '/mountains',
              name: 'mountains',
              component: Mountains,
          },

      ],
      scrollBehavior(to, from, savedPosition) {
          if (to.hash) {
            return {
                selector: to.hash,
                /*offset: { x: 0, y: 0}*/
            }
          } else if (savedPosition) {
                return savedPosition;
          } else {
                return { x: 0, y: 0 }
          }
      },
      mode: 'history',
  }),

  render: h => h(App),
}).$mount('#app')




