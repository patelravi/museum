<template>
  <Layout>
    <v-layout column justify-center align-center>

      <!-- <v-card>
          <v-card-title class="headline">
            Welcome to the Vuetify + Nuxt.js template
          </v-card-title>
          <v-card-text>
            <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
            <p>
              For more information on Vuetify, check out the <a href="https://vuetifyjs.com" target="_blank">
                documentation
              </a>.
            </p>
            <p>
              If you have questions, please join the official <a href="https://chat.vuetifyjs.com/" target="_blank" title="chat">
                discord
              </a>.
            </p>
            <p>
              Find a bug? Report it on the github <a href="https://github.com/vuetifyjs/vuetify/issues" target="_blank" title="contribute">
                issue board
              </a>.
            </p>
            <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
            <div class="text-xs-right">
              <em><small>&mdash; John Leider</small></em>
            </div>
            <hr class="my-3">
            <a href="https://nuxtjs.org/" target="_blank">
              Nuxt Documentation
            </a>
            <br>
            <a href="https://github.com/nuxt/nuxt.js" target="_blank">
              Nuxt GitHub
            </a>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" nuxt to="/inspire">
              Continue
            </v-btn>
          </v-card-actions>
        </v-card> -->

      <div id="artListPage">

        <!-- Profile Section -->
        <!-- <div class="profileContainer" v-if="userInfo">
          <div class="editBtn">
            <b-button variant="outline-secondary" size="sm" @click="onEditProfile()">Edit Profile</b-button>
          </div>
          <div class="userName">
            <span v-if="userInfo.userName">{{userInfo.userName}}</span>
            <span v-else>{{userInfo.email}}</span>
          </div>
          <div class="activities">
            <span> 12 posts</span>
            <span> 176 followers</span>
            <span> 180 following</span>
          </div>
          <div class="fullName">
            <span v-if="userInfo.fullName">{{userInfo.fullName}}</span>
            <div class="location" v-if="userInfo.userLocation">
              {{userInfo.userLocation}}
            </div>
          </div>

           <div class="about">
                Experience the world through the eyes of National Geographic photographers.
            </div> 
         
        </div> -->

        <!-- Art List -->

        <div class="row artListContainer" v-if="!fetchingImageList">
          <div class="col-md-4 col-sm-4 col-6 column" v-for="img in imageList" :key="img.id">
            <div class="artContainer" @click="onArtClick(img)" v-bind:style="{'background': 'url(' + img.url + ')'}">
              <!-- <img :src="img.url"> -->
              <div class="artInfo">
                <font-awesome-icon icon="heart" /> 100k
                &nbsp;&nbsp;&nbsp;
                <font-awesome-icon icon="comments" /> 440
              </div>
            </div>
          </div>
        </div>
        <div v-else style="text-align: center; padding-top: 30vh;">
          <b-spinner style="width: 3rem; height: 3rem;" label="Loading..."></b-spinner>
        </div>

      </div>

    </v-layout>
  </Layout>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import Layout from "~/components/layouts/Layout.vue";

const axios = require("axios");
const baseUrl = "https://museum-backend.herokuapp.com/";

export default {
  name: "artList",
  components: {
    Logo,
    VuetifyLogo,
    Layout
  },
  data() {
    return {
      emailId: null,
      imageList: [],
      fetchingImageList: false,
      userInfo: null
    };
  },

  methods: {
    onEditProfile() {
      this.$router.push({
        name: "Profile",
        params: { email: this.userInfo.email }
      });
    },

    getArtAssetUrl(imgId) {
      return require("./../../museum-frontend/assets/art_images/" +
        imgId +
        ".png");
      //    require("./../../assets/art_images/" + imgId + ".png");
    },

    onArtClick(imgObj) {
      // If its static image, show static image
      let intId = imgObj.id;
      if (!isNaN(intId) && intId >= 0 && intId <= 20) {
        this.$router.push({ name: "ArtDetail", params: { id: imgObj.id + 1 } });
      } else {
        this.$router.push({ name: "ArtDetail", params: { id: imgObj.id } });
      }
    },

    async fetchImages() {
      if (this.emailId) {
        // Fetch images
        this.fetchingImageList = true;
        let url = baseUrl + "public/images?email=" + this.emailId;
        axios.get(url).then(result => {
          this.imageList = result.data.images;
          this.fetchingImageList = false;
        });

        // Fetch details of user from email id
        url = encodeURI(baseUrl + "public/user/" + this.emailId);
        let response = await axios.get(url);
        response = response.data.data;
        // this.fetchingData = false;

        if (response == null) {
          // no data found for given email id
          // redirect to default list page
          // this.$router.push({ name: 'ArtList' });
          // this.$router.go()
          location.href = "/";
        } else {
          this.userInfo = response;
        }
      } else {
        for (var i = 0; i < 19; i++) {
          this.imageList.push({
            id: i,
            url: require("./../../museum-frontend/assets/art_images/" +
              (i + 1) +
              ".png")
          });
        }
      }
    }
  },

  created() {
    this.emailId = this.$route.query.email;
    this.fetchImages();
  }
};
</script>



<style lang="scss" src="@/assets/styles/index.scss">
</style>