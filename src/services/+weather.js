export async function getWeatherFrom(country) {
    const response = await fetch(`/api/${country}`)
    const data = await response.json()
    return data
}
