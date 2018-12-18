import About from './components/about/About.vue';
import Home from './components/Home.vue';
import Gallery from './components/gallery/Gallery.vue';
import Weather from './components/weather/Weather.vue';
import CurrentWeather from './components/api/CurrentWeather.vue';

export const routes = [
  { path: '', component: Home},
  { path: '/about', component: About},
  { path: '/gallery', component: Gallery},
  { path: '/weather', component: Weather},
  { path: '/api', component: CurrentWeather}
];
