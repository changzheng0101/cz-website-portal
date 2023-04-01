import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import './assets/css/main.css';
import NavLink from './components/NavLink.vue';
import BaseButton from './components/base/Button.vue';
import BaseFooter from './components/base/Footer.vue';
import BaseNavbar from './components/base/Navbar.vue';
import BaseSection from './components/base/Section.vue';
import LandingListItem from './components/landing/ListItem.vue';

import '@fortawesome/fontawesome-free/css/all.css';
import 'vue-material-design-icons/styles.css';

import icons from './plugins/icon';

//  引入之后mock才可以用
import '/mock/user';
import '/mock/blog';

const app = createApp(App);

// 注册全局组件
app.component('BaseButton', BaseButton);
app.component('BaseFooter', BaseFooter);
app.component('BaseNavbar', BaseNavbar);
app.component('BaseSection', BaseSection);
app.component('NavLink', NavLink);
app.component('LandingListItem', LandingListItem);
// 注册icon
Object.entries(icons).forEach(([name, icon]) => {
  app.component(name, icon);
});

app.use(createPinia());
app.use(router);

app.mount('#app');
