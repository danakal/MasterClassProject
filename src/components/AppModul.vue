<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="container">
      <page-home />
    </div>
  </div>
</template>

<script>
//původní app s modulem PageHome
import PageHome from "@/components/Home.vue";

export default {
  name: "AppModul",
  components: {
    PageHome,
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
  margin-top: 60px;
}
</style>
