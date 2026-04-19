import React, { useEffect, useRef } from 'react'
import Button from './Button'
import gsap from 'gsap'

const Carftmanship = () => {


    const contentRef = useRef()
    const imgRef = useRef()



    useEffect(() => {
        gsap.from(contentRef.current.children, {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: contentRef.current,
                start: "top 65%",
                // markers: true
            }
        })

        gsap.from(imgRef.current.children, {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: imgRef.current,
                start: "top 65%",
                // markers: true
            }
        })
    }, [])
    return (
        <div id='carftmanship' className='w-full h-full overflow-hidden bg-ivory19 flex md:flex-row flex-col-reverse p-2 md:p-20 py-40 justify-evenly items-center'>
            <div ref={contentRef} className=' md:w-1/2 lg:w-1/3 m-4 '>
                <p className='text-taupe-light99'>THE ART OF CREATION</p>
                <h1 className='font-cormorant text-4xl  my-4'>Crafted by Hand,Treasured Forever</h1>
                <p className='text-charcoal-soft79 my-6 text-lg'>Each Maison Dorée piece undergoes a meticulous journey from concept to completion. Our artisans employ traditional goldsmithing techniques passed down through generations, ensuring every curve, texture, and finish meets our exacting standards.</p>
                <ul className='gap-8 flex flex-col m-8 '>
                    <li className='text-charcoal-soft79'><span className='text-lg mr-5 text-yellow-900'>-</span>  Hand-selected materials from ethical sources</li>
                    <li className='text-charcoal-soft79'><span className='text-lg mr-5 text-yellow-900'>-</span>Traditional lost-wax casting and hand-forging</li>
                    <li className='text-charcoal-soft79'><span className='text-lg mr-5 text-yellow-900'>-</span>Multiple quality inspections at every stage</li>
                    <li className='text-charcoal-soft79'><span className='text-lg mr-5 text-yellow-900'>-</span>Personalized finishing and custom sizing</li>
                </ul>
                <Button className='m-8' Name={"COMMISSION A CUSTOM PIECE"} />

            </div>
            <div className='lg:w-2/3 md:w-1/2 md:p-16'>
                <div ref={imgRef} className='md:relative p-8  '>
                    <img className='w-full h-full md:min-w-80' src="https://images.unsplash.com/photo-1619119069152-a2b331eb392a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className='md:absolute w-full md:w-fit md:flex-row flex flex-col items-center p-8 md:p-0 gap-8 md:gap-0  my-20 md:my-0 lg:p-4 lg:px-8  bg-white left-12 -bottom-4 lg:left-[15%]  '>
                        <div className='bres-width'>
                            <h2 className='lg:m-2 font-cormorant text-gold-dark59 text-2xl lg:text-4xl'>37</h2>
                            <p className='text-sm text-taupe89'>YEARS OF EXCELLENCE</p>
                        </div>
                        <div className='bres-width'>
                            <h2 className='lg:m-2 font-cormorant text-gold-dark59 text-2xl lg:text-4xl'>12</h2>
                            <p className='text-sm text-taupe89'>MASTER ARTISANS</p>
                        </div>
                        <div className='bres-width'>
                            <h2 className='lg:m-2 font-cormorant text-gold-dark59 text-2xl lg:text-4xl'>8K+</h2>
                            <p className='text-sm text-taupe89'>PIECES CREATED</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Carftmanship