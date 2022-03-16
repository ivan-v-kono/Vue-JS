<template>
  <div class="form-fields">

    <form class="parent-form">
      <div class="parent-form_title">Personal data</div>
      <div class="parent-form_name-form">
        <label for="name">Name</label>
        <input id="name" v-model="parent.name">
      </div>
      <div class="parent-form_age-form">
        <label for="age">Age</label>
        <input id="age" v-model="parent.age">
      </div>
    </form>

    <div class="children-form_title">
      <div style="text-align: left">
        <span style="margin-left: 34.5em; line-height: 36px;">Children (max 5)</span><!---->
        <button class="children-form_add-button"
            v-if="childrenName.length < 5"
            @click="addForm()">
          <span>+ Add child</span>
        </button>
      </div>
    </div>

    <form class="child-form"
        v-for="(ch,index) in childrenName"
        :key="index"
        @submit.prevent>
      <div :id="index">
        <label for="{{ch}}">Name</label>
        <input id="{{ch}}" v-model="childrenName[index]">

        <label for="age{{ch}}">Age</label>
        <input id="age{{ch}}" v-model="childrenAge[index]">

        <button
            type="button"
            @click="removeChild(index)"
            class="children-form_del-button" >
          <span>Delete</span>
        </button>
      </div>
    </form>
    <p>
      <button
          @click="saveFamilyData"
          class="btn-save">
        Save Data
      </button>
    </p>
  </div>
</template>

<script>

export default {
  name: 'FormList',
  components: {
  },
  data: () => ({
  }),
  methods: {
    addForm() {
      this.$store.commit('addForm')
    },
    saveFamilyData() {
      this.$store.commit('saveFamilyData')
    },
    removeChild(i) {
      this.$store.commit('removeChild', i)
    }
  },
  computed: {
    parent() {
      return this.$store.state.parent
    },
    childrenName() {
      return this.$store.state.childrenName
    },
    childrenAge() {
      return this.$store.state.childrenAge
    },
    family() {
      return this.$store.state.family
    }
  }
}
</script>

<style scoped>
.form-fields {
  padding-bottom: 1em;
}
form > div {
  position: relative;
}
form > div > label {
  position: absolute;
}
.child-form {
  margin-left: 6em;
}
.child-form > div > input {
  margin-right: 2em;
  margin-bottom: 1.5em;
}
.parent-form_title {
  font-size: 1.25em;
  font-weight: bolder;
  margin-right: 20.5em;
  padding-bottom: 0.5em;
}
.children-form_title {
  font-size: 1.25em;
  font-weight: bolder;
  padding-bottom: 0.5em;
}
.parent-form_name-form,
.parent-form_age-form {
  padding: 0.5em 0.5em 1em;
  margin-right: 18em;
}
.children-form_add-button {
  margin-left: 15.75em;
  padding: 0 1.5em ;
  background-color: white;
  line-height: 32px;
  font-size: 16px;
  color: darkgreen;
  border: 2px solid darkseagreen;
  border-radius: 5px;
}
.children-form_add-button:hover {
  background-color: darkseagreen;
  color: white;
}
.children-form_add-button:active {
  background-color: darkgreen;
  color: white;
}
.children-form_del-button {
  line-height: 32px;
  font-size: 16px;
  border: 1px solid darkgrey;
  border-radius: 5px;
}
.children-form_del-button:hover {
  background-color: rgb(210, 210, 210);
}
.children-form_del-button:active {
  background-color: rgb(190, 190, 190);
}
.btn-save {
  line-height: 32px;
  font-size: 16px;
  border: 1px solid darkgrey;
  border-radius: 5px;
  background-color: orange;
}
.btn-save:hover {
  background-color: rgba(235, 165, 0, 0.5);
}
.btn-save:active {
  background-color: orange;
}
label {
  font-size: 0.75em;
  padding: 0.2em;
  margin-bottom: 0.5em;
}
input {
  line-height: 2.75em;
  font-size: 1.25em;
  border: 1px solid darkgrey;
  border-radius: 5px;
}
</style>
