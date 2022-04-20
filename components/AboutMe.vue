<template>
  <section id="about-me" class="bg-[#E5E5E5] p-4">
    <h1 class="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-black text-center">
        A propos de moi
    </h1>
    <div class="border-b-4 border-black w-[35%] mx-auto my-8"></div>
    <!-- contenair-max-width -->
    <div id="contenair-max-width" class="grid grid-cols-12 items-center lg:max-w-5xl mx-auto mt-8">
      <!-- card-1 -->
      <div id="card-1" class="col-span-12 grid grid-cols-12 items-center bg-white rounded-lg transition duration-500 shadow-lg hover:shadow-2xl p-4 mb-8">
        <div class="col-span-3 flex flex-col justify-center items-center text-center p-4">
          <h2 class="text-lg md:text-xl text-center font-semibold mb-2">
            Design
          </h2>
          <img src="~/assets/images/logo_design_bg.png" alt="logo design" class="px-12">
        </div>
        <div class="col-span-9">
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
      <div id="card-2" class="col-span-12 grid grid-cols-12 items-center bg-white rounded-lg transition duration-500 shadow-lg hover:shadow-2xl p-4 mb-8">
        <div class="col-span-3 flex flex-col justify-center items-center text-center p-4">
          <h2 class="text-lg md:text-xl text-center font-semibold mb-2">
            Développement
          </h2>
          <img src="~/assets/images/logo_development.png" alt="logo development" class="px-8">
        </div>
        <div class="col-span-9">
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
      <div id="card-3" class="col-span-12 grid grid-cols-12 items-center bg-white rounded-lg transition duration-500 shadow-lg hover:shadow-2xl p-4 mb-8">
        <div class="col-span-3 flex flex-col justify-center items-center text-center p-4">
          <h2 class="text-lg md:text-xl text-center font-semibold mb-2">
            Maintenance
          </h2>
          <img src="~/assets/images/logo_maintenance.png" alt="logo maintenance" class="px-12">
        </div>
        <div class="col-span-9">
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

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutMe',

})
</script>
