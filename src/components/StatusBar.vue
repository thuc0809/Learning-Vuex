<template>
  <div class="status-bar">
    <p>Done</p>
    <ul>
      <li v-for="todo in listCompletedTodo" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "StatusBar",
  computed: {
    listCompletedTodo() {
      return this.$store.state.listTodo.filter((todo) => todo.completed)
    },
  },
};
</script>

<style>
.status-bar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}
</style>
