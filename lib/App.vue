<script setup>
const handleResult = (path) => console.log(path);
</script>

<template>
  <path-selector @selectedPath="(path) => handleResult(path)" />
</template>
