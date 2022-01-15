<template>
  <form @submit="onSubmit">
    <h2>Register</h2>
    <div class="form-group my-2">
      <label>Username</label>
      <input
        v-model="form.username"
        class="form-control"
        placeholder="Username"
        required
      />
    </div>
    <div class="form-group my-2">
      <label>Password</label>
      <input
        v-model="form.password"
        class="form-control"
        type="password"
        placeholder="Password"
        required
      />
    </div>
    <div class="form-group my-2">
      <label>Re-type Password</label>
      <input
        v-model="form.rePassword"
        class="form-control"
        type="password"
        placeholder="Re-type Password"
        required
      />
    </div>
    <div class="text-danger my-2">{{ userStore.state.error }}</div>
    <button class="btn btn-success btn-block my-2" type="submit">Register</button>
  </form>
</template>

<style>
form {
  align-items: center;
  margin: auto;
  width: 800px;
}
</style>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import userStore from '@/stores/user'
export default defineComponent({
  setup () {
    const form = reactive({
      username: '',
      password: '',
      rePassword: ''
    })
    const onSubmit = () => {
      userStore.register(form.username, form.password, form.rePassword)
      form.username = ''
      form.password = ''
      form.rePassword = ''
    }
    return { form, userStore, onSubmit }
  }
})
</script>
