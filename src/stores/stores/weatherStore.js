import { defineStore } from "pinia";
import { ref } from "vue";
import { getTemperatura } from "@/helpers/getWeather"; 

export const useWeatherStore = defineStore('weather', () => {
    const temperatura = ref(0); 
    const setTemperatura = async () => { 
    try {
        const temp = await getTemperatura();
        temperatura.value = temp; 
        } 
        catch (error) {
        console.error("Error obteniendo la temperatura:", error);
        }
    };
        
    setTemperatura();

    return { temperatura, setTemperatura };
});