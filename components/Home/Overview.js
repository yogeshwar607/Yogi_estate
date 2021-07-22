import React from 'react'
import {overviewData} from '../../constants/constant'

const Overview = () => {
    return (
        <div className='w-full bg-white z-0'>
            <div className='md:max-w-7xl mx-auto 2xl:container'>
                <h1 className="font-medium text-xl md:text-4xl font-montserrat mt-80 md:mt-36 mb-3 md:mb-8 text-primary text-center ">{overviewData[0].title}</h1>
                <span className="font-normal text-sm md:text-2xl font-montserrat  text-secondary  py-2 px-4 flex justify-center">{overviewData[0].subTitle}</span>
                <div className="mb-8">
                    <div className='flex justify-center'>
                        <p className="border-b border-black w-36 md:w-64  "></p>
                    </div>
                </div>
                <p className="font-normal text-sm md:text-2xl font-montserrat mb-8 text-secondary text-center px-8 md:px-16">{overviewData[0].description} </p>
                <div className='flex justify-center py-4 mb-3'>
                    <img src='/images/arrow.svg' alt='' className='pr-2 pl-8  bg-primary py-2.5 ' />
                    <a className=' bg-primary py-2.5 pr-8 text-base md:text-xl text-white font-normal '>{overviewData[0].buttonText}</a>
                </div>
            </div>
        </div>
    )
}

export default Overview
