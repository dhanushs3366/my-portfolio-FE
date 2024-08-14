import { useEffect, useState } from "react";
import { GetAdminHello } from "../api/Logger";
import { useNavigate } from "react-router-dom";

export function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() || null;
  }
  return null;
}

function Login() {
  const navigate=useNavigate()
  const [loginSuccess, setLoginSuccess] = useState<Boolean>(false);
  GetAdminHello();

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = document.querySelector("#login-form") as HTMLFormElement;
    if (form) {
      const username = (form.elements.namedItem("username") as HTMLInputElement)
        .value;

      const password = (form.elements.namedItem("password") as HTMLInputElement)
        .value;

      console.log("Username:", username);
      console.log("Password:", password);

      const URL = import.meta.env.VITE_BACKEND_URL;

      const response = await fetch(`${URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username: username,
          password: password,
        }),
        credentials: "include",
      });

      if (!response.ok) {
        console.log("Login failed");
        setLoginSuccess(false);
      }
      console.log("login succesful");
      console.log("Auth token", getCookie("auth_token"));

      setLoginSuccess(true);
    }

    return false;
  }

  useEffect(()=>{
    if(loginSuccess){
      navigate("/")
    }
  },[loginSuccess])

  return (
    <>
      <div>
        <h1>Login</h1>
        <form id="login-form" onSubmit={login}>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" />
          <br />
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Login;
