<template>
  <section id="portfolio" class="bg-[#E5E5E5] p-4">
    <h2 class="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-black text-center">
        Portfolio
    </h2>
    <div class="border-b-4 border-black w-[35%] mx-auto mt-4 xs:mt-8 mb-8 xs:mb-16"></div>
    <!-- contenair-portfolio -->
    <div id="contenair-portfolio" class="grid grid-cols-12 items-center lg:max-w-5xl mx-auto mt-8 transition duration-500 filter" :class="{'display-animation-b-r' : animation, 'opacity-0' : !animation}">
      <!-- portfolio head -->
      <div class="col-span-12 bg-black/90 h-10 rounded-t-md flex justify-center items-center">
        <span class="bg-white/40 h-3 w-[95%] rounded-md shadow-inner">
        </span>
      </div><!-- End portfolio head -->
      <!-- portfolio img 1 -->
      <div class="col-span-12 sm:col-span-6 overflow-hidden w-full h-full">
        <a href="https://www.chromopuncture-suisse.ch/" target="_blank">
          <img src="~/assets/images/portfolio/chromopuncture.png" alt="site web chromopuncture" class="w-full transition duration-500 scale-110 hover:scale-[1.01]">
        </a>
      </div><!-- End portfolio img 1 -->
      <!-- portfolio img 2 -->
      <div class="col-span-12 sm:col-span-6 overflow-hidden w-full h-full">
        <a href="https://maxdarkt.github.io/studi_projet_1/" target="_blank">
          <img src="~/assets/images/portfolio/aikikai_poisy.png" alt="site web Aikkikai de Poisy" class="w-full transition duration-500 scale-110 hover:scale-[1.01]">
        </a>
      </div><!-- End portfolio img 2 -->
      <!-- portfolio img 3 -->
      <div class="col-span-12 sm:col-span-6 overflow-hidden w-full h-full">
        <a href="https://private-woy.vercel.app/fr/" target="_blank">
          <img src="~/assets/images/portfolio/woy.png" alt="site web Work On Yourself" class="w-full transition duration-500 scale-110 hover:scale-[1.01]">
        </a>
      </div><!-- End portfolio img 3 -->
      <!-- portfolio img 4 -->
      <div class="col-span-12 sm:col-span-6 overflow-hidden w-full h-full">
        <a href="https://private-woy.vercel.app/fr/" target="_blank">
          <img src="~/assets/images/portfolio/woy_users.png" alt="site web Work On Yourself : espace utilisateur" class="w-full transition duration-500 scale-110 hover:scale-[1.01]">
        </a>
      </div><!-- End portfolio img 4 -->
      <!-- portfolio footer -->
      <div class="col-span-12 bg-black/90 h-10 rounded-b-md flex justify-center items-center">
        <p class="text-sm text-white">
          Mon portfolio
        </p>
      </div><!-- End portfolio footer -->
    </div><!-- End contenair-portfolio -->
  </section>  
</template>
  
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Portfolio',
  props: {
    animation: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.displayPortfolio()
  },
  methods: {
    // launch Event Listerner
    displayPortfolio(): void {
      // we listen scroll event
      window.addEventListener('scroll', this.addScrollListenerPortfolio)
    },
    // callback
    addScrollListenerPortfolio(): void {
      // we get portfolio element
      const portfolioElement = document.getElementById('contenair-portfolio') as HTMLElement

      const {scrollTop, clientHeight} = document.documentElement as HTMLElement

      const topPortfolioElementOneToTopViewport: number = portfolioElement.getBoundingClientRect().top

      // Launch animation
      if(scrollTop > (scrollTop + topPortfolioElementOneToTopViewport) - clientHeight * 0.8) {
        if(this.animation) {
          portfolioElement.classList.remove('display-animation-b-r')
        } else {
          portfolioElement.classList.remove('opacity-0')
        }
        this.removeScrollListenerPortfolio()
      }
    },
    // stop Event Listener
    removeScrollListenerPortfolio(): void {
      window.removeEventListener("scroll", this.addScrollListenerPortfolio)
    }
  }
})
</script>

<style scoped>
#contenair-portfolio img{
  filter: grayscale(100);
}

#contenair-portfolio img:hover{
  filter: grayscale(0);
}
</style>