function getWeather(woeid) {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
        .then(result => {
            // console.log(result)
            return result.json()
        })
        .then(data => {
            // console.log(data)
            const today = data.consolidated_weather[0]
            console.log(`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`)
        })
        .catch(error => {
            console.log(error)
        })
}

getWeather(2487956)
getWeather(44418)
// getWeather(444182132131231)

async function getWeatherAW(woeid) {
    try {
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
        const data = await result.json()
        // console.log(data)
        const tomorrosw = data.consolidated_weather[1]
        console.log(`Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}`)

    } catch (error) {
        alert(error)
    }
}
getWeatherAW(2487956)
getWeatherAW(44418)