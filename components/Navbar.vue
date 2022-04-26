<template>
  <nav class="w-fit flex justify-center items-center space-x-8 text-white font-medium">
    <nuxt-link :to="{ path: '/',hash:'about-me'}" class="transition duration-500 rounded-xl py-2 px-6 hover:bg-white/70 hover:text-black hover:font-bold" exact-active-class="bg-white/70 text-black font-bold">
      A PROPOS DE MOI
    </nuxt-link>
    <nuxt-link :to="{ path: '/',hash:'skills'}" class="transition duration-500 rounded-xl py-2 px-6 hover:bg-white/70 hover:text-black hover:font-bold" exact-active-class="bg-white/70 text-black font-bold">       COMPETENCES
    </nuxt-link>
    <nuxt-link :to="{ path: '/',hash:'portfolio'}" class="transition duration-500 rounded-xl py-2 px-6 hover:bg-white/70 hover:text-black hover:font-bold" exact-active-class="bg-white/70 text-black font-bold">
      PORTFOLIO
    </nuxt-link>
    <nuxt-link :to="{ path: '/',hash:'contact'}" class="transition duration-500 rounded-xl py-2 px-6 hover:bg-white/70 hover:text-black hover:font-bold" exact-active-class="bg-white/70 text-black font-bold">
      CONTACT
    </nuxt-link>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NavBar',
  props: {
    animation: {
      type: Boolean,
      default: false
    }
  },
  methods: {

  }
})
</script>
