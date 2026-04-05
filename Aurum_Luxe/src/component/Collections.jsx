import React from 'react'

const Collections = () => {
    return (
        <div className='w-full h-full p-10 py-20 lg:p-20 overflow-hidden  bg-cream09'>
            <div className='flex flex-col md:flex-row my-20 items-start md:items-center justify-between'>
                <div className='flex flex-col gap-5'>
                    <h1 className='font-cormorant text-5xl text-charcoal69'>Our Collections</h1>
                    <p className='text-gold-dark59'>Discover pieces crafted for every chapter of your story</p>
                </div>
                <div>
                    <button className='mx-2 flex my-6 md:my-0 items-center justify-evenly gap-1 px-2 py-1 rounded transition-all duration-300 ease-in-out hover:gap-2 hover:pr-3'>
                        <h3>View All Collections</h3>
                        <i className="fa-solid fa-arrow-right mx-1 text-sm transition-transform duration-300 ease-in-out group-hover:translate-x-1"></i>
                    </button>
                </div>
            </div>
            <div className="gallery h-full w-full ">

                <div className='flex md:flex-row flex-col gap-8'>
                    <div className="md:w-1/2 h-120">
                        <img
                            className="w-full h-full object-cover rounded-lg"
                            src="https://images.unsplash.com/photo-1679156271456-d6068c543ee7?w=400&auto=format&fit=crop&q=60"
                            alt=""
                        />
                    </div>

                    <div className='w-full h-120 '>
                        <img
                            className="w-full h-full object-cover rounded-lg"
                            src="https://images.unsplash.com/photo-1747116404311-55f8d8944e83?w=400&auto=format&fit=crop&q=60"
                            alt=""
                        />
                    </div>
                </div>

                <div className='flex my-8 md:flex-row flex-col gap-8 md:justify-evenly '>
                    <div className='w-full h-120 md:m-4'>
                        <img
                            className="w-full h-full object-cover rounded-lg"
                            src="https://images.unsplash.com/photo-1588909006332-2e30f95291bc?w=400&auto=format&fit=crop&q=60"
                            alt=""
                        />
                    </div>

                    <div className='md:m-4 w-full h-120'>
                        <img
                            className="w-full h-full object-cover rounded-lg"
                            src="https://plus.unsplash.com/premium_photo-1674581921333-959b929a2e0a?w=400&auto=format&fit=crop&q=60"
                            alt=""
                        />
                    </div>
                    <div className='md:m-4 w-full h-120'>
                        <img
                            className="w-full h-full object-cover rounded-lg"
                            src="https://images.unsplash.com/photo-1682822749962-d4510e0467fb?w=400&auto=format&fit=crop&q=60"
                            alt=""
                        />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Collections