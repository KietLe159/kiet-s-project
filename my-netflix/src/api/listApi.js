import axiosClient from "./axiosClient";

const listApi=(params)=>{
    
    const response=  axiosClient.get("/list",{params})
    return response;
}
export default listApi;