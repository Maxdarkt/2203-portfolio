<template>
  <div id="home-banner" class="w-screen h-screen grid grid-cols-12 bg-[url('~/assets/images/banner/background-MT.jpg')] bg-center xs:bg-[center_right_-40rem] sm:bg-center bg-no-repeat bg-cover overflow-hidden">
  <!-- NavBar -->
   <Navbar class="fixed top-4 right-8 z-0" :animation="animation" @event-scroll-to="scrollDown"/>
    <!-- Block top -->
    <div class="col-span-12 flex flex-col justify-end items-center p-4 pr-8">
      <img src="~/assets/images/banner/MT_logo_argent_clair_fond_transparent.png" alt="logo" class="max-h-32 xs:max-h-40 sm:max-h-80 ml-8">
    </div><!-- End Block top -->
    <!-- Block bottom -->
    <div class="col-span-12 flex flex-col justify-start items-center p-4">
      <h1 id="animate-text" class="hidden text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-white text-center">
        Tourneux Maxence
      </h1>
      <!-- animation 1 -->
      <p id="animateText-2" class="xs:text-lg sm:text-xl md:text-xl lg:text-3xl font-bold text-gray-200 mt-8 text-center flex">
        <span class="w-fit position-0 transition duration-700" :class="{'position-1' : animation, 'opacity-0' : !animation}">F</span>
        <span class="w-fit position-0 transition duration-700" :class="{'position-2' : animation, 'opacity-0' : !animation}">u</span>
        <span class="w-fit position-0 transition duration-700" :class="{'position-2' : animation, 'opacity-0' : !animation}">l</span>
        <span class="w-fit position-0 transition duration-700" :class="{'position-2' : animation, 'opacity-0' : !animation}">l</span>
        <span class="w-fit position-0 transition duration-700 ml-2 xs:ml-4" :class="{'position-1' : animation, 'opacity-0' : !animation}">s</span>
        <span class="w-fit position-0 transition duration-700" :class="{'position-2' : animation, 'opacity-0' : !animation}">t</span>
        <span class="w-fit position-0 transition duration-700" :class="{'position-1' : animation, 'opacity-0' : !animation}">a</span>
        <span class="w-fit position-0 transition duration-700" :class="{'position-2' : animation, 'opacity-0' : !animation}">c</span>
        <span class="w-fit position-0 transition duration-700" :class="{'position-2' : animation, 'opacity-0' : !animation}">k</span>
        <span class="w-fit position-0 transition duration-700 ml-2 xs:ml-4" :class="{'position-2' : animation, 'opacity-0' : !animation}">d</span>
        <span class="w-fit position-0 transition duration-700" :class="{'position-1' : animation, 'opacity-0' : !animation}">e</span>
        <span class="w-fit position-0 transition duration-700" :class="{'position-2' : animation, 'opacity-0' : !animation}">v</span>
        <span class="w-fit position-0 transition duration-700" :class="{'position-1' : animation, 'opacity-0' : !animation}">e</span>
        <span class="w-fit position-0 transition duration-700" :class="{'position-2' : animation, 'opacity-0' : !animation}">l</span>
        <span class="w-fit position-0 transition duration-700" :class="{'position-1' : animation, 'opacity-0' : !animation}">o</span>
        <span class="w-fit position-0 transition duration-700" :class="{'position-2' : animation, 'opacity-0' : !animation}">p</span>
        <span class="w-fit position-0 transition duration-700" :class="{'position-2' : animation, 'opacity-0' : !animation}">e</span>
        <span class="w-fit position-0 transition duration-700" :class="{'position-2' : animation, 'opacity-0' : !animation}">r</span>
      </p><!-- End animation 1 -->
      <!-- animation separator -->
      <p id="separator-banner" class="my-4">
        <img src="~/assets/images/separatorWhite.png" alt="separateur" class="opacity-0 transition duration-[2500ms] w-42">
      </p><!-- End animation separator -->
      <!-- animation 3 logos -->
      <div class="flex justify-center items-center space-x-4">
        <a href="mailto:Maxdev74@gmail.com" class="transition duration-500 hover:rotate-[360deg]">
          <img src="~/assets/images/socialNetworks/mail_white.png" alt="logo mail" class="position-0 transition duration-[1500ms]" :class="{'position-3' : animation, 'opacity-0' : !animation}">
        </a>
        <a href="https://github.com/Maxdarkt" target="_blank" class="transition duration-500 hover:rotate-[360deg]">
          <img src="~/assets/images/socialNetworks/github_white.png" alt="logo github" class="position-0 transition duration-[1500ms]" :class="{'position-4' : animation, 'opacity-0' : !animation}">
        </a>
        <a href="https://www.linkedin.com/in/tourneux-maxence-6024615a/" target="_blank" class="transition duration-500 hover:rotate-[360deg]">
          <img src="~/assets/images/socialNetworks/linkedin_white.png" alt="logo linkedin" class="position-0 transition duration-[1500ms]" :class="{'position-3' : animation, 'opacity-0' : !animation}">
        </a>
      </div>
      <!-- End animation 3 logos -->
    </div><!-- End Block bottom -->
    <!-- banner opacity -->
    <div id="banner-description" class="col-span-12 self-end text-white p-4 bg-black/70 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/90 sm:to-black/70 transition duration-[1500ms] translate-y-[100%]">
      <h2 class="text-sm xs:text-lg font-bold underline underline-offset-4 mb-6">
        En savoir plus
      </h2>
      <p class="hidden sm:block text-sm xs:text-lg text-justify mt-4">
        <strong>En régie :</strong> Pour les professionnels qui recherchent la souplesse d'un support freelance pour renforcer ses équipes.
      </p>
      <p class="hidden sm:block text-sm xs:text-lg text-justify my-6">
        <strong>Au forfait :</strong> Pour les clients qui recherchent la réalisation d'un projet bien défini.
      </p>
      <p id="scroll-button" class="demo">
        <a href="#" @click="scrollDown('about-me')"><span></span><span></span><span></span></a>
      </p>
    </div><!-- End banner opacity -->
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'HomeBanner',
    props: {
      animation: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
      }
    },
    mounted() {
      this.animateText()
      this.animateText2()
    },
    methods: {
      // 1/ First animation : typewriter
      animateText(): void {
        // we define the timer
        const delay: number = 100
        const delayStart: number = 0
        // we get DOM element
        const elem: any = document.querySelector("#animate-text") as HTMLElement
        // retrieves the content of the paragraph
        const contents: string = elem.textContent.trim()
        // empty the content
        elem.textContent = ""
        // separate each character
        const letters: string[] = contents.split("")
        elem.classList.remove('hidden')
        // For each character
        letters.forEach(function (letter: string, index: number) {
          setTimeout(function () {
            // ---------
            // simple typewriter effect
            elem.textContent += letter // display the character
            // ---------
          }, delayStart + delay * index)
        })
      },
      // 2/ Second animation : display each letters (translate && rotate)
      animateText2(): void {
        // we define the timer
        const delay: number = this.animation ? 75 : 150
        const delayStart: number = 1000
        // we get DOM element
        const elem: NodeListOf<HTMLElement> = document.querySelectorAll('.position-0')
        // For each letter or image
        elem.forEach((item: HTMLElement, index: number) => {
          setTimeout(() => {
            if(this.animation) {
              item.classList.remove('position-1')
              item.classList.remove('position-2')
              item.classList.remove('position-3')
              item.classList.remove('position-4')
            } else {
              item.classList.remove('opacity-0')
            }
          }, delayStart + delay * index)
        })
        // we launch the third animation
        this.displaySeparator()
        this.displayBannerDescription()
      },
      // 3/ Third animation : display the separator (opacity)
      displaySeparator(): void {
        // we get DOM element
        const elem: HTMLElement = document.querySelector('#separator-banner img') as HTMLElement
        // we display the separator
        setTimeout(() => {
          elem.classList.add('opacity-100')
        },3500)
      },
      // 4/ Fourth animation : display description banner
      displayBannerDescription(): void {
        setTimeout(() => {
          const element = document.getElementById('banner-description') as HTMLElement
          element.classList.remove('translate-y-[100%]')
        }, 1500)
      },
      // clcick Event : ScrollTo 
      scrollDown(id: string): void {
        const element: HTMLElement = document.getElementById(id) as HTMLElement
        const height: number = element.getBoundingClientRect().top
        this.$emit('event-scroll-to', height)
        console.log(height)
      },
    }
  })
</script>

<style scoped>
.demo a {
  position: absolute;
  bottom: 20px;
  left: 50%;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: #fff;
  letter-spacing: .1em;
  text-decoration: none;
  transition: opacity .3s;
}
.demo a:hover {
  opacity: .5;
}

#scroll-button { background: url(https://picsum.photos/1200/800?image=675) center center / cover no-repeat;}

#scroll-button a {
  padding-top: 40px;
}
#scroll-button a span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb07 2s infinite;
  animation: sdb07 2s infinite;
  opacity: 0;
  box-sizing: border-box;
}
#scroll-button a span:nth-of-type(1) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
#scroll-button a span:nth-of-type(2) {
  top: 16px;
  -webkit-animation-delay: .15s;
  animation-delay: .15s;
}
#scroll-button a span:nth-of-type(3) {
  top: 32px;
  -webkit-animation-delay: .3s;
  animation-delay: .3s;
}
@-webkit-keyframes sdb07 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sdb07 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/*---------text 2 ------------*/
.position-0{
  display: block;
  transform: translate(0%, 0%) rotate(0deg);
}

.position-1{
  transform: translate(100vw, 100vh);
}

.position-2{
  transform: translate(100vw, -100vh);
}

.position-3{
  transform: translate(100vw, 100vh) rotate(-3600deg);
}

.position-4{
  transform: translate(100vw, -100vh) rotate(3600deg);
}
</style>
