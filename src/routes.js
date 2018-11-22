import About from './components/about/About.vue';
import Home from './components/Home.vue'
import Gallery from './components/gallery/Gallery.vue'

export const routes = [
  { path: '', component: Home},
  { path: '/about', component: About},
  { path: '/gallery', component: Gallery}
];
