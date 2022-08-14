import { authApi } from "../callApi/authApi"
import { loginStore } from '../Redux/storeLoginRedux';
export const fetchLogout= async ()=>{
    
    try{ 
        await authApi.logout();
        loginStore.dispatch({type:"LOG_OUT"})
    }catch(err){
        
        throw(err)
    }
}