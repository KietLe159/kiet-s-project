import axiosClient from "./axiosClient";

const databaseApi ={
    getNew(type){
        const url= `/${type}?new=true`
        return axiosClient.get(url)
    },
    findOne(id, type){
        const url= `/${type}/find/${id}`
        return axiosClient.get(url)
    }

}

export default databaseApi;