export default class Api{

    constructor(API_URL, page) {
        this.API_URL = API_URL;
        this.page = page;
    }

    userList(){
        return fetch(`${this.API_URL}/users?page=${this.page}`)
           .then(e => e.json());
    }
    getApiUrl(){
       return this.API_URL;
    }
// TODO:  переписать работу с апи
}

