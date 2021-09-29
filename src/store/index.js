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
}

const store = new Vuex.Store(storeData)

export default store
