import React from 'react'

function about() {
  return (
    <div className='w-screen p-10 mt-[-87px] pt-[100px] bg-gradient-to-b from-amber-0 z-[700] to-amber-100'>
        <h2 className='text-3xl text-amber-900 font-bold pl-2'>— WHO WE AREs</h2>
        <p className='text-lg h-full text-justify overflow-auto mt-5 px-10 border-2 py-6 rounded-2xl bg-gradient-to-b from-amber-50 to-amber-200 border-amber-200'>
            <span className='font-bold text-2xl text-amber-900'> Braj Paridhaan</span>, rooted in the divine land of Vrindavan, was born from a dream to blend timeless tradition with modern fashion. Inspired by the vibrant culture, spirituality, and artistry of Vrindavan, we set out to create clothing that carries both heritage and comfort. For us, fashion is not just fabric; it is a reflection of identity and pride. Each design is thoughtfully crafted, bringing together India’s rich weaving traditions, intricate patterns, and contemporary silhouettes to create a truly unique experience. Our mission is to make tradition evolve with time rather than remain confined to history. Every piece we design tells a story — of devotion, elegance, and trust. At Braj Paridhaan, we believe clothing should not only make you look good but also help you feel deeply connected to cultural roots while embracing the beauty of modern style.  
            <br />
            <button className='p-3 mt-2 border-2 px-6 rounded-2xl ml-5 bg-amber-950 text-white cursor-pointer hover:font-black'> More about, Click me</button>
        </p>

    </div>
  )
}

export default about
