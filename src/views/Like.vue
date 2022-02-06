
<template>
  <v-app>
    <v-app-bar dark app>
      <v-toolbar-title>About syunya</v-toolbar-title>
      <v-btn router-link to="/">ホーム</v-btn>
      <v-btn router-link to="/login">ログイン</v-btn>
      <v-btn router-link to="/signup">登録</v-btn>
      <v-btn router-link to="/like">趣味</v-btn>
    </v-app-bar>
    <v-main>
      <v-content>
        <v-card class="d-inline-flex pa-2 flex-row ml-8 mr-8" max-width="600" max-height="500">
          <v-card-title class="pink darken-4">好きな飲み物</v-card-title>
          <v-card-text>カルピス</v-card-text>
        </v-card>

        <v-card class="d-inline-flex pa-2 flex-row " max-width="200" max-height="500">
          <v-card-title class="green">好きな都道府県</v-card-title>
          <v-card-text>大阪</v-card-text>
        </v-card>

        <v-card> </v-card>
        <v-card> </v-card>
        <v-card> </v-card>
        <v-card> </v-card>
        <v-card> </v-card>
      </v-content>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
</style>