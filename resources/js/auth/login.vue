<template>
    <v-container>
        <v-card>
            <v-card-title>Login</v-card-title>
            <v-card-text>
                <v-form @submit.prevent="login">
                    <v-text-field v-model="email" label="Email" required></v-text-field>
                    <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
                    <v-btn color="primary" type="submit">Login</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'Login',

    data() {
        return {
            email: '',
            password: '',
        };
    },

    methods: {
        login() {
            // Implement login logic here (communicate with Laravel backend)
            // Example: Use Axios to make a POST request to Laravel's login endpoint
            axios.post('/login', {
                email: this.email,
                password: this.password
            }).then(response => {
                // Handle successful login
                console.log('Logged in successfully');
            }).catch(error => {
                // Handle login failure
                console.error('Login error', error);
            });
        }
    }
};
</script>

<style scoped>
.login {
    padding: 20px;
}
</style>
