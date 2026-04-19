import React from 'react'

const Button = (prop) => {

    return (
        <div>
            <button className='p-6 pr-20 transition-colors duration-300 hover:bg-gold-dark59 text-cream09 bg-charcoal69 text-left'>{prop.Name}</button>

        </div>
    )
}

export default Button