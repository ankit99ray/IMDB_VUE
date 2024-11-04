<template>
  <v-card elevation="1" class="movie-card" dense>
    <v-img :src="moviePoster" height="300px" class="movie-card__image"></v-img>

    <v-card-title class="movie-card_title">
      <strong>{{ movieTitle }}</strong>
    </v-card-title>

    <v-card-actions>
      <v-btn text @click="$emit('show-details', this.movie)">
        <span style="font-size: 0.7rem">Details</span>
        <i class="bx bx-right-arrow-alt blue--text"></i>
      </v-btn>
      <v-spacer></v-spacer>
      <div>
        <v-btn icon @click="$emit('edit-movie', this.movie.id)">
          <i class="bx bxs-edit movie-card-edit green--text"></i>
        </v-btn>
        <v-btn icon @click="$emit('delete-movie', this.movie.id)">
          <i class="bx bx-trash movie-card-delete red--text"></i>
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  emits: ["show-details", "delete-movie", "edit-movie"],
  data() {
    return {};
  },
  computed: {
    moviePoster() {
      return this.movie.posterLink;
    },
    movieTitle() {
      return this.movie.name;
    },
  },
//   methods: {
//     showDetails() {
//       this.$emit("show-details", this.movie);
//     },
//     deleteMovie() {
//       this.$emit("delete-movie", this.movie.id);
//     },
//     editMovie() {
//       this.$emit("edit-movie", this.movie.id);
//     },
//   },
};
</script>

<style scoped>
.movie-card {
  background: rgba(231, 234, 253, 0.2) !important;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgb(255, 255, 255);
  border-radius: 10px;
}

.movie-card__image {
  transition: all 0.5s ease;
}

.movie-card__image:hover {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 1px 0px,
    rgba(0, 0, 0, 0.15) 0px 2px 2px 0px, rgba(0, 0, 0, 0.15) 0px 4px 4px 0px,
    rgba(0, 0, 0, 0.15) 0px 8px 8px 0px;
  transition: all 0.5s ease;
  transform: scale(0.98);
  transition: var(--tran-04);
  outline: var(--main-color) solid 2px;
  border-radius: 10px;
}

.movie-card_title {
  color: var(--secondary-color) !important;
  font-size: 0.9rem;
  padding-bottom: 0px;
  height: 2.6rem;
  overflow: hidden;
  font: bold;
}

.v-btn i {
  transition: var(--tran-05);
}

.v-btn:hover i {
  transform: scale(1.5);
  transition: var(--tran-05);
}
</style>

