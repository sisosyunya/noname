
<template>
  <v-app>
    <!-- <div id="nav">
      <router-link to="/">トップ</router-link>|
      <router-link to="/login">ログイン</router-link>|
      <router-link to="/about">アバウト</router-link>|
      <router-link to="/signup">登録画面</router-link>
    </div> -->
      <v-app-bar dark app>
    <v-toolbar-title>About syunya</v-toolbar-title>
        <v-btn router-link to="/">ホーム</v-btn>
    <v-btn router-link to="/login">ログイン</v-btn>
    <v-btn router-link to="/signup">登録</v-btn>
    <v-btn router-link to="/like">趣味</v-btn>
  </v-app-bar>
  <v-main>
    <v-card width="400px"  class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">ログイン</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="mdi-account-circle"
            label="メールアドレス"
            v-model="email"
          />

          <v-text-field
            v-bind:type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="パスワード"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
        <v-card-actions>
          <!-- <vcard width="400px" class="mx-auto mt-5"> -->
          <v-btn class="info" color="accent" elevation="8" @click="dologin">ログイン</v-btn>
          <v-btn class="signup" color="accent"  outlined elevation="8" @click="signup">登録</v-btn>
          <v-btn class="signout" color="black"  outlined elevation="8" @click="signout">サインアウト</v-btn>
          
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-main>
  </v-app>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export default {
  name: "App",

  data: () => {
    return {
      showPassword: false,
      email: "",
      password: "",
    };
  },
  methods: {
    submit() {
      console.log(this.name, this.password);
    },
    async dologin(){
      const auth = getAuth();
      await signInWithEmailAndPassword(auth,this.name,this.password)
        .then(() =>{
          alert("ログイン完了しました");
          this.$router.push("/");
        })
        .catch(function(error){
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        })
    },
    signup(){
      console.log('あああ')
    },
    async signout(){
      const auth = getAuth();
      await signOut(auth)
        .then(() => {
          alert("signout");
        })
        .catch(function(error) {
          //  //失敗の処理
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          alert("ログインに失敗しました");
        });
    }
  },
};
</script>
