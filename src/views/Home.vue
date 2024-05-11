<template>
  <div class="flex flex-wrap gap-5 flex-col justify-center">
    <div v-if="isLoading" class="font-bold size-12 m-auto">Is Loading...</div>
    <div class="flex flex-wrap justify-center">
      <FilmCard v-for="(movie, index) in movies" :key="index" :movie="movie" :id="index" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import FilmCard from '../components/FilmCard.vue'

export default {
  name: 'Home',
  components: { FilmCard },
  data() {
    return {
      movies: [],
      isLoading: true,
    }
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:3000/movies')
      this.movies = await response.data
      this.isLoading = false
    } catch (error) {
      console.log('Ошибка с запросом на сервер:')
    }
  },
}
</script>

<style>
/* Стили */
</style>
