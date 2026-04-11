import React from 'react'

const TestCard = ({ Name, role, para, img }) => {
    return (
        <div className="relative hover:scale-105 transition-all duration-400 ease-in-out hover:shadow-2xl h-full p-12 py-16 flex flex-col before:content-['“'] before:absolute before:text-6xl before:opacity-30 before:font-cormorant before:text-gold39 before:top-4 before:right-8 min-w-60 w-full bg-ivory19 m-4">            < div className='flex flex-col ' >
            <span className='flex text-gold39'>
                ★
                ★
                ★
                ★
                ★
            </span>
            <p className='my-4 h-full md:h-65 lg:h-40 text-lg text-start font-cormorant border-b border-gray-500 pb-8 '>{para}</p>
        </div >
            <div className='flex justify-evenly lg:justify-start items-center'>
                <div className='w-12 h-12 rounded-full overflow-hidden shrink-0'>
                    <img className='w-full h-full object-cover object-center' src={img} alt="profilphoto" />
                </div>
                <div className='m-4 text-start'>
                    <h2 className=''>{Name}</h2>
                    <h3 className='text-taupe-light99'>{role}</h3>
                </div>
            </div>

        </div >
    )
}

export default TestCard