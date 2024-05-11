<template>
  <div class="flex justify-center gap-5">
    <div class="flex-2">
      <img
        :src="queryMovie.thumbnail"
        alt=""
      />
    </div>
    <div class="flex-1 flex flex-col gap-2">
      <h2 class="font-bold text-2xl">{{ queryMovie.title }}</h2>
      <h6>Year: {{ queryMovie.year }}</h6>
      <p class="w-2/4 m-auto">{{ queryMovie.extract }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const queryMovie = ref({});
const isLoadig = ref(true);
const route = useRoute();

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:3000/movies`);
    const movies = response.data;
    const idFilm = route.params.id;
    queryMovie.value = movies[idFilm];
    isLoadig.value = false;
  } catch (error) {
    console.log('Ошибка получения фильма', error);
  }
});
</script>

<style></style>
