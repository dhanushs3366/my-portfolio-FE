import { LogDetails } from "../models/LogDetails"
import { HTTPMethod, SendReqWithQuery } from "./utils"

export const URL=import.meta.env.VITE_BACKEND_URL



export async function getAdminHello():Promise<string> {
    const response=await SendReqWithQuery<string>(`${URL}/admins/hello`,HTTPMethod.GET)
    return response
}


export async function getLogActivityDetails(to:Date):Promise<LogDetails[]> {
    const response=await SendReqWithQuery<LogDetails[]>(`${URL}/log-details`,HTTPMethod.GET,{to})
    return response
}

