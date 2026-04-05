import React from 'react'

const Storysec = () => {
    return (
        <div className=' h-full md:h-[130vh] -mt-30 w-full flex flex-col-reverse md:flex-row overflow-hidden justify-evenly '>
            <div className='bg-charcoal69 md:w-2/5 flex flex-col justify-center p-16 lg:p-24'>

            </div>
            <div className=' md:w-3/5  md:h-full '>
                <div className=' relative overflow-hidden h-full'>
                    <div className='absolute hidden bg-charcoal69 md:block top-0 -left-21 bottom-0   w-42 h-[130vh] -skew-x-10 z-10'></div>
                    <div className='bg-charcoal-soft79 h-[130vh] flex justify-evenly items-center w-full pl-22 p-5 lg:p-22 '>

                        <div className='w-45 h-55 lg:w-70 lg:h-100 lg:mt-70 mt-50 m-5 overflow-hidden '>
                            <img className='w-full h-full object-center object-cover' src="https://images.unsplash.com/photo-1663079899610-2f00543940cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGp3ZWxsZXJ5fGVufDB8fDB8fHww" alt="" />
                        </div>
                        <div className='w-45 h-55 lg:w-70 lg:h-100 overflow-hidden'>
                            <img className='w-full h-full object-center object-cover' src="https://plus.unsplash.com/premium_photo-1681276170281-cf50a487a1b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGp3ZWxsZXJ5fGVufDB8fDB8fHww" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div >)
}

export default Storysec