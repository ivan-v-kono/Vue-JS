<template>
  <v-main>
    <v-container id="panoramicImg4"
                 fluid
                 class="mt-6 pb-0 px-0 mt-md-n1 pt-md-0"
    >
      <v-img
          class="z-index0 mt-n9"
          :src="panoramic4"
          alt="tower"
          max-height="600"
      ></v-img>
    </v-container>
    <v-divider dark class="secondary"></v-divider>

    <v-system-bar id="contactUs"
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
      {{ slogan5 }}
      <v-spacer></v-spacer>
    </v-system-bar>
    <v-divider dark></v-divider>

    <v-container id="form+data"
      class="ms-0 ps-4 mb-16 pb-16 mb-md-12">
      <v-row class="mb-16 mb-md-0">
        <v-col id="data"
            cols="12"
            md="6"
            lg="4"
        ><!---->
          <v-row align="center" class="pa-2">
            <v-icon large color="primary">mdi-home</v-icon>
            <span class="text-h5 font-weight-bold primary--text ps-2">{{ companyName }}</span>
          </v-row>
          <v-row align="center" class="pa-2">
            <span class="text-body-1 text-sm-h6  primary--text ps-1">{{ owner }}</span>
          </v-row>
          <v-row align="center" class="pa-2 mt-0">
            <span class="text-body-2 text-sm-h6 primary--text ps-1 ">{{ account }}</span>
          </v-row>
          <v-row align="center" class="pa-2 mt-0">
            <span class="text-body-2 text-sm-h6 primary--text ps-1 ">{{ bank }}</span>
          </v-row>
          <v-row align="center" class="pa-2">
            <v-icon large color="primary">mdi-phone-in-talk</v-icon>
            <span class="text-h6 font-weight-bold primary--text pa-0 ps-2 col-10">{{ phones[0] }}</span>
            <span class="text-h6 font-weight-bold primary--text pa-0 ps-11 col-10">{{ phones[1] }}</span>
            <span class="text-h6 font-weight-bold primary--text pa-0 ps-11 col-10">{{ phones[2] }}</span>
          </v-row>
          <v-row align="center" class="pa-2">
            <v-icon large color="primary">mdi-email</v-icon>
            <span class="text-h6 font-weight-bold primary--text pa-0 ps-2 col-10">{{ mail }}</span>
          </v-row>
          <v-row align="center" class="pa-2">
            <v-icon large color="primary">mdi-wrench</v-icon>
            <span class="text-h6 font-weight-bold primary--text pa-0 ps-2 col-10">{{ workTime }}</span>
          </v-row>
          <v-row align="center" class="pa-2 mt-0 pt-0">
            <span class="text-body-2 text-sm-h6 primary--text ps-11 ">{{ dayOff }}</span>
          </v-row>
        </v-col>
        <v-col
          md="6"
          offset-lg="1"
          >
          <v-row >
            <v-col
              cols="12"
            >
              <p class="primary--text text-h6">{{formTitle}}</p>
              <v-form id="form"
                  ref="form"
                  @submit.prevent="sendEmail"
                  v-model="valid"

              ><!--lazy-validation-->
                <v-text-field id="name"
                    label="Ваше имя"
                    outlined
                    clearable
                    v-model="name"
                    name="name"
                    class="primary--text"
                    dense
                    :rules="nameRules"
                    required
                ></v-text-field>
                <v-text-field id="email"
                    label="Ваш E-mail"
                    v-model="email"
                    name="email"
                    outlined
                    clearable
                    class="primary--text"
                    dense
                    :rules="emailRules"
                    required
                ></v-text-field>
                <v-textarea id="message"
                    label="Текст сообщения"
                    name="message"
                    v-model="message"
                    cols="30" rows="5"
                    outlined
                    clearable
                    class="primary--text"
                    dense
                    required
                    :rules="messageRules"
                >
                </v-textarea>

                <v-btn id="btnSend"
                    type="submit"
                    :disabled="!valid"
                    @click="validate"
                    text
                    outlined
                    color="#00838F"
                >
                  <span  class="font-weight-bold ">Отправить</span>
                </v-btn>
              </v-form>
              <v-snackbar
                  v-model="snackbar"
                  :timeout="timeout"
                  centered
              >
                {{ text }}
                <template v-slot:action="{ attrs }">
                  <v-btn
                      color="warning"
                      text
                      v-bind="attrs"
                      @click="snackbar = false"
                  >
                    <v-icon
                        right
                        color="warning"
                        size="25"
                    >
                      mdi-close-outline
                    </v-icon>
                  </v-btn>
                </template>
              </v-snackbar>
            </v-col>


          </v-row>
        </v-col>
      </v-row>
    </v-container>

  </v-main>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: "Contacts",
  props: {
    logoImg: String,
    companyName: String,
  },
  data: () => ({
    panoramic4: require('@/assets/img/panoramic-contacts.jpg'),
    slogan5: 'Свяжитесь с нами:',
    formTitle: 'Нам можно написать:',
    owner: 'ИП Солтан Е.В. УНП 193266035',
    account: 'р/c BY77BPSB30133105880199330000,',
    bank: 'ОАО «БПС-Сбербанк», код BPSBBY2X',
    phones: ['+375 (29) 317-76-60', '+375 (29) 391-63-50', '+375 (29) 543-22-23',],
    mail: 'info@profpromalp.by',
    workTime: 'Пн - Вс с 8.00 - 20.00',
    dayOff: 'Без выходных',
    valid: true,
    name: '',
    nameRules:[
      v => !!v || 'Представьтесь, пожалуйста',
      v => (v && v.length <= 30) || 'Слишком длинное имя (не более 30 символов)',
    ],
    email: '',
    emailRules: [
      v => !!v || 'Укажите Ваш E-mail',
      v => /.+@.+\..+/.test(v) || 'Ошибка в написании E-mail',
    ],
    message: '',
    messageRules:[
      v => !!v || 'Вы ничего не написали...',
      v => (v && v.length <= 500) || 'Вы написали слишком много (не более 500 символов)',
    ],
    sendResult: false,
    snackbar: false,
    text: 'Ваше сообщение успешно отправлено ',
    timeout: 2000,
  }),
  methods: {
    sendEmail() {
      emailjs.sendForm('service_hhbfzpa', 'template_atvwlhw','form', 'user_qF7R9NKYpCLtpHOaeeEXH')
          .then((result) => {
            console.log('SUCCESS!', result);
          }, (error) => {
            console.log('FAILED...', error.text);
          });
      this.$refs.form.reset();
      this.snackbar = true;
    },
    validate () {
      this.$refs.form.validate();
    },
    alert(i) {
      alert(i);
    },

  }



}
</script><!--scoped-->

<style >

.theme--light.v-input, .theme--light.v-input input, .theme--light.v-input textarea {
color: #003b57 !important;
}
.v-text-field--outlined fieldset {
  border: 1px solid;
  border-color: #00838F !important;
}
.theme--light.v-label {
  color: #00838F;
}
#btnSend {
  border-color: #00838F !important;
}
#btnSend:hover {
  border-color: #003b57 !important;
  color: #003b57 !important;
}

/*#btnSend {
  color: #011b35 !important;
}*/
/*.v-text-field__slot .v-label,
.v-text-field__details .v-counter,
#firstname,
#email,
#subject,
textarea::placeholder
{
  color: #003b57 !important;
  border-bottom-color: #003b57 !important;
}
textarea
{
  color: #003b57 !important;
  border-color: #003b57 !important;
  border-width: 7px !important;
}*/ /*old style*/
/*.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}*/

/*label {
  float: left;
}*/

/*input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}*/

/*input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}*/

/*input[type=submit]:hover {
  background-color: #45a049;
}*/
</style>
