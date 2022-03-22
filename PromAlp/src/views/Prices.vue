  <template>
    <v-main class="mb-16 pb-16 pb-md-7">
      <v-container id="panoramicImg3"
                   fluid
                   class="mt-6 pb-0 px-0 mt-md-n1 pt-md-0"
      >
        <v-img
            class="z-index0 mt-n9"
            :src="panoramic3"
            alt="tower"
            max-height="600"
        ></v-img>
      </v-container>
     <!-- <v-divider dark></v-divider>-->

      <v-system-bar id="allNeed"
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
        {{ slogan4 }}
        <v-spacer></v-spacer>
      </v-system-bar>
      <v-divider dark></v-divider>

      <v-simple-table id="table"
          class="primary--text">
        <template v-slot:default>
          <thead class="info">
          <tr>
            <th class="text-left text-h6 primary--text">
              Вид работ
            </th>
            <th class="text-left text-h6 primary--text ps-0 pe-2">
              Цена
            </th>
          </tr>
          </thead>

          <tbody>
          <tr
              v-for="item in workType"
              :key="item.name"
              :class="item.style"
              class="text-subtitle-1"
          >
            <td :id="item.id" class="pe-0 ">{{ item.name }}</td>
            <td class="ps-0  me-3 pe-1">{{ item.price }}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-divider></v-divider>
      <div class="font-weight-bold warning--text ps-4 py-2">{{slogan5}}</div>
      <v-divider class="mb-14 mb-sm-12 mb-md-0"></v-divider>
    </v-main>
  </template>




<script>
export default {
  name: "Prices",
  props: {
    logoImg: String,
  },
  data: () => ({
    panoramic3: require('@/assets/img/panoramic-prices.jpg'),
    slogan4: 'Нам всем нужны хорошие цены...',
    slogan5: '*ЦЕНЫ ФОРМИРУЮТСЯ ТОЛЬКО ПОСЛЕ ВЫЕЗДА СПЕЦИАЛИСТА И ОСМОТРА ОБЪЕКТА',
    workType: [
      {name: 'УТЕПЛЕНИЕ ФАСАДОВ', style: 'grey lighten-3 text-body-1 font-weight-bold', id: 'fasades',},
        {name: 'Пенопластом', price: 'от 40 Br/м2', },
        {name: 'Минеральной ватой',price: 'от 50 Br/м2', },
      {name: 'ВЫСОТНЫЙ КЛИНИНИГ', style: 'grey lighten-3 text-body-1 font-weight-bold', id: 'cleaning',},
        {name: 'Мойка остекления', price: 'от 2 Br/м2', },
        {name: 'Мойка фасада',price: 'от 1,2 Br/м2', },
        {name: 'Очистка кровли', price: 'от 2,7 Br/м2', },
        {name: 'Обеспыливание',price: 'от 1,6 Br/м2', },
      {name: 'МАЛЯРНЫЕ РАБОТЫ', style: 'grey lighten-3 text-body-1 font-weight-bold', id: 'painting',},
        {name: 'Покраска металлоконструкций', price: 'договорная', },
        {name: 'Покраска фасадов',price: 'от 2,5 Br/м2', },
        {name: 'Покраска башен', price: 'договорная', },
      {name: 'МОНТАЖНЫЕ РАБОТЫ', style: 'grey lighten-3 text-body-1 font-weight-bold', id: 'mounting',},
        {name: 'Монтаж рекламы', price: 'договорная', },
        {name: 'Монтаж видеонаблюдения',price: 'от 50 Br', },
        {name: 'Монтаж металлоконструкций', price: 'договорная', },
        {name: 'Монтаж кондиционера', price: 'от 150 Br', },
        {name: 'Монтаж козырька кондиционера',price: 'от 68 Br', },
        {name: 'Монтаж водостоков', price: 'от 12 Br/м', },
        {name: 'Монтаж громоотводов', price: 'от 8 Br/м', },
        {name: 'Демонтажные работы',price: 'договорная', },
      {name: 'РЕМОНТНЫЕ РАБОТЫ', style: 'grey lighten-3 text-body-1 font-weight-bold', id: 'renovation',},
        {name: 'Герметизация швов', price: 'от 6,5 Br/м', },
        {name: 'Оштукатуривание фасада',price: 'от 17 Br/м2', },
      {name: 'КРОВЕЛЬНЫЕ РАБОТЫ', style: 'grey lighten-3 text-body-1 font-weight-bold', id: 'roof',},
        {name: 'Ремонт кровли', price: 'договорная', },
        {name: 'Монтаж кровли', price: 'договорная', },
        {name: 'Гидроизоляция ',price: 'договорная', },
      {name: 'ОБРАБОТКА МЕТАЛЛОКОНСТРУКЦИЙ', style: 'grey lighten-3 text-body-1 font-weight-bold', id: 'metalStructures',},
        {name: 'Очистка металла', price: 'договорная', },
        {name: 'Антикоррозийная обработка', price: 'договорная', },
        {name: 'Огнезащитная обработка ',price: 'договорная', },
      {name: 'РАБОТЫ В ВЕНТШАХТАХ И ТЕХКАНАЛАХ', style: 'grey lighten-3 text-body-1 font-weight-bold', id: 'shaft',},
        {name: 'Осмотр', price: 'договорная', },
        {name: 'Ремонт и восстановление', price: 'договорная', },
        {name: 'Обслуживание',price: 'договорная', },
      {name: 'ТАКЕЛАЖНЫЕ РАБОТЫ', style: 'grey lighten-3 text-body-1 font-weight-bold', id: 'rigging',},
        {name: 'Такелажные работы',price: 'от 150 Br', },
      {name: 'НАРУЖНОЕ ОСВЕЩЕНИЕ', style: 'grey lighten-3 text-body-1 font-weight-bold', id: 'lighting',},
        {name: 'Монтаж освещения фасада', price: 'договорная', },
        {name: 'Монтаж декоративной подсветки', price: 'договорная', },
        {name: 'Ремонт и демонтаж подсветки',price: 'договорная', },
      {name: 'ПОЗДРАВЛЕНИЕ В ОКНО', style: 'grey lighten-3 text-body-1 font-weight-bold', id: 'congratulations',},
        {name: 'Поздравления', price: 'от 148 Br', },
    ],
  }),
}
</script>

<style>
@keyframes backlightPrice {
  0%{ background-color: #00838F; }
  100%{ background-color: inherit; }
}
@-webkit-keyframes backlightPrice{
  0%{ background-color: #00838F; }
  100%{ background-color: inherit; }
}

#fasades:target,
#cleaning:target,
#painting:target,
#mounting:target,
#renovation:target,
#roof:target,
#metalStructures:target,
#shaft:target,
#rigging:target,
#lighting:target,
#congratulations:target {
  animation:backlightPrice 3s linear;
  -webkit-animation:backlightPrice 2.5s linear;
}

</style>
