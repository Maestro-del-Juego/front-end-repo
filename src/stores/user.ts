import { computed, reactive } from 'vue'
import axios from 'axios'

const state = reactive({
  username: '',
  auth_token: '',
  error: '',
  loggedIn: false
})

const getters = reactive({
  isLoggedIn: computed(() => state.username !== '')
})

const checkUser = () => {
  if (localStorage.name) {
    state.username = localStorage.name
    state.loggedIn = true
  }
}

const login = (username: string, password: string) => {
  console.log(username)
  console.log(password)
  axios
    .post('https://maestrodeljuego.herokuapp.com/auth/token/login/', {
      username: username,
      password: password
    })
    .then((data) => {
      console.log(data)
      if (data && data.data.auth_token) {
        login(username, password)
        state.auth_token = data.data.auth_token
        console.log(state.auth_token)
        state.username = username
        localStorage.name = username
        localStorage.auth_token = data.data.auth_token
      }
    })
    .catch((error) => {
      state.error = error.message
    })
}

const register = (username: string, password: string, rePassword: string) => {
  if (password === rePassword) {
    axios
      .post('https://maestrodeljuego.herokuapp.com/auth/users/', {
        username: username,
        password: password,
        re_password: rePassword
      })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        state.error = error.message
      })

    axios
      .post('https://maestrodeljuego.herokuapp.com/auth/token/login/', {
        username: username,
        password: password
      })
      .then((data) => {
        console.log(data)
        if (data && data.data.auth_token) {
          login(username, password)
          state.auth_token = data.data.auth_token
        }
      })
      .catch((error) => {
        state.error = error.message
      })
  } else {
    state.error = 'Password and Re-typed Password do not match!'
  }
}

const logout = () => {
  console.log('Logging out...')
  state.loggedIn = false
  state.username = ''
  axios
    .post(
      'https://maestrodeljuego.herokuapp.com/auth/token/logout/',
      {},
      {
        headers: {
          Authorization: `Token ${state.auth_token}`
        }
      }
    )
    .then((res) => {
      console.log(res)
      localStorage.clear()
    })
    .catch((error) => {
      state.error = error.message
    })
}

export default { state, getters, checkUser, login, register, logout }
