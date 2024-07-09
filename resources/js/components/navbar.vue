<template>
    <div class="nav-bar bg-light border-bottom">
        <div class="container">
            <div class="navbar align-items-center">
                <div class="logo-holder me-lg-auto">
                    <img src="../../assets/images/logo.png" height="100px" width="auto">
                </div>
                <nav class="nav-menu d-flex">
                    <a href="#home" class="nav-link p-3" :class="{ active: isActive('#home') }">HOME</a>
                    <a href="#contact" class="nav-link p-3" :class="{ active: isActive('#contact') }">CONTACT US</a>
                    <!-- <a href="#order" class="nav-link p-3 bg-blue text-white" :class="{ active: isActive('#order') }">BUY
                        NOW</a> -->
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            currentHash: window.location.hash,
        };
    },
    methods: {
        isActive(hash) {
            return this.currentHash === hash;
        },
        updateHash() {
            this.currentHash = window.location.hash;
        },
    },
    created() {
        window.addEventListener('hashchange', this.updateHash);
    },
    beforeUnmount() {
        window.removeEventListener('hashchange', this.updateHash);
    },
};
</script>

<style scoped>
.nav-bar {
    position: sticky;
    top: 0;
    z-index: 1000;
}

.logo-holder {
    margin-right: 10px;
}

.active {
    font-weight: bold;
}

.nav-link:hover {
    background-color: #9EDDFF !important;
}
</style>
