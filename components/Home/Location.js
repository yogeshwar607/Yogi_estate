import React from 'react'
import {locationData} from '../../constants/constant'
const Location = () => {
    return (
        <div className='container'>
            <div className="relative">
                <div className="flex flex-col md:flex-row justify-center px-8 md:px-0">
                    <div className='pl-1 md:pl-0 mb-6'>
                        <h1 className="font-medium text-lg md:text-4xl font-montserrat mt-4 md:mb-4 md:ml-8 text-primary">{locationData.title}</h1>
                        <p className="font-normal text-xs font-montserrat mt-3 md:mt-6 md:mb-8 md:ml-8 md:mr-4 text-secondary max-w-sm">
                           {locationData.description}
                        </p>
                    </div>
                    <div>
                        <img src={locationData.mapImage} alt="" className='w-full'/>
                    </div>
                </div>
                <div className="md:absolute md:bottom-44 md:left-8 location-box bg-whitecolor mx-9 md:mx-0 pt-7 pb-11 shadow-lg px-8">
                    <h1 className="font-normal text-base md:text-2xl font-montserrat pb-4   text-primary">{locationData.boxtitle}</h1>
                    <p className="font-normal text-sm md:text-lg font-montserrat pb-8  text-secondary max-w-xl">
                   {locationData.boxDescription}
                    </p>
                    <a className="text-white border-2 border-primary font-montserrat font-medium text-base md:text-xl  bg-primary py-3 px-5 hover:text-primary hover:bg-white hover:duration-500" href="#">{locationData.boxButon}</a>
                </div>
            </div>
        </div>
    )
}

export default Location
