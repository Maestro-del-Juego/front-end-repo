<template>
  <section>
    <h2>Register</h2>
    <o-field label="Username">
      <o-input value="Kevin Garvey"></o-input>
    </o-field>

    <o-field label="Email" variant="danger" message="This email is invalid">
      <o-input type="email" value="john@" maxlength="30"> </o-input>
    </o-field>

    <o-field label="Password" variant="warning">
      <o-input value="123" type="password" maxlength="30"></o-input>
    </o-field>
    <o-field label="Re-Enter Password" variant="warning">
      <o-input value="123" type="password" maxlength="30"></o-input>
    </o-field>
  </section>
</template>

<script lang="ts">
export default {}
</script>
