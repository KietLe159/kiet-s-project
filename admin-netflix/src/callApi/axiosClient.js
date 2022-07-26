import axios from "axios"


const axiosClient= axios.create({
    baseURL: process.env.REACT_APP_API_baseURL,
    headers: {'Content-type': 'application/json'},
    timeout: 2500
})
axiosClient.defaults.withCredentials= true;
axiosClient.interceptors.request.use( config=>{
   
    config.headers.token= localStorage.getItem("token");
  
    return config
}, error=>{
     throw error
})

axiosClient.interceptors.response.use( res=>{
    console.log(res)
    return res.data
}, error=>{

    throw error
})

export default axiosClient