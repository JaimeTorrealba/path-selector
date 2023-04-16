<script setup>
const handleResult = (path) => console.log(path);
</script>

<template>
  <path-selector @selectedPath="(path) => handleResult(path)">
    <!-- <template #openButton="{ showModal }">
      <button @click="showModal">hola</button>
    </template> -->
  </path-selector>
</template>
