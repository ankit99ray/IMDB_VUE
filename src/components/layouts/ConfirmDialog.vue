<template>
  <v-dialog v-model="dialog" max-width="500px" @click:outside="close">
    <v-card class="confirm-dialog">
      <v-card-title class="headline">{{ dialogTitle }}</v-card-title>

      <v-card-text>
        {{ dialogMessage }}
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="close">Cancel</v-btn>
        <v-btn color="primary" text @click="confirm">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    showDialog: {
      type: Boolean,
      required: true,
    },
    dialogTitle: {
      type: String,
      required: true,
    },
    dialogMessage: {
      type: String,
      required: true,
    },
  },
  emits: ["confirm-action", "close-dialog"],
  data() {
    return {
      dialog: false,
    };
  },
  watch: {
    showDialog() {
      this.dialog = this.showDialog;
    },
  },
  methods: {
    close() {
      this.$emit("close-dialog");
      this.dialog = false;
    },
    confirm() {
      this.$emit("confirm-action");
      this.dialog = false;
    },
  },
  created() {
    this.dialog = this.showDialog;
  },
};
</script>

<style scoped>
.confirm-dialog {
  background: rgba(239, 250, 255, 0.925) !important;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.929);
}

</style>
