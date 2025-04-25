import axios from "axios"
import {create} from "zustand"
import { axiosInstance } from "../lib/axios.js"

export const useAuthStore = create((set)=>({
    authUser: null,
    isSigningUp: false,
    isLoggingIng: false,
    usUpdatingProfile: false,

    isCheckingAuth:true,
    checkAuth: async ()=>{
        try{
            const res = await axiosInstance.get("/auth/check");
        }catch(error){
            set({authUser:null});
        }finally{
            set({isCheckingAuth:false});
        }
    }
}))