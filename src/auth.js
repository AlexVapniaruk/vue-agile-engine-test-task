import axios from 'axios';

class Auth {
    constructor() {
        let token = window.localStorage.getItem('token');
        if(token && token !== 'undefined') {
            this.token = token;
        }
        if (this.token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token;
        } else {
            axios.defaults.headers.common['Authorization'] = null;
        }
    }

    login (token) {
        window.localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        console.log(token);
        this.token = token;
    }

    check () {
        return !! this.token;
    }

    async getToken() {
        let response = await window.api.call('post', 'auth', {
            'apiKey': process.env.VUE_APP_API_KEY
        });
        if(response.data.auth) {
            this.login(response.data.token);
        }
    }
}

export default Auth;
