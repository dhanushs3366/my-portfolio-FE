import "./App.css";

async function Login(e: React.FormEvent<HTMLFormElement>):Promise<Boolean> {
  e.preventDefault();
  const form = document.querySelector("#login-form") as HTMLFormElement;
  if (form) {
    const username = (form.elements.namedItem("username") as HTMLInputElement)
      .value;

    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    console.log("Username:", username);
    console.log("Password:", password);

    const URL=import.meta.env.VITE_BACKEND_URL

    const response=await fetch(`${URL}/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/x-www-form-urlencoded",
      },
      body:new URLSearchParams({
        username:username,
        password:password
      })

    })

    if (!response.ok){
      console.log("Login failed")
    }
    console.log("login succesful")
  }

  return false
}
function App() {
  return (
    <>
      <div>
        <h1>Login</h1>
        <form id="login-form" onSubmit={Login}>
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

export default App;
