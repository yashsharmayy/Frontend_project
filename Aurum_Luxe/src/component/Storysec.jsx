import React from 'react'

const Storysec = () => {
    return (
        <div className=' h-full md:h-[136vh]   w-full flex flex-col md:flex-row overflow-hidden justify-evenly '>
            <div className='bg-charcoal69 text-white   md:w-2/5 flex flex-col justify-center p-15 py-30 lg:p-24'>

                <h3 className='text-gold-light49'>OUR HERITAGE</h3>
                <h1 className='md:text-4xl my-6 text-cream09  lg:text-6xl font-cormorant'>Three Generations of Golden Mastery</h1>
                <p className='paraCSS'>Founded in 1987 by master goldsmith Henri Beaumont, Maison Dorée has remained a family atelier dedicated to the art of fine gold jewelry. What began in a small workshop in the heart of the jewelry district has blossomed into a celebrated house known for impeccable craftsmanship.</p>
                <p className='paraCSS'>Today, our third-generation artisans continue the tradition, blending time-honored techniques with contemporary design sensibilities. Every piece that leaves our workshop carries the weight of this legacy.</p>
                <h2 className='font-cormorant  text-gold-light49 mt-8 text-2xl'>Isabelle Beaumont</h2>
                <h3 className='paraCSS'>CREATIVE DIRECTOR</h3>


            </div>
            <div className=' md:w-3/5   '>
                <div className=' relative h-full lg:h-[150vh] overflow-hidden '>
                    <div className='absolute hidden bg-charcoal69 md:block top-0 -left-35 bottom-0   w-55 h-[150vh] -skew-x-10 z-10'></div>
                    <div className='bg-charcoal-soft79 h-full md:h-[150vh] flex md:flex-row flex-col justify-evenly items-center w-full md:pl-22 p-5 lg:p-22 '>

                        <div className='w-[80%] h-[80%] md:w-45 md:h-55 lg:w-70 lg:h-100 overflow-hidden lg:mt-70 mt-50 m-5  '>
                            <img className='w-full h-full object-center object-cover' src="https://images.unsplash.com/photo-1663079899610-2f00543940cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGp3ZWxsZXJ5fGVufDB8fDB8fHww" alt="" />
                        </div>
                        <div className=' w-[80%] h-[80%] md:w-45 md:h-55 lg:w-70 lg:h-100 overflow-hidden'>
                            <img className='w-full h-full object-center object-cover' src="https://plus.unsplash.com/premium_photo-1681276170281-cf50a487a1b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGp3ZWxsZXJ5fGVufDB8fDB8fHww" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div >)
}

export default Storysec