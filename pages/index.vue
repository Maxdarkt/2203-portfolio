<template>
  <div class="overflow-hidden">
    <HomeBanner class="fixed top-0 left-0 z-0" @event-scroll-to="scrollTo"/>
    <div class="relative w-screen h-screen -z-10"></div>
    <AboutMe class="relative z-10"/>
    <Skills class="relative z-10"/>
    <Portfolio class="relative z-10"/>
    <Footer class="relative z-10" @event-scroll-to="scrollTo"/>
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
    }
  },
  methods: {
    scrollTo(height: number): void {
      window.scrollTo({ 
          top: height,
          behavior: 'smooth'
        })
    }
  }
})
</script>
