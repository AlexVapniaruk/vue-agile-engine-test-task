window.axios = require('axios');
window.axios.defaults.baseURL = process.env.VUE_APP_APP_URL;
window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};