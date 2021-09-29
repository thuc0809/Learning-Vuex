<template>
  <div class="navbar">
    <h1>My Vuex App Todo</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li v-if="auth.isAuthenticated">
        Total Todo: {{ totalTodo }}
        <button @click="TOGGLE_AUTH">Logout</button>
      </li>
      <li v-else>
        <button @click="TOGGLE_AUTH">Login</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Navbar",
  computed: {
    totalTodo() {
      return this.$store.state.listTodo.length;
    },
    ...mapState(["auth"]),
  },
  methods: {
    ...mapMutations(["TOGGLE_AUTH"])
  },
};
</script>

<style>
.navbar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}

.navbar ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
}
</style>
