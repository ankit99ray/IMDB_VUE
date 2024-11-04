<template>
  <v-dialog v-model="dialog" width="500" @click:outside="close">
    <v-card class="movie-details-modal">
      <v-card-title class="headline">
        {{ movie.name }}
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-img
                :src="movie.posterLink"
                height="400px"
                class="movie-card__image"
              ></v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <v-card-text>
                <p><strong>Plot:</strong> {{ movie.plot }}</p><br>
                <p><strong>Release Year:</strong> {{ movie.yearOfRelease }}</p><br>
                <p>
                  <strong>Genre:</strong>
                  {{ movie.genres.map((g) => g.name).join(", ") }}
                </p><br>
                <p><strong>Producer:</strong> {{ movie.producer.name }}</p><br>
                <p>
                  <strong>Cast:</strong>
                  {{ movie.actors.map((a) => a.name).join(", ") }}
                </p>
              </v-card-text>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="close">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
    showModal: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close-modal"],
  data() {
    return {
      dialog: false,
    };
  },
  watch: {
    showModal() {
      this.dialog = this.showModal;
    },
  },
  methods: {
    close() {
      this.dialog = false;
      this.$emit("close-modal");
    },
  },
  created() {
    this.dialog = this.showModal;
  },
};
</script>

<style scoped>
.movie-details-modal {
  background: rgba(239, 250, 255, 0.925) !important;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.929);
}
.headline {
  font-size: 1.4rem !important;
}
</style>
