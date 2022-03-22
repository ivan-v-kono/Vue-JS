<template>
  <v-app>
    <template id="panoramicImg1">
      <v-container
          fluid
          class="mt-6 pb-0 px-0 mt-md-n1 pt-md-0"
      >
        <v-img
            class="z-index0 mt-n9"
            :src="panoramicMain"
            alt="tower"
            max-height="600"
        ></v-img>

      </v-container>
    </template>
    <v-divider dark></v-divider>

    <template id="weCan">
      <v-system-bar
          class="text-h5 text-sm-h4 font-italic text--light ps-4 primary secondary--text"
          height="80"

      >
        <v-avatar
            size="56"
            class="me-2 me-sm-10 "
        >
          <v-img
              :src="logoImg"
              alt="logo"
          >
          </v-img>
        </v-avatar>
        {{ slogan2 }}
        <v-spacer></v-spacer>
        <v-btn
            class="me-0 me-sm-4 me-md-16 px-2 info"
            to="/#weDidIt"
            @click="cleanHash"
            plain
        >
          <span class="accent--text font-weight-bold">Проекты</span>
        </v-btn>
      </v-system-bar>
    </template>

    <template id="skillCards">
      <v-row
          justify="center"
          class="mt-2 mx-0 pa-0 pb-2">
        <v-card
            v-for="(card, i) in skillCards"
            :key="i"
            class="ma-0 mx-2 mb-3 "
            max-width="300"
            rounded
            to="/prices"
            hover
        >
          <v-row justify="center" class="ma-0 pt-1">
            <v-col cols="12" class="ma-0 pa-0">
              <v-img :src="card.src" class="ma-0 pa-0" style="border-radius: 5px"></v-img>
            </v-col>
            <v-col
                cols="12"
                class="mx-0 pa-0 "
            >
              <v-card-title class="ma-0 pt-1 pb-0 primary--text text-h5">
                {{card.title}}
              </v-card-title>
              <v-spacer></v-spacer>
              <v-card-subtitle class="py-0 primary--text text-subtitle-1 font-weight-bold">
                {{card.subtitle}}
              </v-card-subtitle>
              <v-card-text
                  v-for="(item, index) in card.subtitleText"
                  :key="index"
                  class="py-0 primary--text text-subtitle-1"
              >
                {{ item.str }}
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </template>

    <template id="weDid">
      <v-system-bar id="weDidIt"
                    class="text-h5 text-sm-h4 font-italic ps-4 primary secondary--text"
                    height="80"
      >
        <v-avatar
            size="56"
            class="me-2 me-sm-10 "
        >
          <v-img
              :src="logoImg"
              alt="logo"
          >
          </v-img>
        </v-avatar>
        {{ slogan3 }}
        <v-spacer></v-spacer>
      </v-system-bar>
    </template>

    <template id="projectCards">
      <v-row id="projectsCards"
          justify="center"
          class="mt-2 mb-1 mx-0 pa-0"
      >
        <v-card
            v-for="(item, i) in projectCards"
            :key="i"
            class="ma-0 mx-1 mb-3"
            max-width="300"
            rounded
        >
          <v-row justify="center" class="ma-0 pa-1">
            <v-col cols="12" class="ma-0 pa-0">
              <v-img :src="item.img" class="ma-0 pa-0" style="border-radius: 5px"></v-img>
            </v-col>
            <v-col
                cols="12"
                class="mx-0 pa-0 my-1"
            >
              <v-card-title
                  class="ma-0 pa-0 primary--text"
              >{{item.name}}</v-card-title>
              <v-spacer></v-spacer>
            </v-col>
            <v-col
                cols="12"
                class="mx-0 pa-0 my-1"
            >
              <v-btn
                class="primary"
                @click="visible = true; gallery = projectGalleries[i];"
                href="/#gallery"
              >
                <span class="secondary--text font-weight-bold">Смотреть..</span>
              </v-btn>
            </v-col>

            <!--<v-overlay
                :z-index="zIndex"
                :value="overlay"
            >
              &lt;!&ndash;<v-btn id="btnClose"
                     max-width="20"
                     depressed
                     style="background-color: transparent; position: fixed; right: 10px; top: 10px;"
                     class="white&#45;&#45;text z-index100 "
                     @click="overlay = false"
              >
                <v-icon>mdi-close-outline</v-icon>
              </v-btn>&ndash;&gt; &lt;!&ndash;btnClose&ndash;&gt;

              &lt;!&ndash;<v-container fluid>
                <v-layout row wrap justify-center>
                  <v-flex xs6>
                    <v-carousel
                        hide-delimiters
                        interval="1000"
                    >
                      <v-carousel-item
                          v-for="(item,i) in gallery"
                          :key="i"
                          :src="item.src"
                      >
                        <v-container
                            fill-height
                            fluid
                            pa-0 ma-0 pb-3
                        >
                          <v-layout fill-height align-end pb-4 mb-4>
                            <v-flex xs12 pb-4 >
                              <v-card color="transparent" class="pa-2 pt-0 " outlined>
                                <v-row class="ma-0 pa-0">
                                   <span
                                       class="headline white&#45;&#45;text text-center mx-auto justify-center"
                                       v-text="item.description"
                                   ></span>
                                </v-row>
                              </v-card>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-carousel-item>
                    </v-carousel>
                  </v-flex>
                </v-layout>
              </v-container>&ndash;&gt; &lt;!&ndash;old gallery&ndash;&gt;
            </v-overlay>--> <!--overlay-->
          </v-row>
        </v-card>
      </v-row>
    </template>

    <div id="gallery"
        class="ma-0 pa-0">
      <template id="app-gallery"
          v-if="visible">
        <app-gallery :gallery="gallery"></app-gallery>
        <v-row
        class="pa-0 ma-0 mb-2" justify="center" align="center">
          <v-btn
              color="primary"
              @click="visible = false; cleanHash"
              href="/#projectsCards"
              rounded
              width="150"
              outlined
              class="px-1 font-weight-bold text-subtitle-2"
              style="border-width: 2px;"
              fab
              x-small
          >
            <v-icon
                left
                color="primary"
                size="20"
                class="me-3 ms-n3"
            >
              mdi-close-outline
            </v-icon>
          Назад
          </v-btn><!--Назад-->
        </v-row>
      </template>

    </div>

    <template id="ourPartners">
      <v-system-bar
          class="text-h5 text-sm-h4 font-italic ps-4 primary secondary--text"
          height="80"
      >
        <v-avatar
            size="56"
            class="me-2 me-sm-10 "
        >
          <v-img
              :src="logoImg"
              alt="logo"
          >
          </v-img>
        </v-avatar>
        {{ slogan4 }}
        <v-spacer></v-spacer>
      </v-system-bar>
    </template>

    <template id="partnersLogo">
      <v-container class="mb-16 pb-16 pb-md-8"><!---->
        <v-row class="mb-14 mb-md-0">
          <v-card
              v-for="(item, i) in partnersLogo"
              :key="i"
              class="mx-auto pa-2 my-2"
              rounded
              :href="item.src"
              target="_blank"
              hover
          >
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-img
                  class="pa-1"
                  :src="item.img"
                  v-bind="attrs"
                  v-on="on"
              >
              </v-img>
              </template>
              <span>{{item.alt}}</span>
            </v-tooltip>
          </v-card>
        </v-row>
      </v-container>
    </template>



  </v-app>
</template>

<script>
import AppGallery from "@/components/AppGallery";
export default {
  name: "Home",
  components: {
    AppGallery,
  },
  props: {
    logoImg: String,
    cleanHash: Function,
  },
  data: () => ({
    slogan2: 'Мы умеем:',
    slogan3: 'Мы уже сделали:',
    slogan4: 'С нами работают:',
    panoramicMain: require('@/assets/img/panoramic-main.jpg'),
    skillCards: [
      {
        src: require('@/assets/img/skillCards/towers.jpg'),
        route: '/prices',                                                /*/#mounting*/
        title: 'Обслуживание вышек и башен',
        subtitle: "Монтажные, клининговые, малярные работы на вышках, башнях и других металлических конструкциях любой архитектуры:",
        subtitleText: [
          {str: `- монтаж вышек радиосвязи, мачт`},
          {str: `- покраска металлоконструкций`},
          {str: `- установка оборудования`},
        ],
      },
      { src: require('@/assets/img/skillCards/cleaning.jpg'),
        route: '/prices',                                                               /*/#cleaning*/
        title: 'Клининговые работы',
        subtitle: "Мы работаем на любых высотах, со всеми объёмами и степенями загрязнения поверхностей:",
        subtitleText: [
          {str: `- мойка фасадов и окон`},
          {str: `- уборка снега с крыш`},
          {str: `- очистка фасада`},
        ],
      },
      { src: require('@/assets/img/skillCards/mounting.jpg'),
        route: '/prices/#mounting',
        title: 'Монтажные работы',
        subtitle: "Большой комплекс инженерных, общестроительных, монтажных и других работ:",
        subtitleText: [
          {str: `- установка систем видеонаблюдения`},
          {str: `- такелажные работы`},
          {str: `- монтаж/демонтаж металлоконструкций`},
          {str: `- обследование металлоконструкций`},
        ],
      },
      { src: require('@/assets/img/skillCards/facade.jpg'),
        route: '/prices/#fasades',
        title: "Фасадные работы",
        subtitle: "Выполняем все виды фасадных работ, любой сложности:",
        subtitleText: [
          {str: `- декоративные`},
          {str: `- ремонтно-восстановительные`},
          {str: `- герметизация межпанельных стыков`},
        ],
      },
      { src: require('@/assets/img/skillCards/roof.jpg'),
        route: '/prices/#roof',
        title: "Кровельные работы",
        subtitle: "Кровельные работы любой сложности и вида:",
        subtitleText: [
          {str: `- ремонт кровли`},
          {str: `- монтаж кровли`},
          {str: `- гидроизоляционные работы`},
        ],
      },
      { src: require('@/assets/img/skillCards/dedusting.jpg'),
        route: '/prices/#cleaning',
        title: "Обеспыливание",
        subtitle: "Очистка от пыли мест со сложным доступом, помещений с большим пространством:",
        subtitleText: [
          {str: `- обеспыливание цехов`},
          {str: `- обеспыливание металлоконструкций`},
        ],
      },
      { src: require('@/assets/img/skillCards/shaft.jpg'),
        route: '/prices/#shaft',
        title: "Работы в шахтах, трубах и вентканалах",
        subtitle: "Выполняем все виды работ в шахтах и трубах:",
        subtitleText: [
          {str: `- обследование и обслуживание`},
          {str: `- ремонт и восстановление вентшахт, техканалов`},
        ],
      },
      { src: require('@/assets/img/skillCards/lighting.jpeg'),
        route: '/prices/#lighting',
        title: "Наружное освещение и реклама",
        subtitle: "Монтаж наружного освещения любой сложности:",
        subtitleText: [
          {str: `- освещение фасада`},
          {str: `- декоративная подсветка`},
          {str: `- ремонт и демонтаж подсветки`},
        ],
      },
      { src: require('@/assets/img/skillCards/structures.jpg'),
        title: "Обработка конструкций",
        route: '/prices/#metalStructures',
        subtitle: "Очистка и обработка спецсоставами :",
        subtitleText: [
          {str: `- очистка металла`},
          {str: `- антикоррозийная обработка`},
          {str: `- огнезащитная обработка`},
        ],
      },
    ],
    overlay: false,
    zIndex: 1000,
    projectCards: [
      {img: require('@/assets/img/project1/card.jpg'), name: 'Минская Телебашня',},
      {img: require('@/assets/img/project2/card.jpg'), name: 'Стадион «Динамо»',},
      {img: require('@/assets/img/project3/card.jpg'), name: 'Фасады и крыши',},
      {img: require('@/assets/img/project4/card.jpg'), name: 'Вышки и башни',},
      {img: require('@/assets/img/project5/card.jpg'), name: 'Освещение и реклама',},
      {img: require('@/assets/img/project6/card.jpg'), name: 'Вентшахты и техканалы',},
      {img: require('@/assets/img/project7/card.jpg'), name: 'Обеспыливание',},
      {img: require('@/assets/img/project8/card.jpg'), name: 'Поздравления',},
      {img: require('@/assets/img/project9/card.jpg'), name: 'Видеонаблюдение',},
    ],
    gallery: [],
    projectGalleries: [
      [
        {src: require('@/assets/img/project1/big1-1.jpg'), description: 'Минская Телебашня', titleColor: 'info--text',},
        {src: require('@/assets/img/project1/big1-2.jpg'), description: 'Минская Телебашня', titleColor: 'accent--text',},
        {src: require('@/assets/img/project1/big1-3.jpg'), description: 'Минская Телебашня', titleColor: 'info--text',},
        {src: require('@/assets/img/project1/big1-4.jpg'), description: 'Минская Телебашня', titleColor: 'info--text',},
        {src: require('@/assets/img/project1/big1-5.jpg'), description: 'Минская Телебашня', titleColor: 'accent--text',},
        {src: require('@/assets/img/project1/big1-6.jpg'), description: 'Минская Телебашня', titleColor: 'info--text',},
      ],
      [
        {src: require('@/assets/img/project2/big2-1.jpg'), description: 'Стадион «Динамо»',},
        {src: require('@/assets/img/project2/big2-2.jpg'), description: 'Стадион «Динамо»',},
        {src: require('@/assets/img/project2/big2-3.jpg'), description: 'Стадион «Динамо»',},
        {src: require('@/assets/img/project2/big2-4.jpg'), description: 'Стадион «Динамо»',},
        {src: require('@/assets/img/project2/big2-5.jpg'), description: 'Стадион «Динамо»', titleColor: 'accent--text',},
        {src: require('@/assets/img/project2/big2-6.jpg'), description: 'Стадион «Динамо»',},
        {src: require('@/assets/img/project2/big2-7.jpg'), description: 'Стадион «Динамо»',},
        {src: require('@/assets/img/project2/big2-8.jpg'), description: 'Стадион «Динамо»', titleColor: 'accent--text',},
      ],
      [
        {src: require('@/assets/img/project3/big3-1.jpg'), description: 'Фасады и крыши', titleColor: 'accent--text',},
        {src: require('@/assets/img/project3/big3-2.jpg'), description: 'Фасады и крыши', titleColor: 'accent--text',},
        {src: require('@/assets/img/project3/big3-3.jpg'), description: 'Фасады и крыши',},
        {src: require('@/assets/img/project3/big3-4.jpg'), description: 'Фасады и крыши', titleColor: 'accent--text',},
        {src: require('@/assets/img/project3/big3-5.jpg'), description: 'Фасады и крыши', titleColor: 'accent--text',},
        {src: require('@/assets/img/project3/big3-6.jpg'), description: 'Фасады и крыши', titleColor: 'accent--text',},
        {src: require('@/assets/img/project3/big3-7.jpg'), description: 'Фасады и крыши',},
        {src: require('@/assets/img/project3/big3-8.jpg'), description: 'Фасады и крыши',},
        {src: require('@/assets/img/project3/big3-9.jpg'), description: 'Фасады и крыши', titleColor: 'accent--text',},
        {src: require('@/assets/img/project3/big3-10.jpg'), description: 'Фасады и крыши', titleColor: 'accent--text',},
        {src: require('@/assets/img/project3/big3-11.jpg'), description: 'Фасады и крыши', titleColor: 'accent--text',},
        {src: require('@/assets/img/project3/big3-12.jpg'), description: 'Фасады и крыши', titleColor: 'accent--text',},
        {src: require('@/assets/img/project3/big3-13.jpg'), description: 'Фасады и крыши', titleColor: 'accent--text',},
        {src: require('@/assets/img/project3/big3-14.jpg'), description: 'Фасады и крыши',},
        {src: require('@/assets/img/project3/big3-15.jpg'), description: 'Фасады и крыши',},
        {src: require('@/assets/img/project3/big3-16.jpg'), description: 'Фасады и крыши', titleColor: 'accent--text',},
        {src: require('@/assets/img/project3/big3-17.jpg'), description: 'Фасады и крыши', titleColor: 'accent--text',},
      ],
      [
        {src: require('@/assets/img/project4/big4-0.jpg'), description: 'Брестская телевышка', titleColor: 'accent--text',},
        {src: require('@/assets/img/project4/big4-1.jpg'), description: 'Брестская телевышка',},
        {src: require('@/assets/img/project4/big4-2.jpg'), description: 'Брестская телевышка', titleColor: 'accent--text',},
        {src: require('@/assets/img/project4/big4-3.jpg'), description: 'Брестская телевышка', titleColor: 'accent--text',},
        {src: require('@/assets/img/project4/big4-4.jpg'), description: 'Брестская телевышка',},
        {src: require('@/assets/img/project4/big4-5.jpg'), description: 'Брестская телевышка', titleColor: 'accent--text',},
        {src: require('@/assets/img/project4/big4-6.jpg'), description: 'Брестская телевышка',},
        {src: require('@/assets/img/project4/big4-7.jpg'), description: 'Брестская телевышка', titleColor: 'accent--text',},
        {src: require('@/assets/img/project4/big4-8.jpg'), description: 'Витебская телевышка',},
        {src: require('@/assets/img/project4/big4-9.jpg'), description: 'Витебская телевышка', titleColor: 'accent--text',},
        {src: require('@/assets/img/project4/big4-10.jpg'), description: 'Витебская телевышка', titleColor: 'accent--text',},
        {src: require('@/assets/img/project4/big4-11.jpg'), description: 'Пинская телевышка',},
        {src: require('@/assets/img/project4/big4-12.jpg'), description: 'Пинская телевышка',},
        {src: require('@/assets/img/project4/big4-13.jpg'), description: 'Пинская телевышка', titleColor: 'accent--text',},
        {src: require('@/assets/img/project4/big4-14.jpg'), description: 'Пинская телевышка',},
        {src: require('@/assets/img/project4/big4-15.jpg'), description: 'Пинская телевышка', titleColor: 'accent--text',},
        {src: require('@/assets/img/project4/big4-16.jpg'), description: 'НТЦ Республиканский полигон ИММ', titleColor: 'accent--text',},
      ],
      [
        {src: require('@/assets/img/project5/big5-1.jpeg'), description: 'БЦ «Футурис»',},
        {src: require('@/assets/img/project5/big5-2.jpg'), description: 'БЦ «Футурис»',},
        {src: require('@/assets/img/project5/big5-3.jpg'), description: 'БЦ «Футурис»', titleColor: 'accent--text',},
        {src: require('@/assets/img/project5/big5-4.jpg'), description: 'ТЦ «Европа»',},
        {src: require('@/assets/img/project5/big5-5.jpg'), description: 'ТЦ «Европа»',},
        {src: require('@/assets/img/project5/big5-6.jpg'), description: 'Академия ММА', titleColor: 'accent--text',},
        {src: require('@/assets/img/project5/big5-7.jpg'), description: 'Академия ММА', titleColor: 'accent--text',},
      ],
      [
        {src: require('@/assets/img/project6/big6-1.jpg'), description: 'Вентшахты и техканалы', titleColor: 'accent--text',},
        {src: require('@/assets/img/project6/big6-2.jpg'), description: 'Вентшахты и техканалы',},
        {src: require('@/assets/img/project6/big6-3.jpg'), description: 'Вентшахты и техканалы',},
      ],
      [
        {src: require('@/assets/img/project7/big7-1.jpg'), description: 'НТЦ Республиканский полигон ИММ',},
        {src: require('@/assets/img/project7/big7-2.jpg'), description: 'НТЦ Республиканский полигон ИММ',},
        {src: require('@/assets/img/project7/big7-3.jpg'), description: 'НТЦ Республиканский полигон ИММ',},
        {src: require('@/assets/img/project7/big7-4.jpg'), description: 'НТЦ Республиканский полигон ИММ',},
        {src: require('@/assets/img/project7/big7-5.jpg'), description: 'НТЦ Республиканский полигон ИММ',},
      ],
      [
        {src: require('@/assets/img/project8/8-1.jpg'), description: 'Поздравления в окно',},
        {src: require('@/assets/img/project8/8-2.jpg'), description: 'Поздравления в окно',},
      ],
      [
        {src: require('@/assets/img/project9/9-1.jpg'), description: '«Славкалий»',},
        {src: require('@/assets/img/project9/9-2.jpg'), description: '«Славкалий»', titleColor: 'accent--text',},
        {src: require('@/assets/img/project9/9-3.jpg'), description: '«Славкалий»', titleColor: 'accent--text',},
        {src: require('@/assets/img/project9/9-4.jpg'), description: '«Славкалий»', titleColor: 'accent--text',},
        {src: require('@/assets/img/project9/9-5.jpg'), description: '«Славкалий»', titleColor: 'accent--text',},
      ],
    ],
    partnersLogo: [
      {
        img: require('@/assets/partnersLogo/dinamo.png'),
        alt: 'Национальный Олимпийский стадион Динамо',
        src: 'https://www.stadium-dinamo.by/',
      },
      { img: require('@/assets/partnersLogo/telecom.jpg'),
        alt: 'БелТелеком',
        src: 'https://beltelecom.by/',
      },
      { img: require('@/assets/partnersLogo/mzkh.png'),
        alt: 'Министерство Жилищно-коммунального хозяйства РБ',
        src: 'http://www.mjkx.gov.by/',
      },
      { img: require('@/assets/partnersLogo/cosmos.png'),
        alt: 'Cosmos-TV',
        src: 'https://cosmos-telecom.by/',},
      { img: require('@/assets/partnersLogo/trest.jpg'),
        alt: 'ОАО «Стройтрест №1»',
        src: 'http://trest1.by/',},
      { img: require('@/assets/partnersLogo/dinamo2.jpg'),
        alt: 'БФСО Динамо',
        src: 'http://dynamo.by/',},
      { img: require('@/assets/partnersLogo/mtf.jpg'),
        alt: 'Минский тракторный завод',
        src: 'http://www.belarus-tractor.com/',},
      { img: require('@/assets/partnersLogo/futuric.png'),
        alt: 'Бизнес-центр «Футурис»',
        src: 'https://futuris-bc.by/',},
      { img: require('@/assets/partnersLogo/mpovt.png'),
        alt: 'МПОВТ',
        src: 'https://mpovt.by/',},
      { img: require('@/assets/partnersLogo/bsu.jpg'),
        alt: 'Белорусский государственный университет',
        src: 'https://bsu.by/',},
      { img: require('@/assets/partnersLogo/slavpotassium.png'),
        alt: 'ИООО «Славкалий»',
        src: 'https://www.slavkaliy.com/',},
      { img: require('@/assets/partnersLogo/belfert.jpg'),
        alt: 'Гомельский химический завод',
        src: 'https://belfert.by/',},
    ],
    visible: false,
  }),
}
</script>

<style > /*scoped*/
.v-card__text, .v-card__title {
  overflow-wrap: anywhere !important;
  word-wrap: break-word !important;
  word-break: normal !important;
  hyphens: auto !important;
}
 a/*.v-card--link*/ :hover {
  opacity: 0.8;
}
/*.z-index100 {
  z-index: 100 !important;
}
.z-index0 {
  z-index: 0 !important;
}*/
</style>