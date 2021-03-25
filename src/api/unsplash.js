import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID QDc4-PE75-oaAZlsubMn2lPj6KMk9Z_r-4NWumCN9vo'
    }
});