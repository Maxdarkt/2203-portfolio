<template>
  <div class="flex flex-col justify-center items-center pt-20">
      <h1 class="text-3xl text-blue-800 mb-4">Aucune page ne correspond à cette adresse !</h1>
      <img src="~/assets/images/404NotFound.png" alt="404 not found"/>
  </div>
</template>

<script>
export default{
  name: 'FrError',
  head: {
    title: 'Erreur 404',
  }
}
</script>