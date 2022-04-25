<template>
  <section id="about-me" class="bg-[#E5E5E5] p-4">
    <h2 class="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-black text-center">
        A propos de moi
    </h2>
    <div class="border-b-4 border-black w-[35%] mx-auto my-4 xs:my-8"></div>
    <!-- contenair-max-width -->
    <div id="contenair-max-width" class="grid grid-cols-12 items-center lg:max-w-5xl mx-auto mt-4 xs:mt-8">
      <!-- card-1 -->
      <div id="card-about-me-1" class="col-span-12 grid grid-cols-12 items-center bg-white rounded-lg transition duration-500 shadow-lg hover:shadow-2xl p-4 mb-8" :class="{'slide-animation-b-l' : animation, 'opacity-0' : !animation}">
        <div class="col-span-12 sm:col-span-3 flex flex-col justify-center items-center text-center p-4">
          <h3 class="text-lg md:text-xl text-center font-semibold mb-2">
            Design
          </h3>
          <img src="~/assets/images/aboutMe/logo_design_bg.png" alt="logo design" class="w-40 sm:w-28">
        </div>
        <div class="col-span-12 sm:col-span-9">
          <ul class="list-disc pl-8 space-y-2">
            <li>
              Assistance pour la rédaction du cahier des charges
            </li>
            <li>
              Réalisation de maquette sur les formats : Ordinateur, tablette et mobile
            </li>
          </ul>
        </div>
      </div><!-- End card-1 -->
      <!-- card-2 -->
      <div id="card-about-me-2" class="col-span-12 grid grid-cols-12 items-center bg-white rounded-lg transition duration-500 shadow-lg hover:shadow-2xl p-4 mb-8" :class="{'slide-animation-b-r' : animation, 'opacity-0' : !animation}">
        <div class="col-span-12 sm:col-span-3 flex flex-col justify-center items-center text-center p-4">
          <h3 class="text-lg md:text-xl text-center font-semibold mb-2">
            Développement
          </h3>
          <img src="~/assets/images/aboutMe/logo_development.png" alt="logo development" class="w-40 sm:w-28">
        </div>
        <div class="col-span-12 sm:col-span-9">
          <p class="sm:text-lg font-semibold mb-2">
            Au forfait :
          </p>
          <ul class="list-disc pl-8 space-y-2">
            <li>
              Création de site web de A à Z
            </li>
            <li>
              Refonte de site existant
            </li>
          </ul>
          <p class="sm:text-lg font-semibold mb-2 mt-8">
            En régie :
          </p>
          <ul class="list-disc pl-8 space-y-2">
            <li>
              Développement en agence suivant la localité
            </li>
            <li>
              Développement à distance avec déplacements ponctuels
            </li>
            <li>
              Développement front et/ou back
            </li>
          </ul>
        </div>
      </div><!-- End card-2 -->
      <!-- card-3 -->
      <div id="card-about-me-3" class="col-span-12 grid grid-cols-12 items-center bg-white rounded-lg transition duration-500 shadow-lg hover:shadow-2xl p-4 mb-8" :class="{'slide-animation-b-l' : animation, 'opacity-0' : !animation}">
        <div class="col-span-12 sm:col-span-3 flex flex-col justify-center items-center text-center p-4">
          <h3 class="text-lg md:text-xl text-center font-semibold mb-2">
            Maintenance
          </h3>
          <img src="~/assets/images/aboutMe/logo_maintenance.png" alt="logo maintenance" class="w-40 sm:w-28">
        </div>
        <div class="col-span-12 sm:col-span-9">
          <ul class="list-disc pl-8 space-y-2">
            <li>
              Mise à jour du site web : localité, contenu, actualités ...
            </li>
            <li>
              Ajout de fonctionnalités : contact, espace client, module de prise de rdv ...
            </li>
          </ul>
        </div>
      </div><!-- End card-3 -->
    </div><!-- End contenair-max-width -->
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutMe',
  props: {
    animation: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.displayAboutMe()
  },
  methods: {
    // launch Event Listerner
    displayAboutMe(): void {
      // we listen scroll event
      window.addEventListener('scroll', this.addScrollListenerAboutMe)
    },
    // callback
    addScrollListenerAboutMe(): void {
      // we get three cards
      const cardOne = document.getElementById('card-about-me-1') as HTMLElement
      const cardTwo = document.getElementById('card-about-me-2') as HTMLElement
      const cardThree = document.getElementById('card-about-me-3') as HTMLElement

      const {scrollTop, clientHeight} = document.documentElement as HTMLElement

      const topCardOneToTopViewport: number = cardOne.getBoundingClientRect().top
      const topCardTwoToTopViewport: number = cardTwo.getBoundingClientRect().top
      const topCardThreeToTopViewport: number = cardThree.getBoundingClientRect().top
      // Launch animation
      if(scrollTop > (scrollTop + topCardOneToTopViewport) - clientHeight * 0.8) {
        if(this.animation) {
          cardOne.classList.remove('slide-animation-b-l')
        } else {
          cardOne.classList.remove('opacity-0')
        }
      }
      if(scrollTop > (scrollTop + topCardTwoToTopViewport) - clientHeight * 0.8) {
        if(this.animation) {
          cardTwo.classList.remove('slide-animation-b-r')
        } else {
          cardTwo.classList.remove('opacity-0')
        }
      }
      if(scrollTop > (scrollTop + topCardThreeToTopViewport) - clientHeight * 0.8) {
        if(this.animation) {
          cardThree.classList.remove('slide-animation-b-l')
        } else {
          cardThree.classList.remove('opacity-0')
        }
        this.removeScrollListenerAboutMe()
      }
    },
    // stop Event Listerner
    removeScrollListenerAboutMe():void {
      window.removeEventListener("scroll", this.addScrollListenerAboutMe)
    },
  }
})
</script>
