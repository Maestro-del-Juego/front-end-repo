import { computed, reactive } from 'vue'
import axios from 'axios'

const state = reactive({
  username: '',
  password: '',
  rePassword: '',
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
      }
      localStorage.name = username
    })
    .catch((error) => alert(error.message))
}

const register = (username: string, password: string, rePassword: string) => {
  if (password === rePassword) {
    axios.post('https://maestrodeljuego.herokuapp.com/auth/users/', {
      username: username,
      password: password,
      re_password: rePassword
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
      .catch((error) => alert(error.message))
  } else {
    alert('Password and Re-typed Password do not match!')
  }
}

const logout = () => {
  console.log('Logging out...')
  state.loggedIn = false
  state.username = ''
  state.password = ''
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
      localStorage.name = null
    })
}

export default { state, getters, checkUser, login, register, logout }
