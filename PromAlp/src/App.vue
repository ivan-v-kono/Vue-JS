<!--todo: lazy-load for all img-->
<template>
  <v-app>
    <app-header
        :company-name="companyName"
        :menu-items="menuItems"
        :logo-img="logoImg"
        :clean-hash="cleanHash"
    ></app-header>
      <v-main>
        <router-view
            :logo-img="logoImg"
            :company-name="companyName"
            :clean-hash="cleanHash"
        ></router-view>
      </v-main>
    <app-footer
        :company-name="companyName"
        :menu-items="menuItems"
        :clean-hash="cleanHash"
    ></app-footer>

  </v-app>
</template>

<script>
  import AppHeader from "@/components/AppHeader";
  import AppFooter from "@/components/AppFooter";

  export default {
    components: {
      AppHeader,
      AppFooter,

    },
    data: ()  => ({
      companyName: 'ПрофПромАльп',
      menuItems: [
        {title: 'Главная', route: '/',},
        {title: 'Проекты', route: '/#weDidIt',},
        {title: 'Услуги и цены', route: '/prices',},
        {title: 'О нас', route: '/about', },
        {title: 'Контакты', route: '/contacts',},
        {title: 'Горный туризм', route: '/mountains',},
      ],
      logoImg: require('@/assets/logo-transparent.png'),

    }),
    methods: {
      cleanHash() {
        window.location.hash = '';
      }
    },
  }
</script>

