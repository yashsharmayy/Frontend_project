import React, { useEffect, useRef } from 'react'
import TestCard from './Test-card'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Testimonials = () => {
    const contentRef = useRef()
    const cardRef = useRef()



    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
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

        gsap.from(cardRef.current, {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 65%",
                // markers: true
            }
        })
    }, [])
    return (
        <div className=' w-full h-full bg-cream09 py-40  p-10 text-center'>
            <div ref={contentRef}>
                <h3 className='text-taupe-light99'>CLIENT STORIES</h3>
                <h1 className=' font-cormorant text-charcoal69 text-4xl m-4'>Tresured by Many</h1>
                <p className='paraCSS'>What our clients say about their Maison Dorée experience</p>
            </div>
            <div ref={cardRef} className='w-full h-full flex flex-col md:flex-row  my-16 justify-evenly items-center p-6'>
                <TestCard
                    Name={"Catherine W."}
                    role={"Bridal Collection"}
                    para={"The attention to detail is extraordinary. My wedding set from Maison Dorée isn't just jewelry — it's a work of art that I'll cherish forever"}
                    img={"https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D"} />
                <TestCard
                    Name={"Eleanor M."}
                    role={"Heritage Collection"}
                    para={"Three generations of my family have now worn pieces from Maison Dorée. The quality is unmatched and each piece tells our story."}
                    img={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"} />
                <TestCard
                    Name={"Michael T."}
                    role={"Custom Design"}
                    para={"Working with the design team to create a custom anniversary gift was seamless. They understood my vision and exceeded expectations."}
                    img={"https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D"} />
            </div>
        </div>
    )
}

export default Testimonials