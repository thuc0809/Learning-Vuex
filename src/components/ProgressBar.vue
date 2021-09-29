<template>
  <div :style="styleProgress" class="progress-bar">Progress: {{progress}}</div>
</template>

<script>
export default {
  name: "ProgressBar",
  computed: {
    progress() {
      return Math.round(this.$store.state.listTodo.filter((todo) => todo.completed).length / this.$store.state.listTodo.length * 100)
    },
    styleProgress() {
        return "width: " + this.progress + "%"
    }
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
