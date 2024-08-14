import { useNavigate } from "react-router-dom"
import { getAdminHello, logout } from "../api/Logger"
import { getCookie } from "./Login"

async function handleHello(){
    const response=await getAdminHello()
    console.log(`resp: ${response}`)
}

function handleCookie(){
    const str=getCookie("auth_token")
    console.log(`Cookie: ${str}`)
}

async function handleLogout(){
    const response=await logout()
    console.log(`logged out ${response}`)
}
function Home(){
    const navigate=useNavigate()
    return (
        <>
            <ul>
                <li onClick={()=>{navigate("/login")}}>Login</li>
                <li onClick={handleLogout}>Logout</li>
                <li onClick={handleHello}>Admin Hello</li>
                <li onClick={handleCookie}>Print Cookie</li>
                <li>Get key input history</li>
                <li>Home</li>
            </ul>
        </>
    )
}

export default Home