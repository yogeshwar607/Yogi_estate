import React from 'react'
import Border from '../Border'
const Overview = () => {
    return (
        <div className='w-full bg-white'>
            <div className='max-w-6xl mx-auto'>
                <h1 className="font-medium text-4xl font-montserrat mt-24 mb-8 text-primary text-center ">OVERVIEW</h1>
                <span className="font-normal text-2xl font-montserrat mb-1 text-secondary  py-2 px-4 flex justify-center" href="#">Aditya Heights, Pune</span>
               <div className = "mb-8">
               <Border  color={'gray-900'} width={'64'} />
               </div>
                 <p className="font-normal text-2xl font-montserrat mb-8 text-secondary text-center px-20">Neque, viverra nibh morbi in proin vel. Maecenas cursus sit eu ultrices amet elit. Amet scelerisque pellentesque vel tellus condimentum malesuada sagittis faucibus pretium. Tellus, mauris eget urna purus, nam. Rhoncus in diam sapien fames at urna mi. Neque, viverra nibh morbi in proin vel. Maecenas cursus sit eu ultrices amet elit. Amet scelerisque pellentesque vel tellus condimentum malesuada sagittis faucibus pretium. Tellus, mauris eget urna purus, nam. Rhoncus in diam sapien fames at urna mi. Neque, viverra nibh morbi in proin vel. Maecenas cursus sit eu ultrices amet elit. Amet scelerisque pellentesque vel tellus condimentum malesuada sagittis faucibus pretium. Tellus, mauris eget urna purus, nam. Rhoncus in diam sapien fames at urna mi. </p>
                <div className=" flex justify-center my-8 ">
                    <a className=" border  border-primary bg-primary text-whitecolor font-montserrat font-medium  text-xl py-2 px-8 capitalize hover:bg-white hover:text-primary hover:duration-500" href="#"> Download brocture</a>
                </div>
            </div>
        </div>
    )
}

export default Overview
