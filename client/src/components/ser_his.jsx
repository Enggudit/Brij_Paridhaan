import React from 'react'

function ser_his() {
  return (
    <div className="w-screen h-full items-center flex justify-center ">
        <div className='bg-amber-100 w-[90%] flex items-center py-3 border-1 border-amber-400 justify-around rounded-2xl mt-[-85px] flex-wrap z-50'>
            <div className="w-[300px] text-center">
                <ion-icon name="people-circle" className='text-8xl mb-[-8px]'></ion-icon>
                <h6 className='text-2xl font-bold text-amber-950'>15+ Team Membars</h6>
            </div>
            <div className="w-[300px] text-center">
                <ion-icon name="stats-chart-outline" className='text-8xl mb-[-8px]'></ion-icon>
                <h6 className='text-2xl font-bold text-amber-950'>70 Cr.+ Sale </h6>
            </div>
            <div className="w-[300px] text-center">
                <span className="material-symbols-outlined"><h1 className='text-8xl'>handshake</h1></span>
                <h6 className='text-2xl font-bold text-amber-950'>69+ Years of Trust</h6>
            </div>
            <div className="w-[300px] text-center">
                <ion-icon name="happy-outline" className='text-8xl mb-[-8px]'></ion-icon>
                <h6 className='text-2xl font-bold text-amber-950'>68 Lakh+ Happy Customers</h6>
            </div>
       </div>
    </div>
  )
}

export default ser_his
