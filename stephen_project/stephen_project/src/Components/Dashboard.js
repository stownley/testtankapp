import React from "react";
import Sidebar from "./Sidebar";
import Tables from "./Tables";

const Dashboard = () => {
  return (
    <>
    <div className="flex"> <Sidebar />
      <Tables/></div>
     
    </>
  );
};

export default Dashboard;
