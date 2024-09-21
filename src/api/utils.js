export const HTTPMethod = Object.freeze({
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE'
  });

  export const ContentType=Object.freeze({
    json:"application/json",
    form:"application/x-www-form-urlencoded"
  })
  export async function SendReqWithQuery(url, method, query, schema, contentType = ContentType.json) {
    const headers = {
        "Content-Type": contentType
    };

    let body;

    if (contentType === ContentType.json) {
        body = JSON.stringify(schema); 
    } else if (contentType === ContentType.form) {
        const formData = new URLSearchParams();
        for (const key in schema) {
            formData.append(key, schema[key]);
        }
        body = formData.toString();
    }

    if (method === "GET" || method === "DELETE") {
        body = null; 
    }

    const queryString = new URLSearchParams(query).toString();
    const finalURL = query ? `${url}?${queryString}` : url;

    const response = await fetch(finalURL, {
        method,
        headers,
        credentials: "include",
        body
    });

    if (!response.ok) {
        const errText = await response.text();
        throw new Error(`error: ${errText}`);
    }

    return response.json(); // Return the parsed JSON response
}
