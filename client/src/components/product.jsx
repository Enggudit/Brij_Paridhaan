import React from 'react'

function product() {
  return (
    <div className='w-screen px-10 bg-gradient-to-b from-amber-200 to-amber-300'>
        <h2 className='text-3xl text-amber-900 font-bold pl-2 text-center'> PRODUCTS</h2>
        <p className='text-lg h-full text-justify overflow-auto mt-5 px-10 border-2 py-6 rounded-2xl bg-gradient-to-b from-amber-50 to-amber-200 border-amber-200'>
            <span className='font-bold text-2xl text-amber-900'> Braj Paridhaan</span> offers a diverse range of traditional and contemporary clothing that beautifully blends heritage with modern fashion. Our collection includes:
            <br />
        </p>
        <div className="flex flex-wrap gap-4 items-center justify-center mt-8">
            <div className="md:w-[22%] w-[80%] md:h-[70vh] h-[80vh] flex flex-col items-center">
                <img src="images/1.jpg" className='w-[75%] h-[55%] rounded-2xl' alt="" />
                <div className="w-full mt-5 pl-10">
                    <h5 className='text-xl text-left '>Sharee</h5>
                    <h5 className='text-xl text-left '>Sharee</h5>
                    <h5 className='text-xl text-left '>Sharee</h5>
                    <h5 className='text-xl text-left '>Sharee</h5>
                </div>
                <button className='text-white bg-[goldenrod] px-9 py-2 hover:border-2 hover:bg-amber-950 transition-colors mt-3 rounded-3xl  text-2xl'>Buy</button>
            </div>
            <div className="md:w-[22%] w-[80%] md:h-[70vh] h-[80vh] flex justify-center">
                <img src="images/1.jpg" className='w-[75%] h-[55%] rounded-2xl ' alt="" />
            </div>
            <div className="md:w-[22%] w-[80%] md:h-[70vh] h-[80vh] flex justify-center">
                <img src="images/1.jpg" className='w-[75%] h-[55%] rounded-2xl ' alt="" />
            </div>
            <div className="md:w-[22%] w-[80%] md:h-[70vh] h-[80vh] flex justify-center">
                <img src="images/1.jpg" className='w-[75%] h-[55%] rounded-2xl ' alt="" />
            </div>
        </div>
    </div>
  )
}

export default product
