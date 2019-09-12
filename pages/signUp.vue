<template>
  <div id="signUpPage">

    <!-- Left Side -->
    <div class="leftSide">
      <div class="edenTitle">
        <h1>EDEN</h1>
      </div>
      <div class="createTitle">
        Create your accout now
      </div>

      <div class="inputDetail">
        <!-- Email input -->
        <v-text-field class="inputFeild" label="Email" single-line outlined></v-text-field>
        <!-- Name input -->
        <v-text-field class="inputFeild" label="Full name" single-line outlined></v-text-field>
        <!-- Password input -->
        <v-text-field class="inputFeild" v-model="password" :append-icon="show1 ? 'visibility' : ''" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" @click:append="show1 = !show1" single-line outlined></v-text-field>

      </div>

      <div class="createBtn">
        <v-btn x-large color="blue" dark>Create your Account</v-btn>
      </div>
      <div class="loginOption">
        Alaready have account?<a href="/">SignUp</a> </div>
    </div>

    <!-- Right Side -->
    <div class="rightSide">
      <div class="imageOfRightSide">
        <img class="mainImage" src="~/assets/art_images/signUp1.jpg" style="width: 100%;height: 135vh;">
        <div class="headLine"><b>Sell your work</b></div>
        <div class="headLine1"><b>directly on Eden</b></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      show1: false,
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

<style lang="scss" src="@/assets/styles/signUp.scss">
</style>