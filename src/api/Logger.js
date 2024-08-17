
import {HTTPMethod, SendReqWithQuery } from "./utils"

export const URL=import.meta.env.VITE_BACKEND_URL



export async function getAdminHello(){
    const response=await SendReqWithQuery(`${URL}/admins/hello`,HTTPMethod.GET)
    return response
}


export async function getLogActivityDetails(to){
    const response=await SendReqWithQuery(`${URL}/log-details`,HTTPMethod.GET,{to})
    return response
}

