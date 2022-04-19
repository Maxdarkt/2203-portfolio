<template>
  <div id="about-me" class="bg-black/95 flex flex-col justify-center items-center text-white pt-4">
  <div class="transition duration-500 hover:-translate-y-2 cursor-pointer" @click="scrollTop">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 -mt-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  </div>
    <p class="text-lg md:text-xl font-bold text-center">
        Back to top 
    </p>
    <p class="flex space-x-4 my-4">
      <a href="mailto:Maxdev74@gmail.com" class="transition duration-500 hover:rotate-[360deg]">
        <img src="~/assets/images/mail_white.png" alt="logo mail">
      </a>
      <a href="https://github.com/Maxdarkt" target="_blank" class="transition duration-500 hover:rotate-[360deg]">
        <img src="~/assets/images/github_white.png" alt="logo github">
      </a>
      <a href="https://www.linkedin.com/in/tourneux-maxence-6024615a/" target="_blank" class="transition duration-500 hover:rotate-[360deg]">
        <img src="~/assets/images/linkedin_white.png" alt="logo linkedin">
      </a>
    </p>
    <p class="text-xs text-center pb-4">
      <strong>&#169;2022 Tourneux Maxence</strong> All Rights Reserved
    </p>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer',
  methods: {
    scrollTop(): void {
      this.$emit('event-scroll-to', 0)
    }
  }
})
</script>
