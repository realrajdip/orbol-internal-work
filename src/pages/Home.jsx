import React from 'react'
import { MdOpenInNew } from "react-icons/md";

const Home = () => {
  return (
    <div className='w-full h-screen p-8'>
      <div className='relative w-[250px] h-[300px] bg-red-200 rounded-3xl overflow-hidden'>
      <div className='h-full w-full bg-black'>
            <div className='absolute h-1 w-12 rounded-2xl bg-white top-48 left-[100px]'></div>
            <h3 className='rt text-white absolute top-52 text-center  w-full text-xl font-semibold '>Theritical Ad</h3>
      </div>
          <div className='absolute top bottom-0 w-full h-10 bg-[#f68235] flex justify-center items-center gap-2 text-white'>
          <MdOpenInNew
                style={{
                  fontSize: "1.2rem",
                }} 
            /> 
            <h2 className='font-glimer'>MAKE CHANGES</h2>

          </div>
      </div>
    </div>
  )
}

export default Home
