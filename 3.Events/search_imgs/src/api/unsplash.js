import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4mHJiU5YwSEvgSRW33TXL-tJ-B7GmfqtM1KkqiI0sjU'
    }
});  