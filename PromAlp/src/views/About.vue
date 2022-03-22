<template >
  <v-main>
    <v-container id="panoramicImg2"
        fluid
        class="mt-6 pb-0 px-0 mt-md-n1 pt-md-0"
    >
      <v-img
          class="z-index0 mt-n9"
          :src="panoramic2"
          alt="tower"
          max-height="600"
      ></v-img>
    </v-container>
    <v-divider dark></v-divider>

    <v-system-bar id="aboutUs"
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

    <v-container id="video&text"
        class="mx-auto">
      <v-row class="ma-0 mx-auto " justify="center">
        <iframe
            width="640"
            height="360"
            :src="videoSrc"
            title="YouTube video player"
            allow="accelerometer; autoplay; encrypted-media; picture-in-picture; clipboard-write; gyroscope;"
            allowfullscreen
            class="col col-sm-10 col-md-8 col-lg-5 "
        >
        </iframe>
        <p class="col-12 col-lg-6 text-justify mx-0 pa-0 pt-4 mb-0 ps-lg-4 pt-lg-0 primary--text">
          {{ text }}
          <router-link to="/mountains" style="text-decoration: none"><strong>горного альпинизма</strong></router-link>
          .
          {{ text2 }}
        </p>
      </v-row>
    </v-container>

    <template id="faceCard">

      <v-row
          justify="center"
          class="mt-2 mx-0 mb-16 pa-0 pb-16 pb-md-0 mb-md-8"
      >
        <v-card
            v-for="(face, i) in faces"
            :key="i"
            class="ma-2 "
            max-width="300"
            rounded
        >
          <v-row
              justify="center"
              class="ma-0 pt-1 "
          >
            <v-col
                cols="12"
                class="ma-0 pa-0"
            >
              <v-img
                  :src="face.img"
                  class="ma-2 pa-0"
                  style="border-radius: 5px"
              >
              </v-img>
            </v-col>
            <v-col
                cols="12"
                class="mx-0 pa-0 "
            >
              <v-card-title class="ma-0 py-0 primary--text">
                {{ face.title }}
              </v-card-title>
              <v-spacer></v-spacer>
              <v-card-subtitle class="py-0 primary--text">
                {{ face.subtitle }}
              </v-card-subtitle>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </template>

    <v-spacer class="mb-16 pb-1"></v-spacer>

  </v-main>
</template>


<script>
export default {
  name: "About",
  data: () => ({
    panoramic2: require('@/assets/img/panoramic-about.jpg'),
    slogan4: 'Кое что о нас:',
    text: '  Мы - команда опытных промышленных альпинистов.' +
        ' Наша специализация - проведение высотных работ различной сложности и любого объёма.' +
        ' За годы работы у нас сформировался дружный коллектив профессионалов, которые любят свою работу,' +
        ' имеют хорошую подготовку и богатый практический опыт, в том числе и в сфере',
    text2: 'Мы используем качественное и надежное снаряжение, что гарантирует быстрое и безопасное выполнение любых работ на высоте.' +
        ' Наша организация реализовала множество проектов для частных лиц, государственных учреждений и коммерческих организаций.' +
        ' Все работники сертифицированы и продолжают повышать квалификацию.',
    faces: [
      {img: require('@/assets/img/faces/face-1.jpg'), title: 'Владислав Валерьевич', subtitle: 'Промышленный альпинист'},
      {img: require('@/assets/img/faces/face-2.jpg'), title: 'Павел Иванович', subtitle: 'Промышленный альпинист'},
      {img: require('@/assets/img/faces/face-3.jpg'), title: 'Юрий Николаевич', subtitle: 'Промышленный альпинист'},
      {img: require('@/assets/img/faces/face-4.jpg'), title: 'Джамол Боирович', subtitle: 'Промышленный альпинист'},
      {img: require('@/assets/img/faces/face-5.jpg'), title: 'Евгений Николаевич', subtitle: 'Промышленный альпинист'},
      {img: require('@/assets/img/faces/face-6.jpg'), title: 'Евгений Валентинович', subtitle: 'Промышленный альпинист'},
      {img: require('@/assets/img/faces/face-7.jpg'), title: 'Илья Сергеевич', subtitle: 'Промышленный альпинист'},
    ],
    videoSrc: 'https://www.youtube.com/embed/I-VXaiHfn4Y?controls=1',
  }),
  props: {
    logoImg: String,
  }
}
</script>

<style scoped>

</style>