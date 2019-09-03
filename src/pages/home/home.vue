<template>
  <q-layout id="app" view="lHh Lpr fff">

    <!-- <div class="text-h4">
      EDEN
    </div>

    <q-input class="GPL__toolbar-input" anchor="top right" self="top right" dense standout="bg-primary" v-model="search"
      placeholder="Search">
      <template v-slot:prepend>
        <q-icon v-if="search === ''" name="search" />
        <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
      </template>
    </q-input>
    <q-input outlined v-model="text" label="search" />

    <q-btn v-if="$q.screen.gt.xs" flat dense no-wrap color="primary" no-caps label="" class="q-ml-sm q-px-md">
      <q-menu anchor="top right" self="top right">
        <q-list class="text-grey-8" style="min-width: 100px">
          <q-item aria-hidden="true">
            <q-item-section class=" text-gray-7" style="font-size: 18px">For Arties</q-item-section>
            <q-item-section class=" text-grey-7" style="font-size: 18px">For Art Lovers</q-item-section>
          </q-item>

        </q-list>
      </q-menu>
    </q-btn>

    <q-btn flat style="color:#262223;" label="Login" class="q-ml-sm q-px-md" />
    <q-btn color="white" text-color="black" label="Sign up" class="q-ml-sm q-px-md" />

    <div class="q-ml-sm q-px-md">

      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-full text-h3    flex flex-center" style=" color:black;">
          Your Art Online
        </div>
        <div class="absolute-full text-h6 flex flex-center" style=" color:#dfb458; padding-top:60px">
          Hundreds of high resolution paintings added regularly
        </div>
      </q-img>

      <div class="absolute-full text-h2  flex flex-center text-center" style=" color:black; margin-top:400px;">
        Browser original art from new artists every week
      </div> -->
    <!-- <div class="absolute-full text-h6 flex flex-center" style=" color:#dfb458; padding-top:440px">
        Hundreds of high resolution paintings added regularly
      </div> -->

    <!-- <q-btn flat style="color:#262223;" label="Filter" class="q-ml-sm q-px-md flex flex-center" />
    <q-btn color="white" text-color="black" label="Popular" class="q-ml-sm q-px-md" />
    <q-btn flat label="Fresh" class="q-ml-sm q-px-md" /> -->

    <!-- </div> -->

  </q-layout>

</template>

<style>
</style>

<script>
  export default {
    name: "edenGallery",
    data() {
      return {
        leftDrawerOpen: false,
        search: "",
        storage: 0.26
      };
    }
    //   components: ["QImg"]
  };
</script>
<style lang="stylus">
  .GPL {
    &__toolbar {
      height: 64px;
      border: 1px solid red;
    }

    &__toolbar-input {
      width: 35%;
      border: 1px solid red;
    }
  }

  .YL {
    &__toolbar-input-container {
      min-width: 100px;
      width: 55%;
    }

    &__toolbar-input-btn {
      border-radius: 0;
      border-style: solid;
      border-width: 1px 1px 1px 0;
      border-color: rgba(0, 0, 0, 0.24);
      max-width: 60px;
      width: 100%;
    }

    &__drawer-footer-link {
      color: inherit;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.75rem;

      &:hover {
        color: #000;
      }
    }
  }
</style>