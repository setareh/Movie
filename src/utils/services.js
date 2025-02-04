import axios from 'axios'

const api = axios.create({
    baseURL: 'http://www.omdbapi.com/',
});

export const getData =async (url) => {
    try{
        const response = await api.get(`?apikey=be6dda4f&${url}`)
        return response
    }
    catch (error) {
        console.log(error);
    }
}