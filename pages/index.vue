<template>
  <div class="overflow-hidden">
    <HomeBanner v-if="loaded" class="fixed top-0 left-0 z-0" :animation="animation" @event-scroll-to="scrollTo"/>
    <div class="relative w-screen h-screen -z-10" :animation="animation"></div>
    <AboutMe v-if="loaded" class="relative z-10" :animation="animation"/>
    <Skills v-if="loaded" class="relative z-10" :animation="animation"/>
    <Portfolio v-if="loaded" class="relative z-10" :animation="animation"/>
    <Contact v-if="loaded" class="relative z-10" :animation="animation"/>
    <Footer class="relative z-10" @event-scroll-to="scrollTo"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Index',
  data() {
    return {
      loaded: false,
      animation: false,
    }
  },
  head: {
    title: 'Tourneux Maxence'
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
