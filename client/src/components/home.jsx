import React from 'react'

function home() {
  return (
    <div className='flex h-[79.35vh] z-[-50]'>
        {/* Left Side */}
        <div className=" md:w-1/2 w-screen h-full flex flex-col md:justify-center top-[45vh] md:top-0 items-center md:items-start absolute z-10 md:relative">
           <div className="md:h-[0vh] h-[35vh] rounded-2xl md:p-5 pt-0 md:mt-[-25vh] backdrop-blur-md">
                <h1 className="sm:text-5xl md:text-[10vh] text-[8vh] font-black sm:font-semibold text-[goldenrod] items-stretch ml-10 font-[dosis]">Brij Paridhaan</h1>
                <p className="mt-1 ml-15 sm:text-2xl text-[3vh] md:text-xl font-extrabold font-[prata]"> Woven traditions, crafted with pride.</p>
           </div>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 w-screen h-full overflow-hidden relative ">
           <div className="flex md:rotate-6 rotate-0 gap-2 justify-center md:justify-start ml-20 md:ml-0">
                    <div className="flex flex-col slider ml-[-80px]">
                        <img src="images/1.jpg" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                        <img src="images/2.jpg" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                        <img src="images/3.jpg" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                        <img src="images/4.jpg" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                        <img src="images/2.jpg" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                        <img src="images/6.png" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                        <img src="images/8.png" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                        <img src="images/9.png" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                        <img src="images/10.png" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                        <img src="images/11.jpg" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                        <img src="images/1.jpg" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                        <img src="images/2.jpg" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                    </div>
                <div className="flex flex-col slider2">
                    <img src="images/1.jpg" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                    <img src="images/2.jpg" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                    <img src="images/3.jpg" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                    <img src="images/4.jpg" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                    <img src="images/3.jpg" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                    <img src="images/6.png" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                    <img src="images/8.png" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                    <img src="images/9.png" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                    <img src="images/10.png" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                    <img src="images/11.jpg" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                </div>
                <div className="flex flex-col slider">
                    <img src="images/1.jpg" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                    <img src="images/2.jpg" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                    <img src="images/3.jpg" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                    <img src="images/4.jpg" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                    <img src="images/3.jpg" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                    <img src="images/6.png" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                    <img src="images/8.png" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                    <img src="images/9.png" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                    <img src="images/10.png" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                    <img src="images/11.jpg" className='w-[32vh] border-1 rounded-md h-[38vh] mt-2 aspect-3/4 shadow-xl' alt="" />
                </div>
           </div>
        </div>
    </div>
  )
}

export default home
