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
    const cityId = "EF058";
    useEffect(() => {
        axios.get(`https://weather.ppxa.link/weather/${cityId}`)
            .then((res) => setWeatherData(res.data))
            .catch((_err) => console.log("Weather service is currently unavailable."));
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