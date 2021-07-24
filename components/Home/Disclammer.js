import React from 'react'
import {disclammerData} from '../../constants/constant'
const Disclammer = () => {
    return (
        <div>
            <div className="mx-auto max-w-6xl px-10 md:px-0">
                <h1 className="font-medium uppercase text-xl md:text-4xl font-montserrat mt-8 pt-16 mb-8 text-secondary text-center ">{disclammerData.title}</h1>
                <p className="font-normal text-sm md:text-2xl font-montserrat mt-4 mb-10 text-secondary text-center">{disclammerData.description}</p>
            </div>
        </div>
    )
}

export default Disclammer