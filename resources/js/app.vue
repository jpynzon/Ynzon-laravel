<template>
    <div id="app">
        <Navbar />
        <Home />
        <Order />
        <Contact />
        <Footer />
    </div>
</template>

<script>
import Navbar from './components/navbar.vue';
import Home from './components/main.vue';
import Order from './components/order.vue';
import Contact from './components/contact.vue';
import Footer from './components/footer.vue';

export default {
    name: 'App',
    components: {
        Navbar,
        Home,
        Order,
        Contact,
        Footer
    }
};
</script>

<style>
/* Global styles if needed */
body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
</style>
