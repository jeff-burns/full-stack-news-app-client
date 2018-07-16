const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:3000/api/v1/headlines' : 'https://googlenews-api.herokuapp.com//api/v1/dogs';

export default {
    async getAll() {
        const response = await fetch(API_URL);
        return await response.json();
    }
}