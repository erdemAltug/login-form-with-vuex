<template>
<div>
  <v-card class="mx-auto overflow-hidden" height="100%">
    <v-app-bar color="red" dark>
      <p v-if="$i18n.locale == 'en'"> EN</p>
      <p v-if="$i18n.locale == 'tr'"> TR</p>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Altug Erdem</v-toolbar-title>
      <v-divider></v-divider>
      <v-toolbar-title>{{ $t('pageNameContact') }}</v-toolbar-title>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-btn v-model="english" @click="$i18n.locale = 'en'">
          <v-list-item-avatar>
            <v-img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content style="margin: 1px">
            <v-list-item-title>EN</v-list-item-title>
          </v-list-item-content>
        </v-btn>

        <v-btn @click="$i18n.locale = 'tr'; this.english == true">
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
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-card style="margin: auto; padding: auto" height="100%">
      <v-card-title class="text-h5 grey lighten-2 center justify-center">
        Contact Us
      </v-card-title>

      <div style="margin: auto; padding: auto; width: 50%; margin-top: 1%">
        <v-text-field v-model="title" label="Title"></v-text-field>
        <v-text-field v-model="userName" label="Name"></v-text-field>
        <v-text-field :rules="emailRules" v-model="email" label="Email"></v-text-field>
        <v-text-field v-model="password" label="Password"></v-text-field>
        <v-text-field  :rules="phoneRules" v-model="phoneNumber" label="Phone Number"></v-text-field>
        <v-select :items="items" v-model="country" filled label="Countries"></v-select>
        <v-textarea v-model="textArea" filled name="input-7-4" label="Textarea" value="Text"></v-textarea>
        <v-divider></v-divider>
        <v-btn @click="sendContactInfos" style="margin-bottom: 2%; " color="success">Send</v-btn>
      </div>
    </v-card>

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
  mapActions,
  mapState
} from "vuex";
export default {
  name: "contact",

  data: () => ({
     emailRules: [ 
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
       phoneRules: [ 
        v => /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(v) || 'Phonenumber must be valid'
      ],
    items: ['Turkey', 'United States Of America', 'United Kingdom', 'Germany', 'Sweden', 'Kenya', 'Brazil', 'Zimbabwe'],
    phoneNumber: "",
    pageName: "Contact",
    country: "",
    textArea: "",
    alert: false,
    loginModal: false,
    userInfo: false,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    drawer: false,
    group: null,
  }),
  computed: {
    ...mapState(["title", "userName", "email", "password"]),
  },

  methods: {
    ...mapActions([
      "setTitle",
      "setuserName",
      "setEmail",
      "setPassword",
    ]),

    sendContactInfos() {
      const params = {
        title: this.title,
        email: this.email,
        username: this.userName,
        password: this.password,
        phone: this.phoneNumber,
        country: this.country,
        text: this.textArea,
      };
      console.log("post", params)
    }
  },
};
</script>
