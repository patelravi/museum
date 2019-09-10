<template>
  <div id="defaultPageLayout">
    <!-- <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <!-- <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar> -->

    <!-- <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content> -->
    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <!-- <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer> -->

    <div class="header">
      <div class="edenTitle">
        <b> EDEN</b>
        <div class="searchBox">

          <v-text-field label="Search" single-line outlined></v-text-field>

        </div>

        <div class="rightSide">
          <div class="title">
            For Artists
          </div>&nbsp;
          <div class="title">
            For Art Lover
          </div>&nbsp;
          <div class="title">
            Login
          </div>
          <v-btn outlined color="indigo">Sign Up</v-btn>
        </div>
      </div>

    </div>

    <v-footer class="footer" :fixed="fixed" app>
      <div class="footerTitle">
        <b> EDEN</b>
      </div>
      <div class="footer1">
        <h2> Art web</h2><br>
        About us<br>
        Contact<br>
        Help<br>
        Terms<br>
        Privacy policy<br>

      </div>

      <div class="footer2">
        <h2>For Art Lover</h2>
        <br>
        Popular<br>
        Fresh<br>
      </div>
      <div class="footer2">
        <h2>User Section</h2>
        <br>
        Login<br>
        Sign Up<br>
      </div>
      <div class="footer2">
        <h2>Community</h2>
        <br>
        Art Blog<br>
        Support<br>
      </div>
      <div class="footer2">
        <h2>Follow us</h2>
      </div>
    </v-footer>

  </div>

</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>


<style lang="scss">
#defaultPageLayout {
  // padding-left: 5%;
  // padding-right: 5%;

  // background: red;
  .header {
    margin-top: 40px;
    .edenTitle {
      font-size: 30px;
      .searchBox {
        width: 50%;
        display: inline-block;
        text-align: center;
      }
      .title {
        padding-left: 20px;
        display: inline-block;
        font-size: 20px;
      }
      .rightSide {
        float: right;
        padding-right: 20px;
      }
    }
  }

  .footer {
    align-items: baseline;
    height: 23vh;

    .footerTitle {
      font-size: 50px;
    }
    .footer1 {
      padding-left: 20%;
      display: inline-block;
    }
    .footer2 {
      padding-left: 5%;
      //display: inline-block;
    }
  }
}
</style>
