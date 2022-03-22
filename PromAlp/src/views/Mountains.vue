<template>
  <v-main>
    <v-container id="elbrus"
                 fluid
                 class="mt-6 pb-0 px-0 mt-md-n1 pt-md-0"
    >
      <v-img
          class="z-index0 mt-n9"
          :src="elbrus"
          alt="tower"
          max-height="600"
      ></v-img>
    </v-container>
    <v-divider dark class="secondary"></v-divider>

    <v-system-bar id="mountains"
                  class="text-h5 text-md-h4 font-italic ps-4 primary secondary--text"
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
      {{ slogan6 }}
      <v-spacer></v-spacer>
    </v-system-bar>
    <v-divider dark></v-divider>

    <v-container class="mb-16 pb-16 pb-md-8">
      <v-row justify="center" align="center" class="mb-16 mb-md-0">
        <v-col id="photo1"
          cols="12"
          sm="6"
          lg="3"
        >
          <v-img
            :src="mount1"
            class="rounded"
          ></v-img>
        </v-col>
        <v-col id="text"
          cols="12"
          order-sm="3"
          order-lg="4"
        >
          <p class="text-center text-h4 primary--text">{{slogan7}}</p>
          <p class="text-justify text-h6 primary--text">{{ text }}</p>
        </v-col>
        <v-col id="photo2"
          cols="12"
          sm="6"
          lg="3"
          order-sm="2"
          order-lg="3"
          >
          <v-img
              :src="mount2"
              class="rounded"
          ></v-img>
        </v-col>
        <v-col id="photo3"
               cols="12"
               lg="6"
               order-sm="4"
               order-lg="2"
        >
          <v-img
              :src="mount3"
              class="rounded"
              height="auto"
          ><!--max-width="640"
              max-height="360"-->
          </v-img>
        </v-col>
        <v-col id="photo4"
               cols="12"
               lg="6"
               order-sm="5"
        >
          <v-img
              :src="mount4"
              class="rounded"
          ></v-img>
        </v-col>
        <v-col id="photo5"
               cols="12"
               lg="6"
               order-sm="6"
        >
          <v-img
              :src="mount5"
              class="rounded"
          ></v-img>
        </v-col>
        <v-col id="photo6"
               cols="12"
               lg="6"
               order-sm="7"
        >
          <v-img
              :src="mount6"
              class="rounded"
          ></v-img>
        </v-col>
        <v-col id="photo7"
               cols="12"
               lg="6"
               order-sm="8"
        >
          <v-img
              :src="mount7"
              class="rounded"
          ></v-img>
        </v-col>
        <v-col id="photo8"
               cols="12"
               order-sm="9"
               align="center"
        >
          <v-img
              :src="mount8"
              class="rounded"
              max-height="720"
              max-width="1280"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>

  </v-main>
</template>


<script>

export default {
  name: "Mountains",
  props: {
    logoImg: String,
  },
  components: {
  },
  data: () => ({
    elbrus: require('@/assets/img/elbrus.jpg'),
    slogan6: 'Лучше гор могут быть только горы...',
    slogan7: 'Свободное от работы время мы стараемся провести в горах.',
    mount1: require('@/assets/img/moutains/mount1.jpg'),
    mount2: require('@/assets/img/moutains/mount2.jpg'),
    mount3: require('@/assets/img/moutains/mount3.jpg'),
    mount4: require('@/assets/img/moutains/mount4.jpg'),
    mount5: require('@/assets/img/moutains/mount5.jpg'),
    mount6: require('@/assets/img/moutains/mount6.jpg'),
    mount7: require('@/assets/img/moutains/mount7.jpg'),
    mount8: require('@/assets/img/moutains/mount8.jpg'),
    text: 'Поход в горы - это очень захватывающий и динамичный вид отдыха. Там, в горах, когда после долгого подъема ты стоишь на вершине,' +
           ' над облаками - эмоции просто зашкаливают. Это именно тот случай, когда лучше один раз самому увидеть собственными глазами,' +
           ' почувствовать каждой клеточкой своего тела, чем 100 раз услышать, или прочитать в ярких отчетах бывалых.'+
           ' Горы не оставят никого равнодушными, каждый человек который отправится в пеший поход по диким горам,' +
           ' получит свою порцию адреналина, приключений и новых ощущений.' +
           ' Для туристов, у которых уже есть опыт пеших походов, и которые хотят попробовать себя в высокогорных восхождениях' +
           ' или многодневных экспедициях, имеется множество различных вариаций такого отдыха. Руководствуясь богатым опытом походов,' +
           ' наши инструктора смогут подобрать для Вас лучший вариант, максимально отвечающий Вашим пожеланиям. Вы гарантированно получите' +
           ' море новых впечатлений. Пешие походы в горы и новые покорения вершин являются частью нашей активной жизни.' +
           ' Время проведенное без похода - потраченное время впустую. Новый поход — это новые позитивные эмоции,' +
           ' впечатления и конечно же интересные знакомства. Новая поездка - это очередное классное событие,' +
           ' которое позволяет познакомиться с красивейшими местами. Мы ставим перед собой цель не пробежаться по горам' +
           ' или в бешеном темпе ездить в туры, а получить настоящее удовольствие от безграничной красоты горных пейзажей,' +
           ' получить прилив сил и вдохновения на долгое время.'
  }),
}
</script>

<style scoped>

</style>