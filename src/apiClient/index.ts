import axios from 'axios';

const apiClient = axios.create({
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default apiClient;