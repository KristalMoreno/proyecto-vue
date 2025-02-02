import { defineStore } from "pinia";
import { ref } from "vue";
import { getTemperatura } from "@/helpers/getWeather"; 

export const useWeatherStore = defineStore('weather', () => {
    const temperatura = ref(0); // ✅ Hacerlo reactivo con ref()
    const setTemperatura = async () => { // Llamar la API
    try {
        const temp = await getTemperatura();
        temperatura.value = temp; // Asignar la temperatura recibida
        } 
        catch (error) {
        console.error("Error obteniendo la temperatura:", error);
        }
    };
        
    setTemperatura();

    return { temperatura, setTemperatura };
});