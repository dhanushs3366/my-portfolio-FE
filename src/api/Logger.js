
import {ContentType, HTTPMethod, SendReqWithQuery } from "./utils"

export const URL=import.meta.env.VITE_BACKEND_URL



export async function getAdminHello(){
    const response=await SendReqWithQuery(`${URL}/admins/hello`,HTTPMethod.GET)
    return response
}


export async function getLogActivityDetails(to){
    const response=await SendReqWithQuery(`${URL}/log-details`,HTTPMethod.GET,{to})
    return response
}

export async function createBlog(title,content){
    const response=await SendReqWithQuery(`${URL}/admins/blog`,HTTPMethod.POST,null,{content,title},ContentType.form)
    return response
}

export async function getBlogs(){
    const blogs=await SendReqWithQuery(`${URL}/blogs`,HTTPMethod.GET)
    return blogs
}