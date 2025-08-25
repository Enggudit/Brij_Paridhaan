import React from 'react'

function history() {
  return (
    <div className='w-screen p-10  bg-gradient-to-b from-amber-100 to-amber-200'>
        <h1 className='flex flex-wrap justify-center text-[5vh] font-bold text-black'>THREE GENERATIONS, <span className='text-amber-600'> ONE TIMELESS VISION</span></h1>
        <div className="flex justify-around flex-wrap gap-3 md:gap-0 items-center mt-12">
            <div className="w-[200px] h-[200px] relative group [perspective:1000px]">
                {/* Inner wrapper (rotates) */}
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Side (Image) */}
                    <div className="absolute inset-0 [backface-visibility:hidden]">
                        <img 
                            src="images/1st.png" 
                            alt="Front" 
                            className="w-full h-full object-cover rounded-full border" 
                        />
                    </div>
                    {/* Back Side (Heading) */}
                    <div className="absolute inset-0 flex justify-center items-center bg-amber-100 rounded-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <h1 className="text-center text-lg font-bold text-amber-900 p-2">
                            Late Shri Gopal Das ji Agarwal
                        </h1>
                    </div>
                </div>
            </div>
            <div className="w-[200px] h-[200px] relative group [perspective:1000px]">
                {/* Inner wrapper (rotates) */}
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Side (Image) */}
                    <div className="absolute inset-0 [backface-visibility:hidden]">
                        <img 
                            src="images/2nd.png" 
                            alt="Front" 
                            className="w-full h-full object-cover rounded-full border" 
                        />
                    </div>
                    {/* Back Side (Heading) */}
                    <div className="absolute inset-0 flex justify-center items-center bg-amber-100 rounded-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <h1 className="text-center text-lg font-bold text-amber-900 p-2">
                            Shri Mahesh Agarwal Ji
                        </h1>
                    </div>
                </div>
            </div>
            <div className="w-[200px] h-[200px] relative group [perspective:1000px]">
                {/* Inner wrapper (rotates) */}
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Side (Image) */}
                    <div className="absolute inset-0 [backface-visibility:hidden]">
                        <img 
                            src="images/3rd.png" 
                            alt="Front" 
                            className="w-full h-full object-cover rounded-full border" 
                        />
                    </div>
                    {/* Back Side (Heading) */}
                    <div className="absolute inset-0 flex justify-center items-center bg-amber-100 rounded-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <h1 className="text-center text-lg font-bold text-amber-900 p-2">
                            Mr. Mukund Agarwal
                        </h1>
                    </div>
                </div>
            </div>
            <div className="w-[200px] h-[200px] relative group [perspective:1000px]">
                {/* Inner wrapper (rotates) */}
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Side (Image) */}
                    <div className="absolute inset-0 [backface-visibility:hidden]">
                        <img 
                            src="images/4th.png" 
                            alt="Front" 
                            className="w-full h-full object-cover rounded-full border" 
                        />
                    </div>
                    {/* Back Side (Heading) */}
                    <div className="absolute inset-0 flex justify-center items-center bg-amber-100 rounded-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <h1 className="text-center text-lg font-bold text-amber-900 p-2">
                            Mr. Anand Agarwal
                        </h1>
                    </div>
                </div>
            </div>
           <div className="w-[200px] h-[200px] relative group [perspective:1000px]">
                {/* Inner wrapper (rotates) */}
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Side (Image) */}
                    <div className="absolute inset-0 [backface-visibility:hidden]">
                        <img 
                            src="images/5th.png" 
                            alt="Front" 
                            className="w-full h-full object-cover rounded-full border" 
                        />
                    </div>
                    {/* Back Side (Heading) */}
                    <div className="absolute inset-0 flex justify-center items-center bg-amber-100 rounded-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <h1 className="text-center text-lg font-bold text-amber-900 p-2">
                            Mrs. Rinkal Agarwal
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="align-center ">
            <p className='mt-5 text-2xl font-semibold text-center'>Our journey began in 1956 when <span className='text-amber-900 font-black'>Late Shri Gopal Das Ji Agarwal</span> laid the foundation of
            Braj Paridhaan, driven by a vision to bring traditional and elegant attire to life. For nearly
            15–16 years, he nurtured and expanded the brand with dedication.
        </p>
        </div>
    </div>
  )
}

export default history
