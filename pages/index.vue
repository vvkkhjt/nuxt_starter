<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        normal
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
      <nuxt-link to="/about">about</nuxt-link>
      <br>
      <nuxt-link to="/user/15">user</nuxt-link>
    </div>
  </section>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
import AppLogo from "~/components/AppLogo.vue";
export default {
    components: {
        AppLogo
    },
    async asyncData(context) {
        // let params = {}
        // context.$axios.post(params).then(res=>{
        //     console.log(res)
        // })
    },
    methods:{
        ...mapActions({
            saveCurrentUser: "saveCurrentUser"
        }),
    },
    mounted() {
        this.saveCurrentUser({
            user: 'nuxt'
        })
        // let params = {}
        // this.$axios.post('/api/user/loginQWX',params).then(res=>{
        //     console.log(res)
        // })
    }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
