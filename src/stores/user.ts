import { computed, reactive } from 'vue'
import axios from 'axios'

const state = reactive({
  name: '',
  username: '',
  password: '',
  error: ''
})

const getters = reactive({
  isLoggedIn: computed(() => state.username !== '')
})

const checkUser = () => {
  if (localStorage.name) state.name = localStorage.name
}

// const login = () => {
//   axios.
// }

// const register = () => {
//   axios.
// }

// const logout = () => {
//   axios.
// }

export default { state, getters, checkUser }

// login, register, logout}
