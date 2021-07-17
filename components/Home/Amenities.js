import React from 'react'

const Amenities = () => {
    return (
        <div className="Main relative pt-56">

            <div className="Amen_main flex justify-end mt-96 mb-24 relative">
                <div className="Amen_bg w-full max-w-6xl">
                    <h1 className="font-medium text-4xl font-montserrat mt-36 mb-8 ml-8 text-white">AMENITIES</h1>
                    <p className="font-normal text-xs font-montserrat mt-6 mb-8 ml-8 text-white max-w-3xl">Neque, viverra nibh morbi in proin vel. Maecenas cursus sit eu ultrices amet elit. Amet scelerisque pellentesque vel tellus condimentum malesuada sagittis faucibus pretium. Tellus, mauris eget urna purus, nam. Rhoncus in diam sapien fames at urna mi. </p>

                    {/* -----------Icons----- */}
                    <div className="Amen_icons_main relative flex justify-between mr-8 my-4">

                        <div className="Amen_icon_col">
                            <div className="flex justify-start my-8 ml-8">
                                <img src="images/Group 22.svg" alt="" />
                                <h1 className="font-light text-3xl font-roboto mt-1.5 text-white ml-4">Spa</h1>
                            </div>
                            <div className="flex justify-start my-8 ml-8">
                                <img src="images/Group 93.svg" alt="" />
                                <h1 className="font-light text-3xl font-roboto mt-1.5 text-white ml-4">Gym</h1>
                            </div>
                            <div className="flex justify-start my-8 ml-8">
                                <img src="images/Group 95.svg" alt="" />
                                <h1 className="font-light text-3xl font-roboto mt-1.5 text-white ml-4">Gym</h1>
                            </div>
                            <div className="flex justify-start my-8 ml-8">
                                <img src="images/Group 95.svg" alt="" />
                                <h1 className="font-light text-3xl font-roboto mt-1.5 text-white ml-4">Cycle track</h1>
                            </div>
                        </div>

                        <div className="Amen_icon_col">
                            <div className="flex justify-start my-8 ml-8">
                                <img src="images/Group 103.svg" alt="" />
                                <h1 className="font-light text-3xl font-roboto mt-1.5 text-white ml-4">Swimming pool</h1>
                            </div>
                            <div className="flex justify-start my-8 ml-8">
                                <img src="images/Group 103.svg" alt="" />
                                <h1 className="font-light text-3xl font-roboto mt-1.5 text-white ml-4">Swimming pool</h1>
                            </div>
                            <div className="flex justify-start my-8 ml-8">
                                <img src="images/Group 98.svg" alt="" />
                                <h1 className="font-light text-3xl font-roboto mt-1.5 text-white ml-4">Canteen</h1>
                            </div>
                            <div className="flex justify-start my-8 ml-8">
                                <img src="images/Group 96.svg" alt="" />
                                <h1 className="font-light text-3xl font-roboto mt-1.5 text-white ml-4">Mall</h1>
                            </div>
                        </div>

                        <div className="Amen_icon_col">
                            <div className="flex justify-start my-8 ml-8">
                                <img src="images/Group 93.svg" alt="" />
                                <h1 className="font-light text-3xl font-roboto mt-1.5 text-white ml-4">Swimming pool</h1>
                            </div>
                            <div className="flex justify-start my-8 ml-8">
                                <img src="images/Group 98.svg" alt="" />
                                <h1 className="font-light text-3xl font-roboto mt-1.5 text-white ml-4">Swimming pool</h1>
                            </div>
                            <div className="flex justify-start my-8 ml-8">
                                <img src="images/Group 97.svg" alt="" />
                                <h1 className="font-light text-3xl font-roboto mt-1.5 text-white ml-4">Garden</h1>
                            </div>
                            <div className="flex justify-start my-8 ml-8">
                                <img src="images/Group 98.svg" alt="" />
                                <h1 className="font-light text-3xl font-roboto mt-1.5 text-white ml-4">Playground</h1>
                            </div>
                        </div>

                        <div className="Amen_icon_col">
                            <div className="flex justify-start my-8 ml-8">
                                <img src="images/Group 22.svg" alt="" />
                                <h1 className="font-light text-3xl font-roboto mt-1.5 text-white ml-4">Airport</h1>
                            </div>
                            <div className="flex justify-start my-8 ml-8">
                                <img src="images/Group 93.svg" alt="" />
                                <h1 className="font-light text-3xl font-roboto mt-1.5 text-white ml-4">Airport</h1>
                            </div>
                            <div className="flex justify-start my-8 ml-8">
                                <img src="images/Group 95.svg" alt="" />
                                <h1 className="font-light text-3xl font-roboto mt-1.5 text-white ml-4">Swimming </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Amen_slider absolute bottom-96 pb-40">
                <img src="images/Group 34.png" alt="" />
            </div>

            <div className="Amen_service absolute top-64 bg-white right-20 shadow-lg">
                <h1 className="font-medium text-xl font-montserrat mt-8 ml-6 text-primary">24/7 GYM SERVICES</h1>
                <p className="font-light text-xs font-roboto mt-4 ml-6 mb-8 text-secondary w-96">Dictum nibh non, suspendisse egestas vel volutpat vivamus sollicitudin malesuada.</p>
            </div>
        </div>

    )
}

export default Amenities
