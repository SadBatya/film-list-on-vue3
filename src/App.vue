<template>
  <div class="person_list">
    <ListItem v-for="(person, index) in database" :key='index' :name="person.name" :id="person.id" :salary="person.salary" v-on:deleteItem="deleteCard"/>
  </div>
</template>


<script setup>
  import ListItem from "./components/ListItem.vue";
  import {ref} from 'vue'

  let database = ref([
    {
      id: 1,
      name: 'Vladimir',
      salary: '35000'
    },
    {
      id:2,
      name: 'Nikolay',
      salary: '3000'
    },
    {
      id: 3,
      name: 'Kostya',
      salary: '55000'
    }
  ])

  function deleteCard(id) {
    database.value =  database.value.filter(person => person.id != id)
  }
</script>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.person_list{
  display: flex;
  flex-direction: column;
}
</style>
