import { HTTPMethod, SendReqWithQuery } from "./utils"

export const URL=import.meta.env.VITE_BACKEND_URL

export function getLoggerDetails(){
    console.log(import.meta.env.VITE_BACKEND_URL)
}

export async function GetAdminHello() {
    const response=await fetch(`${URL}/admins/hello`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        },
    })

    if (!response.ok){
        console.log("un authorized")
    }
    console.log(await response.text())
}

export async function getAdminHello():Promise<string> {
    const response=(await SendReqWithQuery(`${URL}/admins/hello`,HTTPMethod.GET))as string
    return response
}

export async function logout():Promise<string>{
    const response=(await SendReqWithQuery(`${URL}/admins/logout`,HTTPMethod.POST)) as string

    return response
}