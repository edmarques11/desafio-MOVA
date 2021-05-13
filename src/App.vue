<template>
  <div id="app">
    <Header class="header" />
    <router-view class="view" />
    <Paginations />
  </div>
</template>

<script>
import Header from "./components/Header";
import Paginations from "./components/Paginations";

export default {
  name: "App",
  components: {
    Header,
    Paginations,
  },
  mounted() {
    console.log(
      "%c              VueJS              ",
      "background: green; border-radius: 3px; color: white; font-weight: bold;"
    );
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}

.view {
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>
