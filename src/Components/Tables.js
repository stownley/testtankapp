import Settings from "feather-icons-react/build/IconComponents/Settings";
import React from "react";
import {useNavigate} from 'react-router-dom'
const Tables = () => {
  const navigate=useNavigate()
  return (
    <div className="tables p-2  w-full h-screen overflow-scroll flex flex-wrap space-3 overflow-y-scroll bg-slate-100">
      <div className="p-2 m-1  rounded-md border-2 border-gray-300 w-60 h-fit">
        <div className="flex flex-wrap justify-between items-center p-2">
          <h1 className="text-xl m-3 font-semibold">TANK 1 : Regular</h1>
          <Settings className="bg-blue-300  h-8 w-8 rounded-full p-1 hover:scale-105 cursor-pointer"  onClick={()=>navigate("/details")} />
        </div>
        <div className="flex flex-wrap space-x-5">
          <div className="w-24 relative h-24 rounded-full bg-blue-500 border-2 border-black overflow-hidden">
            <h1 className="absolute right-10 border-2 font-semibold rounded-full p-2 z-50 bg-white">
              80%
            </h1>
            <div className={`absolute w-full h-[20%]  bg-white`}></div>
          </div>
          <table className="border-2 table-fixed    font-semibold text-center w-[10rem] ">
            <tr>
              <td className="border p-2">Fuel Height</td>
              <td className="border">80%</td>
            </tr>
            <tr>
              <td className="border p-2">Fuel Density</td>
              <td className="border">763</td>
            </tr>
            <tr>
              <td className="border p-2">Fuel Height</td>
              <td className="border">80%</td>
            </tr>
            <tr>
              <td className="border p-2">Fuel Height</td>
              <td className="border">80%</td>
            </tr>
            <tr>
              <td className="border p-2">Fuel Height</td>
              <td className="border">80%</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="p-2 m-1 rounded-md border-2 border-gray-300 w-fit h-fit">
        <div className="flex flex-wrap justify-between items-center p-2">
          <h1 className="text-xl m-3 font-semibold">TANK 2 : Petrol</h1>
          <Settings className="bg-blue-300  h-8 w-8 rounded-full p-1 hover:scale-105 cursor-pointer"  onClick={()=>navigate("/details")}/>
        </div>
        <div className="flex flex-wrap space-x-5">
          <div className="w-44 relative h-44 rounded-full bg-red-500 border-2 border-black overflow-hidden">
            <h1 className="absolute right-10 border-2 font-semibold rounded-full p-2 z-50 bg-white">
              50%
            </h1>
            <div className={`absolute w-full h-[50%]  bg-white`}></div>
          </div>
          <table className="border-2 table-fixed    font-semibold text-center w-[20rem] ">
            <tr>
              <td className="border p-2">Fuel Height</td>
              <td className="border">50%</td>
            </tr>
            <tr>
              <td className="border p-2">Fuel Density</td>
              <td className="border">760</td>
            </tr>
            <tr>
              <td className="border p-2">Fuel Height</td>
              <td className="border">80%</td>
            </tr>
            <tr>
              <td className="border p-2">Fuel Height</td>
              <td className="border">80%</td>
            </tr>
            <tr>
              <td className="border p-2">Fuel Height</td>
              <td className="border">80%</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="p-2 m-1 rounded-md border-2 border-gray-300 w-fit h-fit">
        <div className="flex flex-wrap justify-between items-center p-2">
          <h1 className="text-xl m-3 font-semibold">TANK 3 : Diesel</h1>
          <Settings className="bg-blue-300  h-8 w-8 rounded-full p-1 hover:scale-105 cursor-pointer"  onClick={()=>navigate("/details")}/>
        </div>
        <div className="flex flex-wrap space-x-5">
          <div className="w-44 relative h-44 rounded-full bg-green-500 border-2 border-black overflow-hidden">
            <h1 className="absolute right-10 border-2 font-semibold rounded-full p-2 z-50 bg-white">
              65%
            </h1>
            <div className={`absolute w-full h-[35%]  bg-white`}></div>
          </div>
          <table className="border-2 table-fixed    font-semibold text-center w-[20rem] ">
            <tr>
              <td className="border p-2">Fuel Height</td>
              <td className="border">65%</td>
            </tr>
            <tr>
              <td className="border p-2">Fuel Density</td>
              <td className="border">760</td>
            </tr>
            <tr>
              <td className="border p-2">Fuel Height</td>
              <td className="border">80%</td>
            </tr>
            <tr>
              <td className="border p-2">Fuel Height</td>
              <td className="border">80%</td>
            </tr>
            <tr>
              <td className="border p-2">Fuel Height</td>
              <td className="border">80%</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="p-2 m-1 rounded-md border-2 border-gray-300 w-fit h-fit">
        <div className="flex flex-wrap justify-between items-center p-2">
          <h1 className="text-xl m-3 font-semibold">TANK 4 : Other</h1>
          <Settings className="bg-blue-300  h-8 w-8 rounded-full p-1 hover:scale-105 cursor-pointer" onClick={()=>navigate("/details")} />
        </div>
        <div className="flex flex-wrap space-x-5">
          <div className="w-44 relative h-44 rounded-full bg-red-500 border-2 border-black overflow-hidden">
            <h1 className="absolute right-10 border-2 font-semibold rounded-full p-2 z-50 bg-white">
              25%
            </h1>
            <div className={`absolute w-full h-[75%] bg-white`}></div>
          </div>
          <table className="border-2 table-fixed    font-semibold text-center w-[20rem] ">
            <tr>
              <td className="border p-2">Fuel Height</td>
              <td className="border">25%</td>
            </tr>
            <tr>
              <td className="border p-2">Fuel Density</td>
              <td className="border">760</td>
            </tr>
            <tr>
              <td className="border p-2">Fuel Height</td>
              <td className="border">80%</td>
            </tr>
            <tr>
              <td className="border p-2">Fuel Height</td>
              <td className="border">80%</td>
            </tr>
            <tr>
              <td className="border p-2">Fuel Height</td>
              <td className="border">80%</td>
            </tr>
          </table>
        </div>
      </div>
  
  
</div>
  );
};

export default Tables;
