<template>
  <v-sheet class="mx-auto">
    <v-slide-group>
      <v-slide-item
        v-for="genre in genres.slice().reverse()"
        :key="genre.id"
      >
        <v-btn
          class="mx-2 my-2"
          :class="{activeGenreButton: genre.id === activeGenre.id}"
          depressed
          rounded
          @click="toggleGenre(genre)"
        >
          {{ genre.name }}
        </v-btn>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  props: {
    genres: {
      type: Array,
      required: true,
    },
  },
  emits: ["toggle-genre"],
  data(){
    return {
        activeGenre: {
          name: 'All',
          id: 10
        }
    }
  },
  watch: {
    activeGenre() {
      this.$emit("toggle-genre", this.activeGenre.id);
    },
  },
  methods: {
    toggleGenre(genre) {
      this.activeGenre = (genre.id === this.activeGenre.id) ? {name: 'All', id: 10} : genre;
    },
  },
};
</script>

<style scoped>
.v-sheet {
  background: rgba(239, 250, 255, 0.133) !important;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.activeGenreButton{
    background-color: black;
    color: white;
}

/* .v-btn {
  background: rgba(239, 250, 255, 0.133) !important;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgb(255, 255, 255);
  font-size: 0.8rem;
} */

/* .v-btn--active {
  background: var(--main-color) !important;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgb(255, 255, 255) !important;
} */

 
</style>
