let valueSearch = document.getElementById('valueSearch')
let city = document.getElementById('city')
let temperature = document.getElementById('temperature')
let description = document.querySelector('.description')
let clouds = document.getElementById('clouds')
let humidity = document.getElementById('humidity')
let pressure = document.getElementById('pressure')
let form = document.querySelector('form')
let main = document.querySelector('main')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (valueSearch.value != '') {
        searchWeather()
    }
})


let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=da0908cb5d185e2778fa181372f1aa56`
const searchWeather = () => {
    fetch(url + '&q=' + valueSearch.value)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.cod == 200) {
            city.querySelector('figcaption').innerText = data.name;
            city.querySelector('img').src = `https://flagsapi.com/${data.sys.country}/flat/64.png`
            temperature.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
            temperature.querySelector('figcaption span').innerText = data.main.temp
            description.innerText = `Description: ${data.weather[0].description}`
            clouds.innerText = `Clouds: ${data.clouds.all}`
            humidity.innerText = `Humidity: ${data.main.humidity}`
            pressure.innerText = `Pressure: ${data.main.pressure}`
        }else{
            main.classList.add('error')
            setTimeout(()=>{
                main.classList.remove('error')
            },1000)
        }
        valueSearch.value = ''
    })
}

const intiApp = () => {
    valueSearch.value = 'Delhi'
    searchWeather()
}
intiApp()