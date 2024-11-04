<!--add actor/ producer component -->
<template>
  <v-dialog v-model="dialog" max-width="500px" @click:outside="close">
    <v-card id="castAddDailog">
      <slot name="title"> </slot>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="name.value"
                label="Name"
                required
                @blur="clearValidity('name')"
                :error-messages="!name.isValid ? 'Name cannot be empty or more than 50 letters.': null"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="bio.value"
                label="Bio"
                required
                @blur="clearValidity('bio')"
                :error-messages="!bio.isValid ? 'Bio cannot be empty or more than 300 letters.': null"
              ></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="sex.value"
                :items="sexOptions"
                label="Sex"
                required
                @blur="clearValidity('sex')"
                :error-messages="!sex.isValid ? 'Sex cannot be null or empty.': null"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="dateOfBirth.value"
                label="Date of bith"
                required
                type="Date"
                @blur="clearValidity('dateOfBirth')"
                :error-messages="!dateOfBirth.isValid ? 'Date of Birth cannot be empty or it should be between 1900 and current date.': null"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="close">Close</v-btn>
        <v-btn color="primary" text @click="submit">
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>


export default {
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close-modal", "submit-modal"],
  data() {
    return {
      dialog: false,
      name: {
        value:"",
        isValid: true,
      },
      bio: {
        value:"",
        isValid: true,
      },
      dateOfBirth: {
        value:"",
        isValid: true,
      },
      sex: {
        value:"",
        isValid: true,
      },
      isFormValid: true,
    };
  },
  watch: {
    showModal() {
      this.dialog = this.showModal;
    },
  },
  computed: {
    sexOptions() {
      return ["Male", "Female"];
    },
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    close() {
      this.$emit("close-modal");
    },
    validateForm(){
      if(this.name.value === "" || this.name.value.length > 50){
        this.name.isValid = false;
        this.isFormValid = false;
      }
      if(this.bio.value === "" || this.bio.value.length > 300){
        this.bio.isValid = false;
        this.isFormValid = false;
      }
      if(this.sex.value === ""){
        this.sex.isValid = false;
        this.isFormValid = false;
      }
      if(this.dateOfBirth.value === ""){
        this.dateOfBirth.isValid = false;
        this.isFormValid = false;
      }
      const dateObject = new Date(this.dateOfBirth.value);
      if(dateObject >= new Date(new Date().setHours(0, 0, 0, 0)) || dateObject.getFullYear() < 1900){
        console.log("date");
        this.dateOfBirth.isValid = false;
        this.isFormValid = false;
      }
    },
    submit() {
      this.validateForm();
      if(!this.isFormValid){
        console.log("form is not valid");
      }
      else{
        this.$emit("submit-modal", {
          name: this.name.value,
          bio: this.bio.value,
          dateOfBirth: this.dateOfBirth.value,
          sex: this.sex.value,
        });
      }
    },
  },
  created() {
    this.dialog = this.showModal;
  },
};
</script>

<style scoped>
#castAddDailog {
  background: rgba(239, 250, 255, 0.925) !important;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.929);
}
</style>
