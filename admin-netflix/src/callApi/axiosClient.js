import axios from "axios"

const axiosClient= axios.create({
    baseURL: process.env.REACT_APP_API_baseURL,
    headers: {'Content-type': 'application/json'},
    timeout: 2500
})

axiosClient.interceptors.request.use( config=>{
    config.headers.token= "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODQzMzc0NWI5YTE5YmM3OWE5MGZjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzcwODgyMCwiZXhwIjoxNjU3NzEyNDIwfQ.Tgf39igM_PH6fWwmXVC4sg6s0NH6WWyapZbg1f6lt34"
    return config
}, error=>{
     throw error
})

axiosClient.interceptors.response.use( res=>{
    return res.data
}, error=>{
    throw error
})

export default axiosClient