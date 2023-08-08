import { User,Book,CheckSquare,Clipboard,BarChart ,Home,Settings} from "feather-icons-react/build/IconComponents";
import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate =useNavigate()
  return (
    <>
      <div className="h-screen w-64 bg-blue-300 px-5">
   <div className="flex space-x-3 justify-center items-center my-4 text-2xl"><User className="border rounded-full h-12 w-12"/><h1 className=" font-bold text-white">Stephen T.</h1></div>
        <div className="sidebaropt" onClick={()=>navigate("/")}><Home/><h1>Dashboard</h1></div>
        <div className="sidebaropt"><CheckSquare/><h1>Reports</h1></div>
        <div className="sidebaropt" onClick={()=>navigate("/setting")}><Settings /><h1>Setting</h1></div>
        <div className="sidebaropt"><Clipboard/><h1>Diagnosis</h1></div>
        <div className="sidebaropt"><BarChart/><h1>Updates</h1></div>
        <div className="sidebaropt"><Book/><h1>Print</h1></div>
        <div className="sidebaropt"><User/><h1>Admin</h1></div>
        <div className="text-center text-Black font-bold hover:bg-white hover:shadow-slate-300 hover:shadow-inner cursor-pointer w-full px-2 py-1 rounded-lg mb-3 "><h1>Sign Out</h1></div>
      </div>
    </>
  );
};

export default Sidebar;
