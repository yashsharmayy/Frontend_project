import React from 'react'

const Section2 = () => {
    return (
        <div className='w-full h-[150vh] flex p-20 justify-evenly items-center bg-ivory19'>
            <div className='w-1/2'>
                <img className='w-full h-full' src="https://plus.unsplash.com/premium_photo-1681276170291-27698ccc0a8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8andlbGxlcnl8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            <div>
                <div className='border-b '>
                    <h3>Featured Piece</h3>
                    <h1>Aurora Pendant</h1>
                    <p>Inspired by the ethereal dance of northern lights, the Aurora Pendant captures the fluid movement of light through hand-hammered 22-karat gold. Each surface catches and reflects light differently, creating a mesmerizing display of golden hues.</p>
                </div>
                <div className='flex justify-between border-b-[0.5px]'>
                    <ul>
                        <li>Material</li>
                        <li>Weight</li>
                        <li>Chain length</li>
                    </ul>
                    <ul>
                        <li>22K Yellow Gold</li>
                        <li>18.5 grams</li>
                        <li>18 inches (adjustable)</li>
                    </ul>
                </div>
                <div></div>
            </div>

        </div>
    )
}

export default Section2