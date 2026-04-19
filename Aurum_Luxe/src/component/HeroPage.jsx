import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import gsap from 'gsap'
const HeroPage = () => {
    const [current, setcurrent] = useState(0)

    const arr = [
        {
            img: "https://plus.unsplash.com/premium_photo-1681276169450-4504a2442173?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8andlbGxlcnl8ZW58MHx8MHx8fDA%3D",
            name: "Arora Diamond Pendent",
            price: "$2,400",
        },
        {
            img: "https://images.unsplash.com/photo-1716512064598-4536d086736c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8andlbGxlcnklMjByaW5nfGVufDB8fDB8fHww",
            name: "Heritage Rings",
            price: "$3,200",
        },
        {
            img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmVja2xhY2V8ZW58MHx8MHx8fDA%3D",
            name: "Serpentine Collection",
            price: "$4,850",
        },
    ]

    let item = arr[current]

    useEffect(() => {
        const interval = setInterval(() => {
            setcurrent((prev) => (prev + 1) % 3)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    let imgref = useRef()
    const headref = useRef()
    const priceref = useRef();

    useEffect(() => {
        gsap.fromTo(
            imgref.current,
            {
                opacity: 0.2,
                y: 5
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out"
            }
        );
    }, [current]);


    useEffect(() => {
        const tl = gsap.timeline();

        tl.from(headref.current.children, {
            y: 20,
            opacity: 0,
            stagger: 0.2,
            duration: 0.7
        })

            .from(priceref.current, {
                y: 20,
                opacity: 0,
                duration: 0.6
            });
    }, []);

    return (
        <div className=' h-full md:h-screen -mt-30 w-full flex flex-col-reverse md:flex-row overflow-hidden justify-evenly '>
            <div ref={headref} className='  md:w-1/2 flex flex-col justify-center p-16 lg:p-24'>
                <h2 className='text-taupe89 font-DMsans  text-lg lg:text-xl my-5'>Artisan  Gold  Jewelry Since 1987</h2>
                <h1 className='font-cormorant text-5xl lg:text-6xl my-8  md:my-5'>Where Gold <br />Becomes <span className='text-gold-light49'>Art</span></h1>
                <p className='text-charcoal-soft79 text-lg my-5 md:my-2 '>Each piece in our collection is handcrafted by master artisans, transforming the finest gold into wearable works of art that tell your unique story.</p>
                <div className='my-5 flex md:flex-row flex-col md:gap-1.5  md:items-center items-start'>
                    <a href="#collections"><Button Name={"EXPLORE COLLECTIONS "} /></a>
                    <button className='mx-2 flex my-6 md:my-0 items-center justify-evenly gap-1 px-2 py-1 rounded transition-all duration-300 ease-in-out hover:gap-2 hover:pr-3'>
                        <h3><a href="#story">Our Heritage</a></h3>
                        <i className="fa-solid fa-arrow-right mx-1 text-sm transition-transform duration-300 ease-in-out group-hover:translate-x-1"></i>
                    </button>
                </div>
            </div>
            <div className=' md:w-1/2  h-[60vh]  md:h-full '>
                <div className=' relative overflow-hidden h-full'>
                    <div className='absolute hidden md:block top-0 -left-15 bottom-0 bg-cream09  w-25 h-screen -skew-x-6 z-10'></div>
                    <div ref={priceref} className='absolute z-20 bg-cream09 bottom-10 md:bottom-40 lg:bottom-20 left-20 p-4 md:p-6'>
                        <h1 className='text-lg md:text-2xl font-cormorant text-charcoal69'>{item.name}</h1>
                        <h2 className='text-gold-light49 font-semibold'>From {item.price}</h2>
                    </div>
                    <img ref={imgref} className=' w-full h-full  object-cover object-center' src={item.img} alt="" />
                </div>
            </div>

        </div >
    )
}

export default HeroPage