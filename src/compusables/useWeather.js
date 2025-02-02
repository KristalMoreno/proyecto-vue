import { useWeatherStore } from "@/stores/stores/weatherStore"; 
import { getTemperatura } from "@/helpers/getWeather.js";


export const useWeadher = async () => {
    const temperatura = await getTemperatura();
    const weatherStore = useWeatherStore();

    weatherStore.temperatura = temperatura; 
};