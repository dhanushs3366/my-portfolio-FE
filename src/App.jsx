import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Navbar from "./components/Navbar";
import { UserProvider } from "./context/UserContext";
import CreateBlog from "./components/blogs/CreateBlogForm";
import ViewBlogs from "./components/blogs/ViewBlogs";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<ViewBlogs />} path="/blogs" />
          <Route path="admins/blog/new" element={<CreateBlog />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
