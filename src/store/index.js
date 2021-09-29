import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const storeData = {
  state: {
    listTodo: [
      { id: 1, title: "First Work", completed: false },
      { id: 2, title: "Second Work", completed: true },
      { id: 3, title: "Third Work", completed: false },
    ],
    auth: {
      isAuthenticated: false
    }
  },
  getters: {
    listCompletedTodo: state => state.listTodo.filter(todo => todo.completed),
    progress: (state, getters) => Math.round(getters.listCompletedTodo.length / state.listTodo.length * 100),
    styleProgress: (state, getters) => "width: " + getters.progress + "%"
  },
  mutations: {
    TOGGLE_AUTH(state) {
      state.auth.isAuthenticated = !state.auth.isAuthenticated
    },
    MARK_TODO_COMPLETED(state, todoId) {
      state.listTodo.map(todo => {
        if (todo.id === todoId) todo.completed = !todo.completed
        return todo
      })
    }
  }
}

const store = new Vuex.Store(storeData)

export default store
