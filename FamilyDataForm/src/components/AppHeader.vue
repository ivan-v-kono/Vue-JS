<template>
  <div class="header">
    <img src="favicon.ico" alt="***"/>
    <router-link :to="{ name: 'FormList' }">FormList</router-link>
    <router-link :to="{ name: 'PreviewList' }">Preview</router-link>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data: () => {
    return {};
}
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.header {
  margin: 2em 0;
  text-align: center;
  line-height: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid darkgrey;
}
img {
  float: left;
  padding-top: 2px;
  margin-left: 10px;
}
</style>