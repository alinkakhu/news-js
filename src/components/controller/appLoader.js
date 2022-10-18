import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '868ad601cd41427880c9a5795735d624', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
