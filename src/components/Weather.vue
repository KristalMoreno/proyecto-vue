<template> 
    {{ weatherStore.temperatura }}
  </template>
  
  <script setup> 
  import { useWeadher } from '@/compusables/useWeather'; 
  import { onMounted } from 'vue';
  import { useWeatherStore } from "@/stores/stores/weatherStore"; 
  
  const weatherStore = useWeatherStore(); 
  
  onMounted(() => {
      useWeadher();
  });
  </script>
  
  <style scoped>
  </style>
  
  