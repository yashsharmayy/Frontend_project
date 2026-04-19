import React, { useEffect, useRef } from 'react'
import Button from './Button'
import gsap from 'gsap'

const Section2 = () => {
    const imgref = useRef()
    const priceref = useRef()

    useEffect(() => {
        gsap.from(imgref.current, {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: imgref.current,
                start: "top 65%",
                // markers: true
            }
        })

        gsap.from(priceref.current.children, {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: priceref.current,
                start: "top 65%",
                // markers: true
            }
        })
    }, [])
    return (
        <div ref={imgref} className='w-full h-full flex flex-col md:flex-row p-10 py-24 lg:p-20 overflow-hidden justify-evenly items-center bg-ivory19'>
            <div className='relative lg:w-200 lg:mt-40 overflow-hidden'>
                <div className='absolute z-10 left-10 top-10'>
                    <h2 className='px-4 py-2 bg-gold-dark59  text-white'>NEW ARRIVAL</h2>
                </div>
                <img className='img-transform' src="https://plus.unsplash.com/premium_photo-1681276170291-27698ccc0a8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8andlbGxlcnl8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            <div ref={priceref} className='md:w-1/2 lg:p-20  p-10 flex flex-col md:mr-10 h-full items-center justify-evenly'>
                <div className='border-b p-6'>
                    <h3 className='font-DMsans lg:text-lg  text-taupe89 '>Featured Piece</h3>
                    <h1 className='font-cormorant text-5xl lg:text-6xl my-10'>Aurora Pendant</h1>
                    <p className='my-8 text-lg text-charcoal69'>Inspired by the ethereal dance of northern lights, the Aurora Pendant captures the fluid movement of light through hand-hammered 22-karat gold. Each surface catches and reflects light differently, creating a mesmerizing display of golden hues.</p>
                </div>
                <div className='flex w-full  p-4 pb-20 justify-between border-b-[0.5px]'>
                    <ul className='text-gold-dark59 gap-4 flex flex-col'>
                        <li>Material</li>
                        <li>Weight</li>
                        <li>Chain length</li>
                    </ul>
                    <ul className='gap-4 flex flex-col font-semibold text-charcoal-soft79 text-end'>
                        <li>22K Yellow Gold</li>
                        <li>18.5 grams</li>
                        <li>18 inches (adjustable)</li>
                    </ul>
                </div>
                <div className='flex flex-col w-full my-20 '>
                    <h2 className='text-5xl font-cormorant  text-gold-dark59 my-8 mb-10'>$4,850</h2>
                    <Button Name={"INQUIRE ABOUT THIS PIECE"} />
                </div>
            </div>

        </div>
    )
}

export default Section2