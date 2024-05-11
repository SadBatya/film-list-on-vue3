<template>
  <router-link :to="`/filmdetail/${id}`" class="w-36 cursor-pointer hover:bg-slate-500 transition-all p-2 rounded-md drop-shadow-xl">
    <div>
      <img
        :src="movie.thumbnail"
        :alt="movie.title"
      />
    </div>
    <h3 class="font-bold">{{ movie.title }}</h3>
    <p>{{ movie.year }}</p>
  </router-link>
  
</template>

<script>
export default {
  props: {
    movie: Object,
    id: Number,
  },
};
</script>

<style></style>
