import React from 'react'

const Border = ({width, color}) => {
    return (
        <div>
            <div className='flex justify-center'>
            <p className={`border-b-2  border-${color} w-${width} `}></p>
            </div>
        </div>
    )
}

export default Border
