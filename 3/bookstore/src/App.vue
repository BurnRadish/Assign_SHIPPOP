<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script lang="ts">
import Navbar from "../src/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Prompt&display=swap");

#app {
  font-family: "Prompt", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-color: lightgray; */
}
</style>
