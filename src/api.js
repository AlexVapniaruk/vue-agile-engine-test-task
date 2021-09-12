class Api {
    constructor () {}
    call (requestType, url, data = null) {
        return new Promise((resolve, reject) => {
            window.axios[requestType](url, data)
                .then(response => {
                    resolve(response);
                })
                .catch(({response}) => {
                    if (response.status === 401) {
                        let token = window.localStorage.getItem('token');
                        if(token && token !== 'undefined') {
                            //logout
                        }
                    }
                    reject(response);
                });
        });
    }
}

export default Api;
