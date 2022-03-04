// Select Elements

const icon = document.querySelector('.weather.icon');
const temp = document.querySelector('.temperature.value p');
const desc = document.querySelector('.temperature-description');
const location = document.querySelector('.location p');
const notification = document.querySelector('.notification');

// App data

const weather = {};
weather.temperature = {
    unit: 'celsius'
}