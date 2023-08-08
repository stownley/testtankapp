import React from 'react'
import Sidebar from './Sidebar'

const Settings = () => {
  return (
    <>
    <div className='flex'>
    <Sidebar/>
    <div className=' w-full text-center'>
    <h1 className='text-4xl my-3 font-semibold underline'>Settings</h1>
        <table className='w-full text-2xl mt-6'>
            <tr className='border '>
                <td className='p-3 font-semibold'>SiteName</td>
                <td>Shell Sydney</td>
            </tr>
            <tr className='border '>
                <td className='p-3 font-semibold'>IP</td>
                <td>10.192.168.5</td>
            </tr>
            <tr className='border '>
                <td className='p-3 font-semibold'>TimeZone</td>
                <td>Sydney AU</td>
            </tr>
            <tr className='border '>
                <td className='p-3 font-semibold'>No Of Tanks</td>
                <td>4</td>
            </tr>
        </table>
    </div>
    </div>
    </>
  )
}

export default Settings