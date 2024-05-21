<template>
  <div class="person">
    name: {{ name }} salary: {{ salary }} id: {{ id }}
    <button @click="$emit('deleteItem', id)">Delete person</button>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  salary: String,
  id: Number
});
</script>

<style>
.person {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

</style>
