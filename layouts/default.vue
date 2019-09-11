<template>
  <v-app id="defaultPageLayout">
    <!-- <Layout> -->
    <Nuxt />
    <!-- </Layout> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>


<style lang="scss">
#defaultPageLayout {
  .v-application {
    background: white;
    //color: #ffffff;
  }

  @font-face {
    font-family: "roboto";
    src: url("/roboto/Roboto-Black.ttf");
    src: url("/roboto/Roboto-BlackItalic.ttf");
    src: url("/roboto/Roboto-Bold.ttf");
    src: url("/roboto/Roboto-BoldItalic.ttf");
    src: url("/roboto/Roboto-Light.ttf");
    src: url("/roboto/Roboto-LightItalic.ttf");
    src: url("/roboto/Roboto-Medium.ttf");
    src: url("/roboto/Roboto-MediumItalic.ttf");
    src: url("/roboto/Roboto-Regular.ttf");
    src: url("/roboto/Roboto-RegularItalic.ttf");
    src: url("/roboto/Roboto-ThinItalic.ttf");
    src: url("/roboto/Roboto-Thin.ttf");
  }

  // .header {
  //   margin-top: 40px;
  //   .edenTitle {
  //     font-size: 30px;
  //     .searchBox {
  //       width: 50%;
  //       display: inline-block;
  //       text-align: center;
  //     }
  //     .title {
  //       padding-left: 20px;
  //       display: inline-block;
  //       font-size: 20px;
  //     }
  //     .rightSide {
  //       float: right;
  //       padding-right: 20px;
  //     }
  //   }
  // }

  //   .footer {
  //     align-items: baseline;
  //     height: 30vh;

  //     .footerTitle {
  //       font-size: 50px;
  //     }
  //     .footer1 {
  //       padding-left: 20%;
  //       display: inline-block;
  //     }
  //     .footer2 {
  //       padding-left: 5%;
  //       //display: inline-block;
  //     }
  //   }
}
</style>
