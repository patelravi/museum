<template>
  <div id="loginPagePage">

    <div class="logIn">

      <img class="mainImage" src="~/assets/art_images/musem.jpg" style="width: 100%;height: 120vh;">
      <div class="headLine1">EDEN</div>
      <div class="headLine2"> Welcome back!</div>

      <div class="inputDetail">
        <!-- Email input -->
        <v-text-field class="inputFeild" label="Email" single-line outlined></v-text-field>
        <!-- Password input -->
        <v-text-field class="inputFeild" v-model="password" :append-icon="show1 ? 'visibility' : ''" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" @click:append="show1 = !show1" single-line outlined></v-text-field>

      </div>
      <div class="checkBox">
        <v-checkbox v-model="checkbox1" :label="`Remember me`"></v-checkbox>
      </div>
      <div class="forgotPassword">
        forgot your password?
      </div>
      <div class="createBtn">
        <v-btn x-large color="blue" dark>Create your Account</v-btn>
      </div>
      <div class="loginOption">
        Don't have account?<a href="/">SignUp</a>
      </div>
    </div>

  </div>

</template>


<script>
export default {
  data() {
    return {
      show1: false,
      checkbox1: true,
      password: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      }
    };
  }
};
</script>


<style lang="scss"  src="@/assets/styles/Login.scss">
</style>