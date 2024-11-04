<template>
  <div>
    <v-container>
      <FilterMovie :genres="genresData" @toggle-genre="toggleGenre" />
    </v-container>
    <v-container class="movies-list">
      <v-row>
        <v-col
          v-for="movie in selectedMovies"
          :key="movie.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <movie-card
            :movie="movie"
            @show-details="showDetails"
            @delete-movie="deleteMovieConfirmation"
            @edit-movie="editMovie"
          ></movie-card>
        </v-col>
      </v-row>
    </v-container>
    <movie-details-modal
      v-if="selectedMovie"
      :movie="selectedMovie"
      :showModal="showModal"
      @close-modal="closeModal"
    ></movie-details-modal>
    <confirm-dialog
      v-if="showConfirmDialog"
      :showDialog="showConfirmDialog"
      :dialogTitle="dialogTitle"
      :dialogMessage="dialogMessage"
      @close-dialog="closeDialog"
      @confirm-action="confirmAction"
    ></confirm-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MovieCard from "../components/movies/MovieCard.vue";
import MovieDetailsModal from "../components/movies/MovieDetailsModal.vue";
import ConfirmDialog from "../components/layouts/ConfirmDialog.vue";
import FilterMovie from '../components/movies/FilterMovie.vue';
export default {
  components: {
    MovieCard,
    MovieDetailsModal,
    ConfirmDialog,
    FilterMovie
  },
  computed: {
    ...mapGetters("movies", ["moviesData"]),
    ...mapGetters("genres", ["genresData"]),

    selectedMovies() {
      if (this.genreSelected !== 10) {
        return this.moviesData.filter((m) =>
          m.genres.some((g) => g.id === this.genreSelected)
        );
      }
      return this.moviesData;
    },
  },

  data() {
    return {
      selectedMovie: null,
      showModal: false,
      showConfirmDialog: false,
      selectedMovieId: null,
      genreSelected: 10,
    };
  },
  watch: {
    genreSelected(){
        this.selectedMovies;
    }
  },
  methods: {
    ...mapActions("movies", ["deleteMovie"]),
    ...mapActions("movies", ["getMovies"]),
    showDetails(movie) {
      this.selectedMovie = movie;
      this.showModal = true;
    },
    closeModal() {
      this.selectedMovie = null;
      this.showModal = false;
    },
    editMovie(movieId) {
      this.$router.push({ name: "edit-movie", params: { id: movieId } });
    },
    deleteMovieConfirmation(movieId) {
      this.dialogTitle = "Delete Movie";
      this.dialogMessage = "Are you sure you want to delete this movie?";
      this.showConfirmDialog = true;
      this.selectedMovieId = movieId;
    },
    closeDialog() {
      this.selectedMovie = null;
      this.showConfirmDialog = false;
    },
    confirmAction() {
      this.deleteMovie(this.selectedMovieId);
      this.closeDialog();
    },
    toggleGenre(genreId) {
      this.genreSelected = genreId;
    },
  },
  mounted(){
    this.getMovies();
  }
};
</script>

<style scoped>
.movies-list {
  margin-top: 20px;
}
</style>
