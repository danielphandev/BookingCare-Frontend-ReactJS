import axios from '../axios';

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password }); // {email:userEmail, password: userPassword}
}

const getAllUSers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`)
}

export {
    handleLoginApi,
    getAllUSers
}



