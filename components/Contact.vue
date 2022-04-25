<template>
  <section id="contact" class="bg-[#E5E5E5] p-4">
    <h2 class="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-black text-center mt-8">
        Contactez-moi
    </h2>
    <div class="border-b-4 border-black w-[35%] mx-auto my-4 xs:my-8"></div>
    <!-- contenair-contact -->
    <div id="contenair-contact" class="md:max-w-2xl mx-auto my-16 transition duration-500" :class="{'display-animation-b-l' : !loaded}">
      <form class="rounded-lg bg-white shadow-lg transition duration-500 hover:shadow-2xl p-8">
        <div class="relative z-0 mb-8 w-full group">
          <input id="email" type="email" v-model="email" name="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " @input="validateForm('email')" required />
          <label for="email" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Email</label>
        </div>
        <div class="grid xl:grid-cols-2 xl:gap-6">
          <div class="relative z-0 mb-8 w-full group">
            <input id="lastName" type="text" v-model="lastName" name="lastName" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " @input="validateForm('lastName')" required />
            <label for="lastName" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Nom</label>
          </div>
          <div class="relative z-0 mb-8 w-full group">
            <input type="text" v-model="firstName" name="firstName" id="firstName" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " @input="validateForm('firstName')" required />
            <label for="firstName" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Prénom</label>
          </div>
        </div>
        <div class="grid xl:grid-cols-2 xl:gap-6">
          <div class="relative z-0 mb-8 w-full group">
            <input type="tel" v-model="mobile" name="mobile" id="mobile" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " @input="validateForm('mobile')" required />
            <label for="mobile" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Mobile</label>
          </div>
          <div class="relative z-0 mb-8 w-full group">
            <input type="text" v-model="company" name="company" id="company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="company" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Société</label>
          </div>
        </div>
        <div class="relative z-0 mb-8 w-full group">
          <textarea id="message" type="message" v-model="message" name="message" class="block h-32 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " row="5" @input="validateForm('message')" required></textarea>
          <label for="message" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Votre message</label>
        </div>
        <div class="flex justify-center items-center space-x-8">
          <button type="submit" class="text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" :class="{'disabled bg-gray-300' : !validatefields, 'bg-gray-700 transition duration-500 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300' : validatefields}" @click.prevent="sendEmail">Envoyer</button>
          <button type="reset" class="bg-gray-700 transition duration-500 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Effacer</button>
        </div>
        <div id="alert-form" class="text-lg text-center py-2 my-4 transition duration-700 opacity-0">
          {{ alertForm }}
        </div>
      </form>
    </div><!-- End contenair-contact -->
  </section>
</template>
  
<script lang="ts">
import { validateForm, changeClassForm } from '~/assets/js/validateForm'
import regex from '~/assets/js/regex'
import Vue from 'vue'

export default Vue.extend({
  name: 'Contact',
  data() {
    return {
      email: '',
      firstName: '',
      lastName: '',
      mobile: '',
      company: '',
      message: '',
      alertForm: '',
      loaded: false
    }
  },
  computed: {
    validatefields(): boolean {
      if(regex.email.test(this.email) && regex.name.test(this.firstName) && regex.name.test(this.lastName) && regex.message.test(this.message)) {
        return true
      }
      return false
    }
  },
  mounted() {
    this.displayContact()
  },
  methods: {
    changeClassForm,
    validateForm,
    // launch Event Listerner
    displayContact(): void {
      // we listen scroll event
      window.addEventListener('scroll', this.addScrollListenerContact)
    },
    // callback
    addScrollListenerContact(): void {
      // we get portfolio element
      const contactElement = document.getElementById('contenair-contact') as HTMLElement

      const {scrollTop, clientHeight} = document.documentElement as HTMLElement

      const topcontactElementOneToTopViewport: number = contactElement.getBoundingClientRect().top

      // Launch animation
      if(scrollTop > (scrollTop + topcontactElementOneToTopViewport) - clientHeight * 0.8) {
        this.loaded = true
        this.removeScrollListenerContact()
      }
    },
    // stop Event Listerner
    removeScrollListenerContact():void {
      window.removeEventListener("scroll", this.addScrollListenerContact)
    },
    sendEmail(): void {
      if(!this.validatefields) {
        return
      }
      this.$axios.$post('contact/', {
        email: this.email,
        lastName: this.lastName,
        firstName: this.firstName,
        mobile: this.mobile,
        company: this.company,
        message: this.message
      })
      .then(response => {
        console.log(response)
        if(response.code === 200) {
          this.alertForm = 'Le mail a bien été envoyé, je vous répondrai dans les plus bref délais.'
          const element = document.getElementById('alert-form') as HTMLElement
          element.classList.add('text-green-400')
          element.classList.add('opacity-100')
          const self: any = this
          setTimeout(() => {
            element.classList.remove('opacity-100')
          }, 5000)
          setTimeout(() => {
            self.alertForm = ''
            element.classList.remove('text-green-400')
          }, 6000)
        }
      })
    }
  }
})
</script>