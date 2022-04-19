<template>
  <div id="home-banner" class="grid grid-cols-12 bg-[url('~/assets/images/background-MT.jpg')] bg-[center_right_-40rem] sm:bg-center bg-no-repeat bg-cover w-screen h-screen overflow-hidden">
    <div class="col-span-12 sm:col-span-6 flex flex-col justify-center items-center">
      <p id="animate-text" class="hidden text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-white text-center">
        Je m'appelle Maxence !
      </p>
      <p id="animateText-2" class="xs:text-lg sm:text-xl md:text-xl lg:text-3xl font-bold text-gray-200 mt-8 text-center flex">
        <span class="w-fit position-0 position-1 transition duration-700">J</span>
        <span class="w-fit position-0 position-2 transition duration-700">e</span>
        <span class="w-fit position-0 position-1 transition duration-700 ml-4">s</span>
        <span class="w-fit position-0 position-2 transition duration-700">u</span>
        <span class="w-fit position-0 position-1 transition duration-700">i</span>
        <span class="w-fit position-0 position-2 transition duration-700">s</span>
        <span class="w-fit position-0 position-1 transition duration-700 ml-4">u</span>
        <span class="w-fit position-0 position-1 transition duration-700">n</span>
        <span class="w-fit position-0 position-2 transition duration-700 ml-4">d</span>
        <span class="w-fit position-0 position-1 transition duration-700">é</span>
        <span class="w-fit position-0 position-2 transition duration-700">v</span>
        <span class="w-fit position-0 position-1 transition duration-700">e</span>
        <span class="w-fit position-0 position-2 transition duration-700">l</span>
        <span class="w-fit position-0 position-1 transition duration-700">o</span>
        <span class="w-fit position-0 position-2 transition duration-700">p</span>
        <span class="w-fit position-0 position-1 transition duration-700">p</span>
        <span class="w-fit position-0 position-2 transition duration-700">e</span>
        <span class="w-fit position-0 position-1 transition duration-700">u</span>
        <span class="w-fit position-0 position-2 transition duration-700">r</span>
      </p>
      <p id="separator-banner" class="my-4">
        <img src="~/assets/images/separatorWhite.png" alt="separateur" class="opacity-0 transition duration-[2500ms] w-42">
      </p>
      <div class="flex justify-center items-center space-x-4">
        <img src="~/assets/images/mail_white.png" alt="logo mail" class="position-0 position-3 transition duration-[1500ms]">
        <img src="~/assets/images/github_white.png" alt="logo github" class="position-0 position-4 transition duration-[1500ms]">
        <img src="~/assets/images/linkedin_white.png" alt="logo linkedin" class="position-0 position-3 transition duration-[1500ms]">
      </div>
    </div>
    <div class="col-span-12 sm:col-span-6 flex flex-col justify-center items-center">
      <img src="~/assets/images/MT_logo_argent_clair_fond_transparent.png" alt="logo" class="max-h-80">
      <h1 class="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-white text-center mt-8">
        Tourneux Maxence
      </h1>
      <h2 class="xs:text-lg sm:text-xl md:text-xl lg:text-3xl font-bold text-gray-200 mt-8 text-center">
        Full stack developper
      </h2>
    </div>
    <div class="col-span-12 self-end text-white p-4 bg-black/70 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/90 sm:to-black/70">
      <h3 class="text-lg font-bold underline">
        Title
      </h3>
      <p class="text-justify mt-4 pb-14">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquid atque repellat molestiae recusandae voluptate ab accusantium quod. Dolorem dolores praesentium numquam reiciendis adipisci inventore mollitia optio. Quo, porro repellat.
      </p>
      <section id="scroll-button" class="demo">
        <a href="#section08" @click="scrollTo"><span></span><span></span><span></span></a>
    </section>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'HomeBanner',
    data() {
      return {
        message: 'Hello World !',
      }
    },
    mounted() {
      this.animateText()
      this.animateText2()
    },
    methods: {
      animateText(): void {
        const delay: number = 100
        const delayStart: number = 0
        let contents: string
        let letters: string[]

        const elem: any = document.querySelector("#animate-text") as HTMLElement
        contents = elem.textContent.trim() // récupère le contenu (texte à traiter)
        elem.textContent = "" // on vide le contenu
        letters = contents.split("") // on sépare chaque caractère (lettre/ponctuation/espace)
        elem.classList.remove('hidden') // on rend visible le conteneur
    
        letters.forEach(function (letter: string, index_1: number) { // pour chaque caractère
          setTimeout(function () {
            // ---------
            // effet machine à écrire (SIMPLE)
            elem.textContent += letter // affiche le caractère
            // ---------
          }, delayStart + delay * index_1) // index_1 vaut 0 à (letters.length-1)
        })
      },
      scrollTo(): void {
        console.log('scroll')
      },
      animateText2(): void {
        const delay: number = 75
        const delayStart: number = 1000
        const elem: NodeListOf<HTMLElement> = document.querySelectorAll('.position-0')
        elem.forEach((item: HTMLElement, index: number) => {
          setTimeout(() => {
            console.log(item)
            item.classList.remove('position-1')
            item.classList.remove('position-2')
            item.classList.remove('position-3')
            item.classList.remove('position-4')
          }, delayStart + delay * index)
        })
        this.displaySeparator()
      },
      displaySeparator(): void {
        const elem: HTMLElement = document.querySelector('#separator-banner img') as HTMLElement
        setTimeout(() => {
          elem.classList.add('opacity-100')
        },3500)
      }
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
