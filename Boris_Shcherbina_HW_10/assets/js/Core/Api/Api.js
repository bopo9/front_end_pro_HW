export class Api {
    #API_URL = 'https://reqres.in/api';

    constructor() {

    }

    get ApiUrl(){
        return this.#API_URL;
    }
}