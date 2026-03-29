import React from 'react'

const HeroPage = () => {
    return (
        <div className=' h-screen -mt-30 w-full flex overflow-hidden justify-evenly '>
            <div className=' w-1/2 flex flex-col justify-center p-16 lg:p-24'>
                <h2 className='text-taupe89 tracking-wider text-lg lg:text-xl my-5'>Artisan  Gold  Jewelry Since 1987</h2>
                <h1 className='font-cormorant text-5xl lg:text-6xl my-5'>Where Gold <br />Becomes <span className='text-gold-light49'>Art</span></h1>
                <p className='text-charcoal-soft79 text-lg '>Each piece in our collection is handcrafted by master artisans, transforming the finest gold into wearable works of art that tell your unique story.</p>
                <div className='my-5 flex gap-1.5 items-center'>
                    <button className='p-6 pr-20 hover:bg-gold-dark59 text-cream09 bg-charcoal69 text-left'>EXPLORE COLLECTIONS </button>
                    <button className='mx-2 flex items-center justify-evenly  hover:gap-2 hover:pr-2'><h3>Our Heritage</h3><i className="fa-solid fa-arrow-right mx-1 text-sm"></i></button>
                </div>
            </div>
            <div className=' w-1/2 h-full '>
                <div className=' relative overflow-hidden h-full'>
                    <div className='absolute top-0 -left-10 bottom-0 bg-cream09  w-20 h-screen -skew-x-6 z-10'></div>
                    <img className='w-full h-full object-cover object-center' src="https://plus.unsplash.com/premium_photo-1681276169450-4504a2442173?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8andlbGxlcnl8ZW58MHx8MHx8fDA%3D" alt="" />
                </div>
            </div>

        </div >
    )
}

export default HeroPage