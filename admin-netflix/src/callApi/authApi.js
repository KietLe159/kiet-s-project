import axiosClient from "./axiosClient";

export const authApi= {
    login(data){
        const url= "/auth/login"
        return axiosClient.post(url, data)
    }
}