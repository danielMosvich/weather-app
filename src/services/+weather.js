export async function getWeatherFrom(country) {
    const response = await fetch(`https://weather-app-eight-ashy-34.vercel.app/api/${country}`)
    const data = await response.json()
    return data
}
