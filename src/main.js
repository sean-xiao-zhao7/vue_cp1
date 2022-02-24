import { createApp } from 'vue';
import App from './App.vue';
import Card from './components/UI/Card';
import Button from './components/UI/Button';
import Modal from './components/UI/Modal';

const app = createApp(App);
app.component('card', Card);
app.component('the-button', Button);
app.component('the-modal', Modal);
app.mount('#app');
