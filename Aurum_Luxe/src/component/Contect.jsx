import React, { useEffect, useRef } from 'react'
import Address from './Adress'
import Button from './Button'
import gsap from 'gsap'

const Contect = () => {


    const addressRef = useRef()
    const contectRef = useRef()



    useEffect(() => {
        gsap.from(addressRef.current.children, {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: addressRef.current,
                start: "top 65%",
                // markers: true
            }
        })

        gsap.from(contectRef.current.children, {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: contectRef.current,
                start: "top 65%",
                // markers: true
            }
        })
    }, [])
    return (
        <div id='contact' className='w-full h-full flex md:flex-row flex-col items-center bg-ivory19 p-6 md:p-10 py-28 '>
            <div ref={addressRef} className='p-6 md:w-1/2 w-full'>
                <p className='text-taupe89'>VISIT OUR ATELIER</p>
                <h1 className='font-cormorant mb-4 text-4xl lg:text-5xl lg:my-6'>Experience Maison Dorée</h1>
                <p className='text-charcoal69 lg:text-lg lg:my-6'>We invite you to visit our atelier for a personal consultation. Discover our collections in an intimate setting and work with our designers to create something truly unique.</p>
                <div>
                    <Address head={"Address"} detail1={"742 prem nagaar 3rd, kirari "} detail2={"New delhi, 110086"} />
                    <Address head={"Hours"} detail1={"Tuesday – Saturday, 10:00 AM to 06:00 PM "} detail2={"Sunday - Monday, By Appointment"} />
                    <Address head={"Contact"} detail1={"+91 9988776655"} detail2={"weblysite1804@gmail.com"} />
                </div>

            </div>
            <div className='md:p-10  md:w-1/2 w-full'>

                <form ref={contectRef} action="" className='p-12 w-full h-full gap-10 bg-cream09 flex flex-col '>
                    <h1 className='my-6 font-cormorant text-3xl'>Request an Appointment</h1>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border  focus:border-gold39 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"

                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border  focus:border-gold39 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"

                            placeholder="Enter your phone number"
                            className="w-full px-4 py-2 border  focus:border-gold39 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tell us about your visit
                        </label>
                        <textarea
                            name="message"

                            rows="4"
                            placeholder="Write your experience..."
                            className="w-full px-4 py-2 border  focus:border-gold39 focus:outline-none"
                        />
                        <div className='my-8'>

                            <Button Name={"REQUEST APPOINTMENT"} />
                        </div>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Contect