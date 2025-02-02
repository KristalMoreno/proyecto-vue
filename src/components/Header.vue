<template>
    <div class ="header">
        {{ mensajeRecibido }}
        <h3>La temperatura actual es: {{weatherStore.temperatura }}°C</h3>
    </div>

</template>

<script setup>
import { useWeatherStore } from '@/stores/stores/weatherStore'; // Asegúrate de que la ruta es correcta
import { onMounted } from "vue";
import { defineProps, ref, watch } from 'vue';
const props = defineProps(['mensaje']);
const mensajeRecibido = ref(props.mensaje);
watch(() =>props.mensaje, (newValue)=>{
    mensajeRecibido.value =newValue;
})
const weatherStore = useWeatherStore();
console.log(weatherStore);

onMounted(() => {
    weatherStore.setTemperatura();
});
</script>

<style scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    top: 0;
    right: 0;
    left: 0;
    background-color: black;
    color: blanchedalmond;
}
h1{
    margin: 0;
}
</style>