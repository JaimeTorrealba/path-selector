<script setup>
const handleResult = (path) => console.log(path);
</script>

<template>
  <svg-selector @selectedPath="(path) => handleResult(path)" />
</template>
