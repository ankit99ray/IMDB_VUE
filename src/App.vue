<template>
  <the-header></the-header>
  <!-- <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view> -->
  <router-view></router-view>
</template>

<script>
import { mapActions } from 'vuex';
import TheHeader from "./components/layouts/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
  methods: {
    ...mapActions("movies", ["getMovies"]),
    ...mapActions("genres", ["getGenres"]),
    ...mapActions("actors", ["getActors"]),
    ...mapActions("producers", ["getProducers"]),
  },
  created() {
    this.getMovies();
    this.getGenres();
    this.getActors();
    this.getProducers();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.route-enter-from{
    opacity: 0;
    transform: translateY(-30px);
}
.route-leave-to{
    opacity: 0;
    transform: translateY(30px);
}

.route-enter-active{
    transition: all 0.3s ease-out;
}
.route-leave-active{
    transition: all 0.3s ease-in;
}
.route-enter-to{
    opacity: 1;
    transform: translateY(0);
}
.route-leave-from{
    opacity: 0;
    transform: translateY(0);
}
</style>
