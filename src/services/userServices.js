import axios from "axios";


const baseUrl = "http://localhost:3001/user"


const login =  (credential) =>{
    return axios.post(`${baseUrl}/login/`,credential)
}

const register = (credential) =>{
    return axios.post(`${baseUrl}/register`,credential)
}

export default {login,register}