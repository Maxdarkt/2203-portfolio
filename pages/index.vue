<template>
  <div class="overflow-hidden">
    <HomeBanner class="fixed top-0 left-0 z-0" @event-scroll-to="scrollTo" :animation="animation"/>
    <div class="relative w-screen h-screen -z-10" :animation="animation"></div>
    <AboutMe class="relative z-10" :animation="animation"/>
    <Skills class="relative z-10" :animation="animation"/>
    <Portfolio class="relative z-10" :animation="animation"/>
    <Contact class="relative z-10" :animation="animation"/>
    <Footer class="relative z-10" :animation="animation" @event-scroll-to="scrollTo"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'index',
  head: {
    title: 'Tourneux Maxence'
  },
  data() {
    return {
      loaded: false,
      animation: false,
    }
  },
  mounted() {
    this.activateAnimation()
  },
  methods: {
    scrollTo(height: number): void {
      window.scrollTo({ 
          top: height,
          behavior: 'smooth'
        })
    },
    getWidthScreen(): boolean {
      if(window.innerWidth > 350) {
        return true
      }
      return false
    },
    async activateAnimation(): Promise<void> {
      this.animation = await this.getWidthScreen()
      this.loaded = true
    }
  }
})
</script>
