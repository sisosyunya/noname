
<template>
    <v-app>
        <div id="nav">
            <router-link to="/">トップ</router-link>|
            <router-link to="/login">ログイン</router-link>|
            <router-link to="/about">アバウト</router-link>|
        </div>

    <v-card width="400px" class="mx-auto mt-5">
        <v-card-title>
            <h1 class="display-1">新規登録</h1>
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field
                    prepend-icon="mdi-account-circle"
                    label="メールアドレス"
                    v-model="email"
                    type="email"
                />
            <v-text-field
                v-bind:type="showPassword ? 'text' : 'password'"
                prepend-icon="mdi-lock"
                v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                label="パスワード"
                v-model="password"
                @click:append="showPassword = !showPassword"
            />
            </v-form>
            <v-card-actions>
                <v-btn class="info" color="accent" elevation="8" v-on:click="signup">登録</v-btn>
            </v-card-actions>
        </v-card-text>
    </v-card>
    <!-- <v-row justify="center">
        <v-date-picker v-model="picker"></v-date-picker>
    </v-row> -->
    </v-app>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  data: () => ({
    auth: getAuth(),
    email:"",
    password:"",
    showPassword:false
  }),
  methods: {
    async signup() {
      await createUserWithEmailAndPassword(this.auth, this.email, this.password)
        .then(() => {
          alert("登録完了");
          this.$router.push("/");
          console.log(this.password)
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          alert("登録できませんでした");
          console.log(this.password)
        });
    },
  },
};
</script>