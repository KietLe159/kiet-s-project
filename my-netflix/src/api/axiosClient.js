import axios from "axios"

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_baseURL,
    timeout: 2500,
    headers:{
        "Content-type": "application/json"
    },
})

axiosClient.interceptors.request.use(config=>{
    config.headers.token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODQzMzc0NWI5YTE5YmM3OWE5MGZjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTM0ODgzNSwiZXhwIjoxNjU1MzUyNDM1fQ.2M16FyMx-v9wtu7LzvpEUEzxbiV7C_Tmvp7Y0Qdqhp8"
    return config
}, error=>{
    throw error;
})

axiosClient.interceptors.response.use(req =>
    req.data
    , error =>{
    throw error
    })

export default axiosClient;