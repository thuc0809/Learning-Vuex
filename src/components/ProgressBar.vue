<template>
  <div v-if="auth.isAuthenticated" :style="styleProgress" class="progress-bar">Progress: {{progress}}</div>
</template>

<script>
import {mapState, mapGetters} from "vuex"
export default {
  name: "ProgressBar",
  computed: {
    ...mapState(["auth"]),
    ...mapGetters(["progress", "styleProgress"])
  },
};
</script>

<style>
.progress-bar {
  padding: 5px;
  text-align: center;
  background: rgb(106, 248, 118);
  color: black;
}
</style>
