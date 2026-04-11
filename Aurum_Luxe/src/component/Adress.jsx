import React from 'react'

const Address = ({ head, detail1, detail2 }) => {
    return (
        <div className='my-10'>
            <p className='text-taupe89'>{head}</p>
            <h1 className='font-cormorant text-2xl text-charcoal69'>{detail1}</h1>
            <h1 className='font-cormorant text-2xl text-charcoal69'>{detail2}</h1>

        </div>
    )
}

export default Address