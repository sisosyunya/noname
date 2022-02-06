
<template>
  <div>
    <v-app id="inspire">
      <v-card>
        <v-navigation-drawer dark permanent expand-on-hover>
          <v-list>
            <v-list-item class="aaa">
              <!-- 顔画像 -->
              <!-- <v-list-item-avater>
                <v-img src="../assets/kirei.jpg"> </v-img>
              </v-list-item-avater> -->
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="text-h6"> Name </v-list-item-title>
                <v-list-item-subtitle>mailaddress</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>
          <v-list nav dense>
            <v-list-item link>
              <v-list-item-icon>
                <!-- アイコン -->
                <v-icon>mdi-folder</v-icon>
              </v-list-item-icon>
              <v-list-item-title>My files</v-list-item-title>
            </v-list-item>

            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Shared with me</v-list-item-title>
            </v-list-item>

            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-star</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Starred</v-list-item-title>
            </v-list-item>

          </v-list>

        </v-navigation-drawer>

      </v-card>
      <v-app-bar color="yellow" app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>About syunya</v-toolbar-title>
      </v-app-bar>
      <v-main>
        <!-- <div class="aaaa" id="nav">
      <router-link to="/">トップ</router-link>|
      <router-link to="/about">アバウト</router-link>
      <router-link to="/login">ログイン</router-link>
  </div> -->
        <v-card max-width="400" class="mx-auto my-auto" hover>
          <v-carousel>
            <v-carousel-item
              v-for="(slide, i) in items"
              :key="i"
              src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "..//assets/kawaii.jpg",
        },
        {
          src: "..//assets/kirei.jpg",
        },
        {
          src: "..//assets/ohagi.jpg",
        },
        {
          src: "..//assets/osyare.jpg",
        },
        {
          src: "..//assets/sunobo.jpg",
        },
      ],
    };
  },
};
</script>
<style scoped>
/* .aaa{
  height: 10%;
  width: 10%;
} */
</style>
