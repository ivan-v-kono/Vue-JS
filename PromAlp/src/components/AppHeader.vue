<template>
  <div class="success">

    <template id="top-slogan">
      <v-system-bar
          window
          class="ps-5 accent secondary--text text-subtitle-2"
      >
        {{ slogan }}
      </v-system-bar>
    </template>

    <template id="logo_name_menuButton">
      <div>
        <v-app-bar
            color="primary"
            dark
            height="80"
        ><!--info-->
          <v-avatar
              class="my-1 pb-1"
              size="64"
          >
            <v-img
                :src="logoImg"
                alt="logo"
            >
            </v-img>
          </v-avatar>

          <v-app-bar-title
              style="font-size: xx-large"
              class="pl-4 pr-6 hidden-xs-only secondary--text"

          >
            {{companyName}}
          </v-app-bar-title>
          <v-spacer></v-spacer>

          <v-card
              v-for="(item, i) in dataOnTop"
              :key="i"
              class="hidden-sm-and-down pr-8 py-2 primary"
              outlined
              style="border: none"
          >

            <v-row>
              <v-icon large class="pt-2" color="secondary">{{ item.icon }}</v-icon>
              <v-card-title class="pa-0 mb-2 pl-2 secondary--text">{{ item.title }}</v-card-title>
            </v-row>
            <v-card-subtitle class="pa-0 pl-8">{{ item.subtitle }}</v-card-subtitle>

          </v-card>

          <v-menu
              left
              bottom
              nudge-bottom="45"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  class="mr-n2 hidden-md-and-up"
                  x-large
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                  depressed
              ><span class="secondary--text" >Menu</span>
                <v-icon color="secondary">mdi-menu</v-icon>
              </v-btn>
            </template>

            <v-list><!--() => {}-->
              <v-list-item
                  v-for="(item, i) in menuItems"
                  :key="i"
                  :to="item.route"
                  @click="cleanHash"
              >
                <v-list-item-title> {{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-app-bar>
      </div>
    </template>

    <template id="lowResolutionName">
      <div>
        <v-app-bar id="phone0"
                   color="primary"
                   dark
                   height="68"
                   class="hidden-sm-and-up"
       >
          <template >
            <v-container class="pa-0">
              <v-row class="ma-0 pl-2" justify="center">
                <v-card-title
                    class="pa-0 text-center secondary--text"
                    style="font-size: xx-large"

                >
                  {{companyName}}
                </v-card-title>
              </v-row>
            </v-container>
          </template>
        </v-app-bar>
      </div>
    </template>
    <v-divider dark class="secondary"></v-divider>

    <template id="lowResolutionTitles">
      <div v-for="(item, i) in dataOnTop" :key="i" class="hidden-md-and-up">
        <v-app-bar
            color="primary"
            dark
            height="68"
        >
          <template>
            <v-container class="pa-0">
              <v-row class="ma-0 pl-2">
                <v-icon large color="secondary">{{item.icon}}</v-icon>
                <v-card
                    outlined
                    class="pa-0 pl-2 primary"
                    style="border: none"
                >
                  <v-card-title class="pa-0 pb-1 mb-2 text-left secondary--text">
                    {{ item.title }}
                  </v-card-title>
                  <v-card-subtitle
                      class="pa-0"
                  >
                    {{item.subtitle}}
                  </v-card-subtitle>
                </v-card>

              </v-row>
            </v-container>
          </template>
        </v-app-bar>
        <v-divider dark class="secondary"></v-divider>
      </div>
    </template>
    <v-divider dark class="secondary"></v-divider>


    <template id="navigationBar">
      <v-container
          class="hidden-sm-and-down"
      >
        <v-row
            justify="center"
        >
          <v-btn-toggle
              v-model="text"
              class="mt-n3 z-index100"
              rounded
          >
            <v-btn
                v-for="(item, index) in menuItems"
                :key="index"
                :to="item.route"
                @click="cleanHash"
                plain
                class="info accent--text font-weight-bold"
            >
              {{ item.title }}
            </v-btn>

          </v-btn-toggle>

        </v-row>
      </v-container>
    </template>


  </div>
</template>

<script>
  export default {
    name: "AppHeader",
    props: {
      companyName: String,
      menuItems: Array,
      logoImg: String,
      cleanHash: Function,
    },
    data: () => ({
      slogan: 'ПрофПромАльп | Мы работаем на высоте',
      dataOnTop: [
        { icon: "mdi-phone-in-talk", title: "(44) 798 53 33", subtitle: '(29) 317 76 60' },
        { icon: "mdi-home", title: "Минск", subtitle: 'Беларусь' },
        { icon: "mdi-update", title: "Пн - Вс 8.00 - 20.00", subtitle: 'Без выходных'}
      ],
      text: 'center',
    }),
  }
</script>

<style scoped>
.z-index100 {
  z-index: 100 !important;
}
</style>