import React from 'react'

const Header = () => {
    return (
        <div className="header_main overflow-hidden flex-wrap	items-center">

            <div className="Navbar flex justify-between">
                <div>
                    <h1 className="font-semibold text-xl text-primary bg-whitecolor mt-5 ml-10 py-2 px-4">LOGO</h1>
                </div>
                <div>
                    <ul className="flex justify-end items-center flex-wrap mt-4 mb-8">
                        <li className="mr-6"><a className="text-whitecolor font-normal" href="#">Overview</a></li>
                        <li className="mr-6"><a className="text-whitecolor font-normal " href="#">Amenities</a></li>
                        <li className="mr-6"><a className="text-whitecolor font-normal " href="#">Location</a></li>
                        <li className="mr-6"><a className="text-whitecolor font-normal " href="#">Testimonials</a></li>
                        <a href="#" className="mr-24 border border-white-600 text-whitecolor font-normal px-3 py-1.5 ">Contact us</a>
                    </ul>
                </div>

            </div>
            <div className="header_section flex justify-center justify-items-center w-6xl pl-8 ">
                <div className="max-w-6xl relative">
                    <img src="images/Group 34.png" alt="" />
                </div>
                <div className="absolute left-12 bottom-2 items-center border border-white-600 w-96 pb-8 bg-whitecolor">
                    <h1 className="text-primary mt-8 mb-4 ml-6 font-montserrat font-medium text-xl" >ADITYA HEIGHTS</h1>
                    <p className="text-secondary my-4 ml-6 font-roboto font-light text-base">Dictum nibh non, suspendisse egestas vel volutpat vivamus sollicitudin malesuada. Et non et amet tristique mattis quisque est quis pellentesque.</p>
                    <h1 className="text-secondary my-4 ml-6 font-montserrat font-medium text-lg">1 BHK . 2 BHK . 3 BHK</h1>
                    <a className="text-primary mt-8 mb-8 ml-6 font-montserrat font-medium text-xl border border-primary py-2 px-4 hover:bg-primary hover:text-white hover:duration-500" href="#">Learn more</a>
                    <a className="text-whitecolor mt-8 mb-8 ml-6 font-montserrat font-medium text-xl border border-primary bg-primary py-2 px-4 hover:bg-white hover:text-primary hover:duration-500" href="#">Contact us</a>

                </div>
            </div>
        </div>
    )
}

export default Header
