<template>
  <form>
    <h2>Register</h2>
    <o-field label="User E-mail">
      <o-input
        placeholder="Email"
        v-model="email"
        type="email"
        icon="envelope"
        icon-right="times-circle"
        required
      >
      </o-input>
    </o-field>
    <o-field label="Password" variant="warning">
      <o-input value="123" type="password" maxlength="30"></o-input>
    </o-field>
    <o-field label="Re-Enter Password" variant="warning">
      <o-input value="123" type="password" maxlength="30"></o-input>
    </o-field>
    <o-button type="submit">Submit</o-button>
  </form>
</template>

<script lang="ts">
export default {}
</script>
