<template>
  <nav class="w-full flex justify-center sm:justify-end items-center space-x-2 xs:space-x-4 sm:space-x-8 text-white font-medium">
    <nuxt-link :to="{ path: '/',hash:'about-me'}" class="text-xs xs:text-base transition duration-500 rounded-xl py-2 px-2 xs:px-4 sm:px-6 hover:bg-white/70 hover:text-black hover:font-bold">
      ABOUT ME
    </nuxt-link>
    <nuxt-link :to="{ path: '/',hash:'skills'}" class="text-xs xs:text-base transition duration-500 rounded-xl py-2 px-2 xs:px-4 sm:px-6 hover:bg-white/70 hover:text-black hover:font-bold">
      SKILLS
    </nuxt-link>
    <nuxt-link :to="{ path: '/',hash:'portfolio'}" class="text-xs xs:text-base transition duration-500 rounded-xl py-2 px-2 xs:px-4 sm:px-6 hover:bg-white/70 hover:text-black hover:font-bold">
      PORTFOLIO
    </nuxt-link>
    <nuxt-link :to="{ path: '/',hash:'contact'}" class="text-xs xs:text-base transition duration-500 rounded-xl py-2 px-2 xs:px-4 sm:px-6 hover:bg-white/70 hover:text-black hover:font-bold">
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
