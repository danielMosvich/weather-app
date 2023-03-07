export async function getWeatherFrom(country) {
    const response = await fetch(`https://weather-app-daniraygod.vercel.app/api/${country}`)
    const data = await response.json()
    return data
}
