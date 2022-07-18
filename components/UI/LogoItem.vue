<template>
<div class="col-span-6 xs:col-span-4 sm:col-span-3 flex flex-col justify-between items-center h-full text-center p-4">
  <div class="col-span-6 xs:col-span-4 sm:col-span-3 flex flex-col justify-between items-center h-full text-center p-4">
    <div class="flex justify-center items-center min-h-[6rem]">
      <img :src="require(`~/assets/images/skills/${imageName}`)" :alt="'logo' + logoName" :class="imageCss">
    </div>
    <h4 class="text-sm xs:text-lg text-center font-light mb-2">
      {{ logoName }}
    </h4>
  </div>
</div>
</template>

<script>
export default {
  name: 'LogoItem',
  props: {
    logoName: {
      type: String,
      default: null
    },
    imageCss: {
      type: String,
      default: 'w-12 md:w-20'
    },
    imageName: {
      type: String,
      default: null
    }
  }
}
</script>