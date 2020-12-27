import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
export default new Vuex.Store({
 state: {
   anime:[],
   manga:[],
   newTodo: ''
 },
 mutations: {
   GET_TODO(state, todo){
     state.anime = todo
   }
  /*  ADD_TODO(state){
     state.todos.push({
       body: state.newTodo,
       completed: false
     })
   },
   EDIT_TODO(state, todo){
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
      state.todos = todos
      state.newTodo = todo.body
   },
   REMOVE_TODO(state, todo){
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
   },
   COMPLETE_TODO(state, todo){
     todo.completed = !todo.completed
   },
   CLEAR_TODO(state){
     state.newTodo = ''
   } */
  },
 actions: {
   getTodo({commit}, todo){
     commit('GET_TODO', todo)
   }
 /*   addTodo({commit}){
     commit('ADD_TODO')
   },
   editTodo({commit}, todo){
     commit('EDIT_TODO', todo)
   },
   removeTodo({commit}, todo){
     commit('REMOVE_TODO', todo)
   },
   completeTodo({commit}, todo){
    commit('COMPLETE_TODO', todo)
   },
   clearTodo({commit}){
     commit('CLEAR_TODO')
   } */
}

});
/* import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";
import firebase from "@/firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    apiUrl: "https://api.edamam.com/search",
    user: null,
    userRecipes: [],
    isAuthenticated: false
  },

  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    }
  },

  mutations: {
    setRecipes(state, payload) {
      state.recipes = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    setUserRecipes(state, payload) {
      state.userRecipes = payload;
    }
  },

  actions: {
    userJoin({ commit }, { email, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user);
          commit("setIsAuthenticated", true);
          router.push("/about");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    userLogin({ commit }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user);
          commit("setIsAuthenticated", true);
          router.push("/about");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    userLogout({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    addRecipe({ state }, payload) {
      firebase
        .database()
        .ref("users")
        .child(state.user.user.uid)
        .push(payload.label);
    },
    getUserRecipes({ state, commit }) {
      return firebase
        .database()
        .ref(`users/${state.user.user.uid}`)
        .once("value", snapshot => {
          commit("setUserRecipes", snapshot.val());
        });
    },
    async getRecipes({ state, commit }, plan) {
      try {
        const response = await axios.get(`${state.apiUrl}`, {
          params: {
            q: plan,
            app_id: "48310613",
            app_key: "320511544dcb1cca4c2c66bb0ec79cac",
            from: 0,
            to: 9
          }
        });
        commit("setRecipes", response.data.hits);
      } catch (err) {
        commit("setRecipes", []);
        alert(err.message);
      }
    }
  }
}); */