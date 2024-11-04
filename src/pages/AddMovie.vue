<template>
  <v-container class="justify-center" style="height: 100vh">
    <h2 class="my-2">Add movie</h2>
    <form @submit.prevent="submitForm">
      <v-text-field
        v-model.trim="movieName.value"
        label="Movie Name"
        variant="outlined"
        type="text"
        required
        :class="{ invalid: !movieName.isValid }"
        @blur="clearValidity('movieName')"
        :error-messages="
          !movieName.isValid ? 'Movie Name cannot be empty.' : null
        "
      ></v-text-field>
      <v-textarea
        v-model.trim="moviePlot.value"
        label="Movie Plot"
        rows="3"
        required
        variant="outlined"
        :class="{ invalid: !moviePlot.isValid }"
        @blur="clearValidity('moviePlot')"
        :error-messages="
          !moviePlot.isValid ? 'Movie plot cannot be empty.' : null
        "
      ></v-textarea>
      <div class="flex-container">
          <v-img v-if="!moviePoster.value && oldPoster.value" :src="oldPoster.value" height="60px" max-width="40px"></v-img>
          <v-img v-else-if="moviePoster.value" :src="moviePoster.value" height="60px" max-width="40px"></v-img>
          <v-file-input
            v-model="moviePoster.value"
            label="Select a poster for the movie."
            :prepend-icon="(!isEditMovie && !moviePoster.value && !oldPoster.value)? 'mdi-camera': null"
            accept="image/*"
            variant="outlined"
            outlined
            required
            dense
            :class="{ invalid: !moviePoster.isValid }"
            @blur="clearValidity('moviePoster')"
            @change="uploadImage"
            :error-messages="
              (moviePoster.isValid || oldPoster.isValid) === false ? 'Movie should have a poster.' : null
            "
          ></v-file-input>
          <v-progress-linear
          v-if="uploading"
          :value="progress"
          color="blue"
        ></v-progress-linear>
      </div>

      <!-- <v-text-field
        v-model="moviePoster.value"
        label="Movie Poster URL"
        prepend-icon="mdi-camera"
        variant="outlined"
        outlined
        required
        dense
        :class="{ invalid: !moviePoster.isValid }"
        @blur="clearValidity('moviePoster')"
        :error-messages="
          (moviePoster.isValid || oldPoster.isValid) === false ? 'Movie should have a poster.' : null
        "
      ></v-text-field> -->
      <v-text-field
        v-model.trim="yearOfRelease.value"
        label="Year of Release"
        required
        type="number"
        variant="outlined"
        :class="{ invalid: !yearOfRelease.isValid }"
        @blur="clearValidity('yearOfRelease')"
        :error-messages="
          !yearOfRelease.isValid
            ? 'Year of Release cannot be empty and must be in between (1900 - current year).'
            : null
        "
      ></v-text-field>
      <v-combobox
        v-model.trim="genres.value"
        label="Genres"
        multiple
        required
        variant="outlined"
        class="genre-input"
        :items="genreOptions"
        :class="{ invalid: !genres.isValid }"
        @blur="clearValidity('genres')"
        :error-messages="
          !genres.isValid ? 'You must choose atleast one genre.' : null
        "
      ></v-combobox>
      <div class="flex-container">
        <v-combobox
          v-model.trim="producer.value"
          label="Producer"
          required
          variant="outlined"
          :items="producerOptions"
          :class="{ invalid: !producer.isValid }"
          @blur="clearValidity('producer')"
          chips
          :error-messages="
            !producer.isValid ? 'Movie should have a producer.' : null
          "
        ></v-combobox>
        <v-btn color="black" fluid id="addProducer" class="add-btn" @click="addCast('producer')">
          Add
        </v-btn>
      </div>
      <div class="flex-container">
        <v-combobox
          v-model="actors.value"
          label="Actors"
          multiple
          required
          variant="outlined"
          :items="actorOptions"
          :class="{ invalid: !actors.isValid }"
          @blur="clearValidity('actors')"
          :error-messages="
            !actors.isValid ? 'You must choose atleast one actor.' : null
          "
        ></v-combobox>
        <v-btn color="black" id="addActor" class="add-btn" @click="addCast('actor')"> Add </v-btn>
      </div>
      <div class="movie-form-action">
        <v-btn class="mr-4" id="cancel-btn" @click="cancel"> cancel </v-btn>
        <v-btn id="submit-btn" color="primary" @click="submitForm">
          submit
        </v-btn>
      </div>
    </form>
  </v-container>
  <AddCastModal
      v-if="showAddCastModal"
      :show-modal="showAddCastModal"
      @close-modal="closeAddCastModal"
      @submit-modal="submitCastModal"
    >
      <template v-slot:title>
        <v-card-title class="headline">Add {{ addCastValue }}</v-card-title>
      </template>
    </AddCastModal>
</template>

<script>
import { storage } from '../../firebase.js';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { mapActions, mapGetters } from "vuex";
import AddCastModal from '../components/movies/AddCastModal.vue';
export default {
  components: {
    AddCastModal
  },
  data() {
    return {
      movieName: {
        value: "",
        isValid: true,
      },
      moviePlot: {
        value: "",
        isValid: true,
      },
      yearOfRelease: {
        value: null,
        isValid: true,
      },
      moviePoster: {
        value: null,
        isValid: true,
      },
      producer: {
        value: null,
        isValid: true,
      },
      actors:{
        value: [],
        isValid: true
      },
      genres: {
        value: [],
        isValid: true,
      },
      oldPoster: {
        value: null,
        isValid: true,
      },
      isFormValid: true,
      showAddCastModal: false,
      addCastValue: "",
      uploading: false,
      progress: 0
    };
  },
  watch: {
    movieData: function (newVal) {
      this.movieName.value = newVal.name || "";
      this.moviePlot.value = newVal.plot || "";
      this.yearOfRelease.value = newVal.yearOfRelease || "";
      this.genres.value =
        newVal.genres.map((genre) => {
          const genreObj = {
            title: genre.name,
            value: genre.id,
          };
          return genreObj;
        }) || [];
      this.producer.value = newVal.producer
        ? {
            title: newVal.producer.name,
            value: newVal.producer.id,
          }
        : "";
      this.actors.value = newVal.actors.map((actor) => {
        const actorObj = {
          title: actor.name,
          value: actor.id,
        };
        return actorObj;
      });
      this.oldPoster.value = newVal.posterLink || null;
    },
  },
  computed: {
    ...mapGetters("actors", ["actorsData"]),
    ...mapGetters("producers", ["producersData"]),
    ...mapGetters("genres", ["genresData"]),
    ...mapGetters("movies", ['movieData']),
    actorOptions() {
      return this.actorsData.map((actor) => {
        return {
          title: actor.name,
          value: actor.id
        }
      });
    },
    producerOptions() {
      return this.producersData.map((producer) => {
        return {
          title: producer.name,
          value: producer.id,
        };
      });
    },
    genreOptions() {
      return this.genresData.map((genre) => {
        return {
          title: genre.name,
          value: genre.id,
        };
      });
    },
    isEditMovie() {
      return this.$route.name === "edit-movie";
    },
  },
  methods: {
    ...mapActions('movies', ['getMovie']),
    ...mapActions("actors", ['createActor']),
    ...mapActions("producers", ['createProducer']),
    ...mapActions("movies", ['createMovie']),
    ...mapActions("movies", ['updateMovie']),
    clearValidity(input) {
      this[input].isValid = true;
    },
    async uploadImage() {
      if (!this.moviePoster.value) return;

      this.uploading = true; // Set the uploading state
      const storageRef = ref(storage, `posters/${this.moviePoster.value.name}`);
      const uploadTask = uploadBytesResumable(storageRef, this.moviePoster.value);

      uploadTask.on(
        'state_changed',
        snapshot => {
          // Calculate upload progress
          this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          console.error('Upload failed:', error);
          this.uploading = false;
        },
        async () => {
          // Upload completed successfully
          this.uploading = false;
          this.progress = 0;
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            this.moviePoster.value = downloadURL; // Set the poster link
            console.log('File available at:', downloadURL);
          } catch (error) {
            console.error('Error getting download URL:', error);
          }
        }
      );
    },
    validateForm() {
      this.isFormValid = true;
      if (this.movieName.value === "") {
        this.movieName.isValid = false;
        this.isFormValid = false;
      }
      if (this.moviePlot.value === "") {
        this.moviePlot.isValid = false;
        this.isFormValid = false;
      }
      if (this.moviePoster.value === null && this.oldPoster.value === null) {
        this.moviePoster.isValid = false;
        this.oldPoster.isValid = false;
        this.isFormValid = false;
      }
      if (this.actors.value.length === 0) {
        this.actors.isValid = false;
        this.isFormValid = false;
      }
      if (this.genres.value.length === 0) {
        this.genres.isValid = false;
        this.isFormValid = false;
      }
      if (this.producer.value === null) {
        this.producer.isValid = false;
        this.isFormValid = false;
      }
      if (
        this.yearOfRelease.value === null ||
        this.yearOfRelease.value > new Date().getFullYear() ||
        this.yearOfRelease.value < 1900
      ) {
        this.yearOfRelease.isValid = false;
        this.isFormValid = false;
      }
    },
    async submitForm() {
      if(this.uploading){
        console.log('Please upload the poster first');
        return;
      }
      this.validateForm();
      if (!this.isFormValid){
        console.log("Invalid data");
        return;
      }
      let movieSubmitData = {
        id: this.$route.params.id,
        name: this.movieName.value,
        plot: this.moviePlot.value,
        yearOfRelease: this.yearOfRelease.value,
        genreIds: this.genres.value.map((genre) => genre.value),
        producerId: this.producer.value.value,
        actorIds: this.actors.value.map((actor) => actor.value),
        posterLink: this.moviePoster.value || this.oldPoster.value,
        // oldPosterURL: this.oldPoster.value,
        // actors: this.actors.value.map((a) => {
        //   return this.actorsData.find((actor) => actor.id == a.value);
        // }),
        // producer: this.producersData.find(
        //   (producer) => producer.id === this.producer.value.value
        // ),
        // genres: this.genres.value.map((g) => {
        //   return this.genresData.find((genre) => genre.id == g.value);
        // }),
      };
      if (!this.isEditMovie) {
        this.createMovie(movieSubmitData)
          .then(() => {
            this.$router.push({ name: "movies" });
          })
          .catch(() => {
            alert("Something went wrong");
          });
      } else if (this.isEditMovie) {
        this.updateMovie(movieSubmitData)
          .then(() => {
            this.$router.push({ name: "movies" });
          })
          .catch(() => {
            alert("Something went wrong");
          });
      }
    },
    cancel() {
      this.$router.push({ name: "movies" });
    },
    closeAddCastModal() {
      this.showAddCastModal = false;
      this.addCastValue = "";
    },
    addCast(value) {
      switch (value) {
        case "actor":
          this.showAddCastModal = true;
          this.addCastValue = "actor";
          break;
        case "producer":
          this.showAddCastModal = true;
          this.addCastValue = "producer";
          break;
        default:
          break;
      }
    },
    submitCastModal(cast) {
      switch (this.addCastValue) {
        case "actor":
          this.createActor({
              name: cast.name,
              bio: cast.bio,
              gender: cast.sex,
              dateOfBirth: cast.dateOfBirth,
            })
            .then(() => {
              this.closeAddCastModal();
            });
          break;
        case "producer":
          this.createProducer({
              name: cast.name,
              bio: cast.bio,
              gender: cast.sex,
              dateOfBirth: cast.dateOfBirth,
            })
            .then(() => {
              this.closeAddCastModal();
            });
          break;
        default:
          break;
      }
    },
  },
  mounted() {
    // if route is edit, then take id from route params and call api to get movie details and set them to form
    if (this.isEditMovie) {
      this.getMovie(this.$route.params.id);
    }
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  gap: 1rem;
}
</style>
