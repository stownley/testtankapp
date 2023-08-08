import React from 'react'
import Sidebar from './Sidebar'

const TankDetails = () => {
  return (
    <div className='flex'>
    <Sidebar/>
    <div className="p-3 h-screen w-full  rounded-md border-2 border-gray-300">
        <div className="flex justify-between items-center p-2">
          <h1 className="text-3xl m-3 ">TANK 1 : Regular</h1>
        </div>
        <div className="flex justify-between space-x-5">
          <div className="w-80 relative h-64 rounded-full bg-blue-500 border-2 border-black overflow-hidden">
            <h1 className="absolute right-10 top-3 border-2 font-semibold rounded-full p-2 z-50 bg-white">
              80%
            </h1>
            <div className={`absolute w-full h-[20%]  bg-white`}></div>
          </div>
          <table className="border-2 table-fixed    font-semibold text-center w-full ">
            <tr>
              <td className="border p-2">Volume</td>
              <td className="border">67184 </td>
            </tr>
            <tr>
              <td className="border p-2">Voltage</td>
              <td className="border">500</td>
            </tr>
            <tr>
              <td className="border p-2">Fuel Height</td>
              <td className="border">346.74mm</td>
            </tr>
            <tr>
              <td className="border p-2">Water Volume</td>
              <td className="border">10%</td>
            </tr>
            <tr>
              <td className="border p-2">temperature</td>
              <td className="border">25.6°C </td>
            </tr>
            <tr>
              <td className="border p-2">Capacity</td>
              <td className="border">65000</td>
            </tr>
            <tr>
              <td className="border p-2">Diameter</td>
              <td className="border">800 mm</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TankDetails