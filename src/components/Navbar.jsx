import { useNavigate } from "react-router-dom";
import { getAdminHello, getLogActivityDetails } from "../api/Logger";

function Navbar() {
  const navigate = useNavigate();
  async function handleHello() {
    const response = await getAdminHello();
    console.log(`resp: ${response}`);
  }
  async function handleGetLogDetails() {
    const to = new Date();
    const logDetails = await getLogActivityDetails(to);

    console.log(logDetails.length);
  }

  const navItems = [
    { label: "Home", onClick: () => navigate("/") },
    { label: "Admin Hello", onClick: handleHello },
    { label: "Log Details", onClick: handleGetLogDetails },
  ];

  return (
    <div className="w-[100%] bg-blue-400 h-[5vh] flex justify-evenly gap-x-2 gap-y-1 p-2">
      {navItems.map((item, index) => (
        <div key={index} className="w-auto h-auto  p-2">
          <p onClick={item.onClick} className="hover:cursor-pointer">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Navbar;
