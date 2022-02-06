<template>
    <v-carousel class="main" cycle>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
      </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
  data:()=> {
    return {
      items: [
        {
          src:require("../assets/kawaii.jpg"),
        },
        {
          src: require("../assets/kirei.jpg"),
        },
        {
          src:require("../assets/logo.png")
        },
        {
          src: require('../assets/kirei.jpg'),
        },
        {
          src: require("../assets/osyare.jpg"),
        },
        {
          src: "../img/sunobo.jpg",
        },
      ]
    }
  }
}
</script>

<style>

</style>