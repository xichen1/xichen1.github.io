import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";

type weatherDataType = null | {
    now: {
        temp: string,
        feelsLike: string,
        text: string,
        windSpeed: string,
        icon: string
    }
}

const Weather = () => {
    const [weatherData, setWeatherData] = useState<weatherDataType>(null);

    useEffect(() => {
        const fetchData = async () => {
            console.log(`https://devapi.qweather.com/v7/weather/now?location=EF058&lang=en&key=${process.env.WEATHER_API_KEY}`)
            const weatherData = await axios
                .get(`https://devapi.qweather.com/v7/weather/now?location=EF058&lang=en&key=${process.env.WEATHER_API_KEY}`);
            setWeatherData(weatherData.data);
        };
        fetchData().catch(console.error);
    }, []);
    return (
        !weatherData ? null :
            <div className="basis-1/2 flex">
                <div className="">
                    <h3 className="text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                        Weather in Vancouver</h3>
                    <div className="flex mt-2">
                        <div className="mt-2">
                            <i className={`qi-${weatherData.now.icon} text-4xl`}></i>
                        </div>
                        <div className="mt-1 ml-4">
                            {weatherData.now.temp}℃, feels like {weatherData.now.feelsLike}℃,<br/>
                            {weatherData.now.text}, with {weatherData.now.windSpeed} mph wind
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default Weather;