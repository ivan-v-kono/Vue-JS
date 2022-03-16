<template>
  <div class="preview">
    <div class="wrapper"
         v-if="checkParentData"
    >
      <p class="parent-title">Personal data</p>
      <p class="parent-data"> {{ this.$store.state.parent.name + ',   ' + this.$store.state.parent.age + ' years' }} </p>
    </div>

    <div class="wrapper"
         v-if="checkParentData">
      <p class="children-title">Children data</p>
      <p class="child-data"
         v-for="(child, i) in this.$store.state.childrenName" :key="i">
        <span class="child-data_name"
            v-if="child">
          {{child}}
        </span>
        <span class="child-data_age"
            v-if="this.$store.state.childrenAge[i]">
          {{',   ' + this.$store.state.childrenAge[i] + ' years'}}
        </span>
      </p>

    </div>
  </div>
</template>

<script>

export default {
  name: 'PreviewList',
  props: {
  },
  data: () => ({
    //
  }),
  computed: {
    checkParentData() {
      return this.$store.state.parent.name && this.$store.state.parent.age
    }
  }
}
</script>

<style scoped>
.preview {
  text-align: center;
}
.parent-title,
.children-title {
  font-size: 1.5em;
}
.parent-data,
.child-data {
  font-size: 1.25em;
  font-weight: bold;
}
.wrapper {
  padding-bottom: 1em;
}
.child-data_name,
.child-data_age {
  background-color: lightgrey;
  border-color: lightgrey;
}
.child-data_name {
  padding: 0.5em 0 0.5em 0.5em;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border-right: none;
}
.child-data_age {
  padding: 0.5em  0.5em 0.5em 0;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border-left: none;
}
</style>