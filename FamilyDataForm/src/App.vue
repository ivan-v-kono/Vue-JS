<template>
  <div id="app">
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
export default {
  components: {AppHeader}
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  text-decoration: none;
  padding: 0.75em;
  margin: 0 1em ;
  border: 1px solid white;
  border-radius: 5px;
}
a:hover {
  background: lightgrey;
  color: darkblue;
}
a:active {
  background: darkgrey;
  color: darkblue;
}
</style>