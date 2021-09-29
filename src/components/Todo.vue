<template>
  <div class="todo-list">
    <ul v-if="auth.isAuthenticated">
      <li v-for="todo in listTodo" :key="todo.id">{{ todo.title }}</li>
    </ul>
    <div v-else style="text-align: center">Not Authorized</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "todo",
  data() {
    return {
    }
  },
  computed: {
      ...mapState(['listTodo', 'auth'])
  }
}
</script>

<style>
.todo-list ul {
  margin-top: 5px;
  padding: 0 10px 10px 10px;
  list-style-type: none;
}

.todo-list li {
  padding: 10px;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 4px;
  background: rgb(240, 240, 240);
  color: black;
}
</style>
