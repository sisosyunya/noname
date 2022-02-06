<template>
<!-- <v-card> -->
  <v-navigation-drawer dark permanent expand-on-hover>
    <v-list class="side">
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

      <v-list-item link to="login">
        <v-list-item-icon>
          <v-icon>mdi-account-multiple</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Login</v-list-item-title>
      </v-list-item>

      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-star</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Starred</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
<!-- </v-card> -->
</template>
<style scoped>
/* .mini-variant-width{
    width: 100px;
} */
</style>