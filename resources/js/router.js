import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/main.vue';
import Contact from './components/contact.vue';
import Order from './components/order.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/order', name: 'Order', component: Order },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
