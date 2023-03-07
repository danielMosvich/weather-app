import { json } from '@sveltejs/kit';

const FETCH_OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '91a0384677mshb0564a767fb2322p15ed48jsn41f4fd389309',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};
export async function GET({params}) {
    const countryLocate = params.country
    const res = await fetch(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=${countryLocate}`,
        FETCH_OPTIONS
    );
    const date = await res.json();
    const { location, current } = date;
    const { country, localtime, name } = location;
    const { condition, humidity, feelslike_c, temp_c, wind_kph, wind_dir, is_day } = current;
    const { icon, text } = condition;

    return json({
        locationName: name,
        conditionIcon: icon,
        conditionText: text,
        country,
        localtime,
        name,
        humidity,
        isDay: is_day,
        feelsLike: feelslike_c,
        temperature: temp_c,
        windSpeed: wind_kph,
        windDir: wind_dir
    })
}
