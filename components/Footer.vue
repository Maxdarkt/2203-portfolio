<template>
  <section id="footer" class="bg-black/95 p-4">
  <div id="contenair-footer" class="flex flex-col justify-center items-center text-white transition duration-700 translate-y-10 opacity-0">
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
        <img src="~/assets/images/socialNetworks/mail_white.png" alt="logo mail">
      </a>
      <a href="https://github.com/Maxdarkt" target="_blank" class="transition duration-500 hover:rotate-[360deg]">
        <img src="~/assets/images/socialNetworks/github_white.png" alt="logo github">
      </a>
      <a href="https://www.linkedin.com/in/tourneux-maxence-6024615a/" target="_blank" class="transition duration-500 hover:rotate-[360deg]">
        <img src="~/assets/images/socialNetworks/linkedin_white.png" alt="logo linkedin">
      </a>
    </p>
    <p class="text-xs text-center">
      <strong>&#169;2022 Tourneux Maxence</strong> All Rights Reserved
    </p>
  </div>
  </section>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer',
  mounted() {
    this.displayFooter()
  },
  methods: {
    scrollTop(): void {
      this.$emit('event-scroll-to', 0)
    },
        // launch Event Listerner
    displayFooter(): void {
      // we listen scroll event
      window.addEventListener('scroll', this.addScrollListenerFooter)
    },
    // callback
    addScrollListenerFooter(): void {
      // we get Footer element
      const FooterElement = document.getElementById('contenair-footer') as HTMLElement

      const {scrollTop, clientHeight} = document.documentElement as HTMLElement

      const topFooterElementOneToTopViewport: number = FooterElement.getBoundingClientRect().top

      // Launch animation
      if(scrollTop > (scrollTop + topFooterElementOneToTopViewport) - clientHeight * 1) {
        FooterElement.classList.remove('translate-y-10')
        FooterElement.classList.remove('opacity-0')
        this.removeScrollListenerFooter()
      }
    },
    // stop Event Listener
    removeScrollListenerFooter(): void {
      window.removeEventListener("scroll", this.addScrollListenerFooter)
    }
  }
})
</script>
