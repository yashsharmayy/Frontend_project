import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-full text-white z-20  relative bg-charcoal69 pt-18   p-6 lg:px-20 overflow-hidden'>
            <div className='absolute  bottom-0 w-100 left-[30%] h-[200%] -top-[50%] bg-charcoal-soft79 transform rotate-10'></div>
            <div className='z-10 relative w-full flex md:flex-row flex-col justify-evenly '>
                <div className='m-4'>
                    <h1 className='text-4xl text-cream09 font-cormorant'>Maison</h1>
                    <h1 className='text-4xl text-gold-light49 my-6 font-cormorant'>Doree</h1>
                    <p className='paracss2 cursor-pointer hover:text-gold-dark59'>Handcrafted gold jewelry of exceptional quality and timeless elegance. Family-owned atelier since 1987.</p>
                    <p className='paracss2 cursor-pointer hover:text-gold-dark59'>742 Fifth Avenue, Suite 1200</p>
                    <p className='paracss2 cursor-pointer hover:text-gold-dark59'>New York, NY 10019</p>
                    <p className='paracss2 cursor-pointer hover:text-gold-dark59'>+91 9988776655</p>
                    <p className='paracss2 cursor-pointer hover:text-gold-dark59'>weblysite1804@gmail.com</p>
                </div>

                <div className='m-4 mx-10'>
                    <h2 className='text-lg text-gold-light49'>COLLECTIONS</h2>
                    <ul>
                        <li className='paracss2 cursor-pointer hover:text-gold-dark59'>All Collections</li>
                        <li className='paracss2 cursor-pointer hover:text-gold-dark59'>Bridal</li>
                        <li className='paracss2 cursor-pointer hover:text-gold-dark59'>Everyday</li>
                        <li className='paracss2 cursor-pointer hover:text-gold-dark59'>Elegance</li>
                        <li className='paracss2 cursor-pointer hover:text-gold-dark59'>Statement Pieces</li>
                        <li className='paracss2 cursor-pointer hover:text-gold-dark59'>Men's Collection</li>
                    </ul>
                </div>
                <div className='m-4 mx-10'>

                    <h2 className='text-lg text-gold-light49'>COMPANY</h2>
                    <ul>
                        <li className='paracss2 cursor-pointer hover:text-gold-dark59'>Our Story</li>
                        <li className='paracss2 cursor-pointer hover:text-gold-dark59'>Craftsmanship</li>
                        <li className='paracss2 cursor-pointer hover:text-gold-dark59'>Visit Us</li>
                        <li className='paracss2 cursor-pointer hover:text-gold-dark59'>Custom Design</li>
                        <li className='paracss2 cursor-pointer hover:text-gold-dark59'>Care Guide</li>
                    </ul>
                </div>
                <div className='m-4 w-[70%]'>
                    <h2 className='text-lg text-gold-light49'>
                        ABOUT THIS WEBSITE
                    </h2>
                    <p className='paracss2 cursor-pointer hover:text-gold-dark59'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum praesentium, eius corporis assumenda commodi, numquam blanditiis molestiae cupiditate laboriosam animi iste beatae minima ex harum incidunt debitis corrupti accusamus? Neque.</p>
                    <p className='paracss2 cursor-pointer hover:text-gold-dark59'>Images: Unsplash</p>
                </div>
            </div>
            <div className='relative  flex md:flex-row flex-col justify-between items-center  border-t border-t-taupe-light99 p-8 text-white mt-10 w-full '>
                <p className=' text-gold-dark59 text-center'>© 2026 Aurum Luxe. All rights reserved.</p>
                <div className='flex gap-3'>
                    <a href="#"><p className='paracss2 hover:text-gold-dark59'>Instagram </p></a>
                    <a href="#"><p className='paracss2 hover:text-gold-dark59'>Youtube </p></a>
                    <a href="#"><p className='paracss2 hover:text-gold-dark59'>Facebook </p></a>
                </div>
            </div>


        </div>
    )
}

export default Footer