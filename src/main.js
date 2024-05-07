
import SlideOne from "./components/Banner/SlideOne.vue";
import SlideTwo from "./components/Banner/SlideTwo.vue";
import Service from "./components/Service.vue";
import About from "./components/About.vue";
import AboutArea from "./components/About/AboutArea.vue";
import OurTeam from "./components/About/OurTeam.vue";
import Counter from "./components/Counter.vue";
import Cause from "./components/Cause.vue";
import Offer from "./components/Offer.vue";
import Brand from "./components/Brand.vue";
import Process from "./components/Process.vue";
import Testimonial from "./components/Testimonial.vue";
import Blog from "./components/Blog.vue";
import { createApp } from 'vue'
import router from './router';
import App from './App.vue'



const app = createApp(App);
app.use(router);
app.component('SlideOne', SlideOne);
app.component('SlideTwo', SlideTwo);
app.component('Service', Service);
app.component('About', About);
app.component('AboutArea', AboutArea);
app.component('Counter', Counter);
app.component('Cause', Cause);
app.component('Offer', Offer);
app.component('Brand', Brand);
app.component('Process', Process);
app.component('Testimonial', Testimonial);
app.component('Blog', Blog);
app.component('OurTeam', OurTeam);
app.mount('#app');

