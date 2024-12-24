import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAdminHello, getLogActivityDetails } from "../api/Logger";
import { useUser } from "../context/UserContext";
import "../css/custom/Navbar.css"
function Navbar() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();


 function toggleFullScreen() {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };
  async function handleHello() {
    const response = await getAdminHello();
    console.log(`resp: ${response}`);
  }
  async function handleGetLogDetails() {
    const to = new Date();
    const logDetails = await getLogActivityDetails(to);


  }

  const navItems = [
    { label: "Home", onClick: () => navigate("/") },
    { label: "Admin Hello", onClick: handleHello },
    { label: "Log Details", onClick: handleGetLogDetails },
    { label: "Blogs", onClick: () => navigate("/blogs") },
  ];

  if (user && user.isAdmin) {
    navItems.push({
      label: "new blog",
      onClick: () => navigate("/admins/blog/new"),
    });
  }
  return (
    <div className="w-full flex justify-between">
      <div className="absolute w-full bg-gray-900 h-9 flex justify-between opacity-75 z-0"></div>

      <div className="w-[10%] bg-gray-800 h-9 z-20 tab-shape rounded-tr-lg ">blah</div>
      <div className="w-[10%]  tab-shap rounded-tr-lg flex justify-evenly gap-x-2 px-3">
        <button  > - </button>
        <button onClick={toggleFullScreen}> m </button>
        <button > x </button>
      </div>
    </div>
  );
}

export default Navbar;
