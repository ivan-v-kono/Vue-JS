<template>
  <div>
    <v-footer
        class="primary "
        padless
        absolute
    >
      <v-row
          justify="center"
          no-gutters
      >
        <v-btn
            v-for="(item, i) in menuItems"
            :to="item.route"
            :key="i"
            @click="cleanHash"
            text
            plain
            class="mt-1 mb-0 my-sm-2 primary secondary--text"
        >
          {{ item.title }}
        </v-btn>
        <v-col
            class="pb-0 pt-1 py-sm-2 pe-0 ps-md-16 text-center info accent--text"
            cols="12"
            md="10"
        >
          <span class="ps-md-16 font-weight-bold">{{ new Date().getFullYear() }} &#169; {{ companyName }}</span>
        </v-col>
        <v-col
            class="pt-1 pb-2 pe-4 text-end info accent--text"
            cols="12"
            md="2"
        >
          <small>
            Created by
            <a href="https://telegram.me/Ivan_V_Kono" target="_blank" style="text-decoration: none">
              <b class="p-0 accent--text" >{{ dev }}</b>
            </a>
          </small>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  props: {
    companyName: String,
    menuItems: Array,
    cleanHash: Function,
  },
  data: () => ({
    dev: '  Ivan V.Kono',
    devUrl: 'https://telegram.me/Ivan_V_Kono'
  }),
  methods: {

  },
}
</script>

<style scoped>

</style>