import { useEffect, useState } from "react"
import { getBlogs } from "../../api/Logger"
import BlogCard from "./BlogCard"


function ViewBlogs(){
    const [blogs,setBlogs]=useState(null)
    async function handleGetBlogs(){
        const blogs=await getBlogs()
        setBlogs(blogs)
    }
    useEffect(()=>{
        handleGetBlogs()
    },[])
    return (
        <div className="w-[90%] h-auto mx-auto grid grid-cols-3 gap-x-6 gap-y-4 mt-3">
            {blogs && blogs.map((blog,key)=>{
                return <div key={key}><BlogCard blog={blog}/></div>
            })}
        </div>
    )
}

export default ViewBlogs