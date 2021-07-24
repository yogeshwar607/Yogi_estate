import React from 'react'

const Border = ({width, color}) => {
    return (
        <div>
            <div className='flex justify-center'>
            <p className={`border-2  w-${width} `}></p>
            </div>
        </div>
    )
}

export default Border
