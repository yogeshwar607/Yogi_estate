import React from 'react'

const Footer = () => {
    return (
        <div className="Footer_main flex justify-between px-8 md:px-0 bg-secondary mt-16 w-full">
            <div>
                <h1 className="font-medium text-sm md:text-2xl font-montserrat mt-4 mb-4 md:ml-16 cursor-pointer text-white">RERA NUMBER</h1>
            </div>
            <div className="flex justify-between cursor-pointer">
                <h1 className="font-normal text-sm md:text-2xl font-montserrat mt-4 mb-4 text-primary mr-2">Back to top</h1>
                <img className="md:mr-16 w-4 md:w-auto" src="images/Group.svg" alt="" />
            </div>
        </div>
    )
}

export default Footer
