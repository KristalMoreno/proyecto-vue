<template> 
    {{ weatherStore.temperatura }}
  </template>
  
  <script setup> 
  import { useWeadher } from '@/compusables/useWeather'; // Asegúrate que la ruta es correcta
  import { onMounted } from 'vue';
  import { useWeatherStore } from "@/stores/stores/weatherStore"; // ✅ Nombre correcto
  
  const weatherStore = useWeatherStore(); // ✅ Corregido el nombre
  
  onMounted(() => {
      useWeadher();
  });
  </script>
  
  <style scoped>
  </style>
  
  