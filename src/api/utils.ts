
export const enum HTTPMethod{
    GET="GET",
    POST="POST",
    PUT="PUT",
    PATCH="PATCH",
    DELETE="DELETE"
}

type HTTPResponse=string

export async function SendReqWithQuery(url:string,method:HTTPMethod,query? :any,schema?:any):Promise<HTTPResponse> {
    const requestBody:RequestInit={
        method:method,
        headers:{
            "Content-Type":"application/json"
        },
        credentials:"include",
        body: JSON.stringify(schema)
    }

    if (method===HTTPMethod.GET || method===HTTPMethod.DELETE){
        delete requestBody.body
    }

    const queryString=new URLSearchParams(query).toString()
    const URL=query? `${url}?${queryString}`:url

    const response=await fetch(URL,requestBody)

    if(!response.ok){
        const errText=await response.text()
        throw new Error(`error: ${errText}`)
    }
    return response.json()
}

