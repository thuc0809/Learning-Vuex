<template>
  <div id="app">
    <navbar/>
    <todo/>
    <status-bar/>
    <progress-bar/>
  </div>
</template>

<script>
import Todo from "./components/Todo.vue"
import Navbar from "./components/Navbar.vue"
import StatusBar from "./components/StatusBar.vue"
import ProgressBar from "./components/ProgressBar.vue"

export default {
  name: 'App',
  components: {Todo, Navbar, StatusBar, ProgressBar},
}
</script>

<style>
#app {
  padding-top: 5px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(219, 219, 219);
  margin: 20px auto;
  width: 90%;
  max-width: 800px;
}
</style>
