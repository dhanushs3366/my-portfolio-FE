import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
function Login() {
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const {setUser}=useUser()
  async function login(e) {
    e.preventDefault();
    const form = document.querySelector("#login-form");
    if (form) {
      const username = form.elements.namedItem("username").value;
      const password = form.elements.namedItem("password").value;

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
        setLoginSuccess(false);
      } else {
        setLoginSuccess(true);
        setUser({
          username,
          isAdmin:true
        })
      }
    }
    return false;
  }

  useEffect(() => {
    if (loginSuccess) {
      navigate("/");
    }
  }, [loginSuccess]);

  return (
    <div className="flex justify-center items-center w-full h-screen bg-black">
      <form
        id="login-form"
        onSubmit={login}
        className="bg-black border border-green-600 p-8 rounded-md shadow-lg w-80"
      >
        <h2 className="text-3xl text-green-500 font-bold text-center mb-6">
          Admin Login
        </h2>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-green-500 font-medium mb-2"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="w-full p-2 bg-black border border-green-600 text-green-500 placeholder-green-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-green-500 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full p-2 bg-black border border-green-600 text-green-500 placeholder-green-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-black py-2 px-4 rounded hover:bg-green-500 transition duration-300"
          onClick={login}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
