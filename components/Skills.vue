<template>
  <section id="skills" class="bg-[#E5E5E5] p-4">
    <h2 class="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-black text-center">
        Mes compétences techniques
    </h2>
    <div class="border-b-4 border-black w-[35%] mx-auto my-8"></div>
    <!-- contenair-max-width -->
    <div id="contenair-max-width" class="grid grid-cols-12 items-center lg:max-w-5xl mx-auto mt-8">
      <!-- card-1 -->
      <div id="card-skills-1" class="col-span-12 grid grid-cols-12 items-center bg-white rounded-lg transition duration-500 shadow-lg hover:shadow-2xl p-4 mb-8" :class="{'display-animation-b-l' : animation, 'opacity-0' : !animation}">
        <h4 class="col-span-12 text-lg md:text-xl font-semibold my-4">
          Les technologies utilisées :
        </h4>
        <!-- skills-1-2-3-4 -->
        <LogoItem logo-name="HTML 5" image-name="logo_HTML_5.png" />
        <LogoItem logo-name="CSS 3" image-name="logo_CSS_3.png" />
        <LogoItem logo-name="SASS" image-name="logo_SASS.png" />
        <LogoItem logo-name="TAILWINDCSS" image-name="logo_tailwindcss.png" />
        <!-- End skills-1-2-3-4 -->
        <!-- skills-5-6-7-8 -->
        <LogoItem logo-name="BOOTSTRAP" image-name="logo_bootstrap.png" />
        <LogoItem logo-name="JAVASCRIPT" image-name="logo_javascript.png" />
        <LogoItem logo-name="JQUERY" image-name="logo_jquery.png" />
        <LogoItem logo-name="VUE.JS" image-name="logo_VUEJS.png" />
        <!-- End skills-5-6-7-8 -->
        <!-- skills-9-10-11-12 -->
        <LogoItem logo-name="NUXT.JS" image-name="logo_NUXTJS.png" />
        <LogoItem logo-name="NODE.JS" image-name="logo_NODEJS.png" />
        <LogoItem logo-name="EXPRESS.JS" image-name="logo_express.png" />
        <LogoItem logo-name="TYPESCRIPT" image-name="logo_typescript.png" />
        <!-- End skills-9-10-11-12 -->
        <!-- skills-13-14-15-16 -->
        <LogoItem logo-name="PHP" image-name="logo_php.png" />
        <LogoItem logo-name="SYMFONY" image-name="logo_symfony.png" />
        <LogoItem logo-name="MYSQL" image-name="logo_MySQL-2.png" />
        <LogoItem logo-name="MONGODB" image-name="logo_mongoDB.jpg" />
        <!-- End skills-13-14-15-16 -->
        <!-- skills-17-18 -->
        <LogoItem logo-name="GIT" image-name="logo_git.png" />
        <LogoItem logo-name="REACT" image-name="logo_react.png" />
        <!-- End skills-17-18 -->
      </div><!-- End card-1 -->
      <!-- -----/-----/----/-----/----/-----/-----/----/-----/----/-----/-----/----/-----/----/----- -->
      <!-- card-2 -->
      <div id="card-skills-2" class="col-span-12 grid grid-cols-12 items-center bg-white rounded-lg transition duration-500 shadow-lg hover:shadow-2xl p-4 mb-8" :class="{'display-animation-b-r' : animation, 'opacity-0' : !animation}">
        <h4 class="col-span-12 text-lg md:text-xl font-semibold my-4">
          Logiciels :
        </h4>
        <!-- skills-1-2-3-4 -->
        <LogoItem logo-name="UBUNTU" image-name="logo_ubuntu.png" />
        <LogoItem logo-name="JIRA" image-name="logo_jira.png" />
        <LogoItem logo-name="FIGMA" image-name="logo_figma.png" />
        <LogoItem logo-name="GIMP" image-name="logo_gimp.png" />
        <!-- End skills-1-2-3-4 -->
        <!-- skills-5-6-7 -->
        <LogoItem logo-name="HEROKU" image-name="logo_heroku.png" />
        <LogoItem logo-name="VERCEL" image-name="logo_vercel.png" />
        <LogoItem logo-name="NETLIFY" image-name="logo_netlify.png" />
        <!-- End skills-5-6-7 -->
      </div><!-- End card-2 -->
      <!-- -----/-----/----/-----/----/-----/-----/----/-----/----/-----/-----/----/-----/----/----- -->
      <!-- card-3 -->
      <div id="card-skills-3" class="col-span-12 grid grid-cols-12 items-center bg-white rounded-lg transition duration-500 shadow-lg hover:shadow-2xl p-4 mb-8" :class="{'display-animation-b-l' : animation, 'opacity-0' : !animation}">
        <h4 class="col-span-12 text-lg md:text-xl font-semibold my-4">
          En cours d'apprentissage :
        </h4>
        <!-- skills-5-6-7-8 -->
        <LogoItem logo-name="REACT NATIVE" image-name="logo_react_native.png" />
        <LogoItem logo-name="DOCKER" image-name="logo_docker.png" />
        <LogoItem logo-name="PYTHON" image-name="logo_python.png" />
        <LogoItem logo-name="DJANGO" image-name="logo_django.jpg" />
        <!-- End skills-5-6-7-8 -->
      </div><!-- End card-3 -->
    </div><!-- End contenair-max-width -->
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import LogoItem from '~/components/UI/LogoItem.vue'

export default Vue.extend({
  name: 'Skills',
  components: {
    LogoItem
  },
  props: {
    animation: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.displaySkills()
  },
  methods: {
    // launch Event Listerner
    displaySkills(): void {
      // we listen scroll event
      window.addEventListener('scroll', this.addScrollListenerSkills)
    },
    // callback
    addScrollListenerSkills(): void {
      // we get three cards
      const cardSkillsOne = document.getElementById('card-skills-1') as HTMLElement
      const cardSkillsTwo = document.getElementById('card-skills-2') as HTMLElement
      const cardSkillsThree = document.getElementById('card-skills-3') as HTMLElement

      const {scrollTop, clientHeight} = document.documentElement as HTMLElement

      const topCardSkillsOneToTopViewport: number = cardSkillsOne.getBoundingClientRect().top
      const topCardSkillsTwoToTopViewport: number = cardSkillsTwo.getBoundingClientRect().top
      const topCardSkillsThreeToTopViewport: number = cardSkillsThree.getBoundingClientRect().top

      // Launch animation
      if(scrollTop > (scrollTop + topCardSkillsOneToTopViewport) - clientHeight * 0.8) {
        if(this.animation) {
          cardSkillsOne.classList.remove('display-animation-b-l')
        } else {
          cardSkillsOne.classList.remove('opacity-0')
        }
      }
      if(scrollTop > (scrollTop + topCardSkillsTwoToTopViewport) - clientHeight * 0.8) {
        if(this.animation) {
          cardSkillsTwo.classList.remove('display-animation-b-r')
        } else {
          cardSkillsTwo.classList.remove('opacity-0')
        }
      }
      if(scrollTop > (scrollTop + topCardSkillsThreeToTopViewport) - clientHeight * 0.8) {
        if(this.animation) {
          cardSkillsThree.classList.remove('display-animation-b-l')
        } else {
          cardSkillsThree.classList.remove('opacity-0')
        }
        this.removeScrollListenerSkills()
      }
    },
    // stop Event Listener
    removeScrollListenerSkills():void {
      window.removeEventListener("scroll", this.addScrollListenerSkills)
    },
  }
})
</script>