import React from 'react'

const Footer = () => {
    return (
        <div className="Footer_main flex justify-between bg-secondary mt-16">
            <div>
                <h1 className="font-medium text-2xl font-montserrat mt-4 mb-4 ml-16 cursor-pointer text-white">RERA NUMBER</h1>
            </div>
            <div className="flex justify-between cursor-pointer">
                <h1 className="font-normal text-2xl font-montserrat mt-4 mb-4 text-primary mr-2">Back to top</h1>
                <img className="mr-16" src="images/Group.svg" alt="" />
            </div>
        </div>
    )
}

export default Footer
