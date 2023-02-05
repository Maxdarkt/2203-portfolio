<template>
  <section id="contact" class="bg-[#E5E5E5] p-4">
    <h2 class="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-black text-center mt-8">
        Contactez-moi
    </h2>
    <div class="border-b-4 border-black w-[35%] mx-auto my-4 xs:my-8"></div>
    <!-- contenair-contact -->
    <div id="contenair-contact" class="md:max-w-2xl mx-auto my-16 transition duration-500" :class="{'display-animation-b-l' : (!loaded && animation), 'opacity-0' : (!loaded && !animation)}">
      <form class="rounded-lg bg-white shadow-lg transition duration-500 hover:shadow-2xl p-8">
        <div class="relative z-0 mb-8 w-full group">
          <input id="email" v-model="email" type="email" name="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required @input="validateForm('email')" />
          <label for="email" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Email</label>
        </div>
        <div class="grid xl:grid-cols-2 xl:gap-6">
          <div class="relative z-0 mb-8 w-full group">
            <input id="lastName" v-model="lastName" type="text" name="lastName" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required @input="validateForm('lastName')"  />
            <label for="lastName" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Nom</label>
          </div>
          <div class="relative z-0 mb-8 w-full group">
            <input id="firstName" v-model="firstName" type="text" name="firstName" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required @input="validateForm('firstName')"  />
            <label for="firstName" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Prénom</label>
          </div>
        </div>
        <div class="grid xl:grid-cols-2 xl:gap-6">
          <div class="relative z-0 mb-8 w-full group">
            <input id="mobile" v-model="mobile" type="tel" name="mobile" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required @input="validateForm('mobile')"  />
            <label for="mobile" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Mobile</label>
          </div>
          <div class="relative z-0 mb-8 w-full group">
            <input id="company" v-model="company" type="text" name="company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="company" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Société</label>
          </div>
        </div>
        <div class="relative z-0 mb-8 w-full group">
          <textarea id="message" v-model="message" type="message" name="message" class="block h-32 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " row="5" required @input="validateForm('message')" ></textarea>
          <label for="message" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Votre message</label>
        </div>
        <div class="flex justify-center items-center space-x-8">
          <button type="reset" class="bg-gray-700 transition duration-500 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" @click.prevent="resetForm">Effacer</button>
          <button type="submit" class="text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" :class="{'disabled bg-gray-300' : !validatefields, 'bg-gray-700 transition duration-500 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300' : validatefields}" @click.prevent="sendEmail">Envoyer</button>
        </div>
        <div id="alert-form" class="text-lg text-center py-2 my-4 transition duration-700 opacity-0">
          {{ alertForm }}
        </div>
      </form>
    </div><!-- End contenair-contact -->
  </section>
</template>
  
<script lang="ts">
import Vue from 'vue'
import { validateForm, changeClassForm } from '~/assets/js/validateForm'
import regex from '~/assets/js/regex'

export default Vue.extend({
  name: 'Contact',
  props: {
    animation: {
      type: Boolean,
      default: false
    }
  },
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
        if(this.animation) {
          contactElement.classList.remove('display-animation-b-l')
        } else {
          contactElement.classList.remove('opacity-0')
        }
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
        message: this.message,
        to: 'maxence@mt-develop.ch'
      })
      .then(response => {
        if(response.code === 200) {
          this.alertForm = 'Le mail a bien été envoyé, je vous répondrai dans les plus bref délais.'
          const element = document.getElementById('alert-form') as HTMLElement
          element.classList.add('text-green-400')
          element.classList.add('opacity-100')
          const self: any = this
          setTimeout(() => {
            element.classList.remove('opacity-100')
          }, 4000)
          setTimeout(() => {
            self.alertForm = ''
            element.classList.remove('text-green-400')
            self.resetForm()
          }, 5000)
        }
      })
    },
    resetForm():void {
      // get all inputs
      const inputs = document.querySelectorAll('input') as NodeListOf<HTMLInputElement>
      // get textarea
      const textarea = document.querySelector('textarea') as HTMLTextAreaElement
      // we reset all class inputs
      inputs.forEach(item => this.resetInput(item))
      // we reset class textarea
      this.resetInput(textarea)
      // we reset value
      this.email = ''
      this.lastName = ''
      this.firstName = ''
      this.mobile = ''
      this.company = ''
      this.message = ''
    },
    resetInput(element:HTMLInputElement | HTMLTextAreaElement): void {
      element.classList.remove('is-invalid')
      element.classList.remove('is-valid')
    }
  }
})
</script>