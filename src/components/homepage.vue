<template>
<div>
  <v-card height="100%" class="mx-auto overflow-hidden">
    <v-app-bar color="red" dark>
      <p v-if="$i18n.locale == 'en'"> EN</p>
      <p v-if="$i18n.locale == 'tr'"> TR</p>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Altug Erdem</v-toolbar-title>
      <v-divider></v-divider>
      <v-toolbar-title>{{ $t('pageName') }}</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-btn @click="$i18n.locale = 'en'">
          <v-list-item-avatar>
            <v-img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content style="margin: 1px">
            <v-list-item-title>EN</v-list-item-title>
          </v-list-item-content>
        </v-btn>

        <v-btn @click="$i18n.locale = 'tr'">
          <v-list-item-avatar>
            <v-img src="https://cdn.britannica.com/82/4782-004-4119489D/Flag-Turkey.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content style="margin: 1px">
            <v-list-item-title>TR</v-list-item-title>
          </v-list-item-content>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item to="/home">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t('titles') }}</v-list-item-title>
          </v-list-item>

          <v-list-item to="/contact">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t('contactUs') }}</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="title" @click="openUserInfo">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t('userInfo') }}</v-list-item-title>
          </v-list-item>

          <v-list-item @click="openLoginModal">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t('loginModal') }}</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-row class="row">
      <h2>Title</h2>
      <p>{{ $t('message') }}</p>
    </v-row>

    <v-row class="row">
      <h2>Title</h2>
      <p>{{ $t('message') }}</p>
    </v-row>

    <v-row class="row">
      <h2>Title</h2>
      <p>{{ $t('message') }}</p>
    </v-row>

    <v-row class="row">
      <h2>Title</h2>
      <p>{{ $t('message') }}</p>
    </v-row>

    <div class="text-center">
      <v-dialog v-model="loginModal" width="500">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Login Informations
          </v-card-title>
          <div style="margin: 5%; padding: 5%">
            <v-text-field v-model="title" label="Title"></v-text-field>
            <v-text-field v-model="userName" label="Name"></v-text-field>
            <v-text-field v-model="email" label="Email"></v-text-field>
            <v-text-field v-model="password" label="Password"></v-text-field>
          </div>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="primary" text @click="submitForm">
              Submit
            </v-btn>
            <v-btn color="error" text @click="loginModal = false">
              Close
            </v-btn>
          </v-card-actions>
          <v-alert :value="alert" color="pink" dark border="top" icon="mdi-home" transition="scale-transition">
            Successfully logged in
          </v-alert>
        </v-card>
      </v-dialog>
    </div>

    <div class="text-center">
      <v-dialog v-model="userInfo" width="500">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            User Informations
          </v-card-title>

          <v-card-content>
            <v-row><span>Title: {{title}} </span></v-row>
            <v-row><span>Username : {{userName}} </span></v-row>
            <v-row> <span>Email : {{email}} </span></v-row>
            <v-row> <span> Password : {{password}} </span></v-row>

          </v-card-content>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="deleteUser">
              Log Out
            </v-btn>
            <v-btn color="error" text @click="userInfo = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-footer dark padless>
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          {{ $t('footerMessage') }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Altug Erdem</strong>
        </v-card-text>
      </v-card>
    </v-footer>

  </v-card>

</div>
</template>

<script>
import {
  mapActions

} from "vuex";
export default {

  data: () => ({
    alert: false,
    pageName: "Home",
    title: "",
    userName: "",
    password: "",
    email: "",
    loginModal: false,
    userInfo: false,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    drawer: false,
    group: null,
  }),

  computed: {
    // ...mapState(["title", "userName", "email", "password"]),
    getHeight() {
      return this.$vuetify.breakpoint.xs ? 450 : '250' || this.$vuetify.breakpoint.sm ? 750 : '500' || this.$vuetify.breakpoint.md ? 750 : '750' || this.$vuetify.breakpoint.lg ? 900 : '1000' || this.$vuetify.breakpoint.xl ? 1200 : '1250';
    },
  },

  methods: {
    ...mapActions([
      "setTitle",
      "setuserName",
      "setEmail",
      "setPassword",
    ]),

    submitForm() {
      this.loginModal = false;
      //    let params = {
      //   title: this.title,
      //   userName: this.userName,
      //   password: this.password,
      //   email: this.email,
      // };
      this.alert = true;

      this.setTitle(this.title)
      this.setuserName(this.userName);
      this.setEmail(this.email);
      this.setPassword(this.password);

    },
    deleteUser() {
      this.userInfo = false;

      this.title = ""
      this.userName = ""
      this.email = ""
      this.password = ""

    },

    openLoginModal() {
      this.loginModal = true;
    },

    openUserInfo() {
      this.userInfo = true;
    }
  },
};
</script>

<style scoped>
.row {
  margin: 1%;
  padding: 1%;
  float: 1%;
  overflow-y: auto;
}
</style>
