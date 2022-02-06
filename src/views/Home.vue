
<template>
    <v-app id="inspire">
      <v-system-bar>
        <Header/>
      </v-system-bar>
      <v-main>
        <carousel/>
      </v-main>

<snackbar/>
    </v-app>
</template>

<script>
// import Sidenavi from "../components/Sidenavi.vue";
import Header from "../components/Header.vue";
import Carousel from "../components/Carousel.vue";
import Snackbar from "../components/Snackbar.vue"
export default {
  components: {
    // Sidenavi,
    Header,
    Carousel,
    Snackbar
  },
};
</script>

<style scoped>
.aaa {
  height: 10%;
  width: 10%;
}
.side {
  height: 500px;
}
</style>