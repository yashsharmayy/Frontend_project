import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const Collections = () => {
    const headref = useRef()
    const galleryRef = useRef()



    useEffect(() => {
        gsap.from(headref.current.children, {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: headref.current,
                start: "top 65%",
                // markers: true
            }
        })

        gsap.from(galleryRef.current.children, {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: galleryRef.current,
                start: "top 65%",
                // markers: true
            }
        })
    }, [])
    return (
        <div id='collections' className='w-full h-full lg:mb-30  p-10 py-20 lg:p-20 overflow-hidden  bg-cream09'>
            <div ref={headref} className='flex flex-col group h-full md:flex-row my-20 items-start md:items-center justify-between'>
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
            <div ref={galleryRef} className="galleryRef h-full w-full ">

                <div className='flex h-full  md:flex-row flex-col gap-8'>
                    <div className=" group md:w-1/2 h-120 relative overflow-hidden rounded-lg">
                        <img
                            className="img-transform duration-500 group-hover:scale-110 "
                            src="https://images.unsplash.com/photo-1679156271456-d6068c543ee7?w=400&auto=format&fit=crop&q=60"
                            alt=""
                        />
                        <div className=' absolute md:opacity-0  group-hover:opacity-100 transition-all duration-500 inset-0 bg-linear-to-b from-[#15020204]  to-[#151414b3]'>
                            <div className='absolute bottom-10 left-10'>
                                <h2 className='text-cream09 font-cormorant text-3xl my-3'>Statement</h2>
                                <p className='text-taupe-light99'>18 pieces</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-120 relative group overflow-hidden rounded-lg group '>

                        <img
                            className="img-transform duration-500 group-hover:scale-110 rounded-lg"
                            src="https://images.unsplash.com/photo-1747116404311-55f8d8944e83?w=400&auto=format&fit=crop&q=60"
                            alt=""
                        />
                        <div className=' absolute md:opacity-0  group-hover:opacity-100 transition-all duration-500 inset-0 bg-linear-to-b from-[#15020204]  to-[#151414b3]'>
                            <div className='absolute bottom-10 left-10'>
                                <h2 className='text-cream09 font-cormorant text-3xl my-3'>Bridal</h2>
                                <p className='text-taupe-light99'>24 pieces</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex my-8 h-full md:flex-row flex-col gap-8 md:justify-evenly '>
                    <div className='w-full group relative h-120 md:m-4 overflow-hidden rounded-lg '>
                        <img
                            className="img-transform duration-500 group-hover:scale-110"
                            src="https://images.unsplash.com/photo-1588909006332-2e30f95291bc?w=400&auto=format&fit=crop&q=60"
                            alt=""
                        />
                        <div className=' absolute md:opacity-0  group-hover:opacity-100 transition-all duration-500 inset-0 bg-linear-to-b from-[#15020204]  to-[#151414b3]'>
                            <div className='absolute bottom-10 left-10'>
                                <h2 className='text-cream09 font-cormorant text-3xl my-3'>Men's Collection</h2>
                                <p className='text-taupe-light99'>15 pieces</p>
                            </div>
                        </div>
                    </div>

                    <div className='md:m-4 group relative w-full h-120 overflow-hidden rounded-lg '>
                        <img
                            className="img-transform duration-500 group-hover:scale-110 "
                            src="https://plus.unsplash.com/premium_photo-1674581921333-959b929a2e0a?w=400&auto=format&fit=crop&q=60"
                            alt=""
                        />
                        <div className=' absolute md:opacity-0  group-hover:opacity-100 transition-all duration-500 inset-0 bg-linear-to-b from-[#15020204]  to-[#151414b3]'>
                            <div className='absolute bottom-10 left-10'>
                                <h2 className='text-cream09 font-cormorant text-3xl my-3'>Heritage</h2>
                                <p className='text-taupe-light99'>12 pieces</p>
                            </div>
                        </div>
                    </div>
                    <div className='md:m-4 group relative w-full h-120 overflow-hidden rounded-lg '>
                        <img
                            className="img-transform duration-500 group-hover:scale-110"
                            src="https://images.unsplash.com/photo-1682822749962-d4510e0467fb?w=400&auto=format&fit=crop&q=60"
                            alt=""
                        />
                        <div className=' absolute md:opacity-0  group-hover:opacity-100 transition-all duration-500 inset-0 bg-linear-to-b from-[#15020204]  to-[#151414b3]'>
                            <div className='absolute bottom-10 left-10'>
                                <h2 className='text-cream09 font-cormorant text-3xl my-3'>Everyday Elegance</h2>
                                <p className='text-taupe-light99'>36 pieces</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Collections