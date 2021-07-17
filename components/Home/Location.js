import React from 'react'

const Location = () => {
    return (
        <div className="relative">

            <div className="Main_loc flex justify-center">
                <div>
                    <h1 className="font-medium text-4xl font-montserrat mt-4 mb-4 ml-8 text-primary">Locations</h1>
                    <p className="font-normal text-xs font-montserrat mt-6 mb-8 ml-8 mr-4 text-secondary max-w-sm">Neque, viverra nibh morbi in proin vel. Maecenas cursus sit eu ultrices amet elit. Amet scelerisque pellentesque vel tellus condimentum malesuada sagittis faucibus pretium. Tellus, mauris eget urna purus, nam. Rhoncus in diam sapien fames at urna mi. </p>
                </div>
                <div>
                    <img src="images/map.png" alt="" />
                </div>
            </div>
            <div className="absolute bottom-44 left-8 bg-whitecolor pb-8 shadow-lg">
                <h1 className="font-normal text-base font-montserrat mt-6 mb-10 ml-10 text-primary">ADITYA HEIGHTS</h1>
                <p className="font-normal text-xs font-montserrat mt-4 mb-10 ml-10 text-secondary max-w-xl">Neque, viverra nibh morbi in proin vel. Maecenas cursus sit eu ultrices amet elit. Amet scelerisque pellentesque vel tellus condimentum malesuada sagittis faucibus pretium. </p>
                <a className="text-primary mt-8 mb-10 ml-10 font-montserrat font-medium text-xl border border-primary py-2 px-4 hover:bg-primary hover:text-white hover:duration-500" href="#">Contact us</a>
            </div>
        </div>
    )
}

export default Location
