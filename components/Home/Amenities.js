import React, { useState, useEffect, useCallback, useRef } from "react";
import { aminities, aminitiesSliderData, aminitiesServiceBox } from '../../constants/constant'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
SwiperCore.use([Virtual]);
SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

const Amenities = () => {
    const swiperRef = useRef(null);

    const [currentIndex, updateCurrentIndex] = useState(0);
    const params = {
        initialSlide: 2,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 30,
        loop: true,
        autoplay: true,
    };

    // Manipulate swiper from outside
    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
            updateIndex()

        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    const updateIndex = useCallback(
        () => updateCurrentIndex(swiperRef.current.swiper.realIndex),
        []
    );
    // Add eventlisteners for swiper after initializing
    useEffect(() => {
        const swiperInstance = swiperRef.current.swiper;

        if (swiperInstance) {
            swiperInstance.on("slideChange", updateIndex);
        }

        return () => {
            if (swiperInstance) {
                swiperInstance.off("slideChange", updateIndex);
            }
        };
    }, [updateIndex, swiperRef]);

    const slidePerView = 1;

    const pagination = {
        "clickable": true,

    }
    return (
        <div className=" relative pt-5 md:pt-56 container">

            <div className='block md:hidden'>
                <div className="Amen_slider  md:absolute md:bottom-96 md:pb-40">
                    <div className='relative mr-10 md:mr-0'>
                        <Swiper
                            slidesPerView={slidePerView}
                            navigation
                            {...params}
                            ref={swiperRef}
                            pagination={pagination}
                        >
                            {aminitiesSliderData.map((data, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img src={data.image} alt="" />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <div className='absolute bottom-7 right-7 z-50'>
                            <div className='flex'>
                                <a className='border border-white cursor-pointer px-3.5 md:px-5 py-2.5 md:py-4 mr-4 hover:bg-secondary hover:border-secondary transition-all hover:duration-500' onClick={goPrev}>
                                    <img src='/images/arrowleft.svg' />
                                </a>
                                <a className='border border-white cursor-pointer  px-3.5 md:px-5 py-2.5 md:py-4  hover:bg-secondary hover:border-secondary transition-all hover:duration-500' onClick={goNext}>
                                    <img src='/images/arrowright.svg' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:absolute md:top-64 mx-10 md:mx-0 bg-white md:right-20 py-8 md:py-0 shadow-lg z-50">
                    <h1 className="font-medium text-base md:text-xl font-montserrat md:mt-8 ml-6 text-primary">{aminitiesServiceBox.title}</h1>
                    <p className="font-light text-xs font-roboto mt-4 ml-6 md:mb-8 text-secondary md:w-96">{aminitiesServiceBox.description}</p>
                </div>
            </div>

            <div className="md:flex md:justify-end ml-10 md:ml-0 md:mt-80 mb-24 relative">
                <div className="Amen_bg w-full max-w-6xl py-10 px-8 md:px-0 ">
                    <h1 className="font-medium text-lg md:text-4xl font-montserrat md:mt-36 md:mb-8 md:ml-8 text-white">AMENITIES</h1>
                    <p className="font-normal text-xs font-montserrat mt-3 md:mt-6 mb-8 md:ml-8 text-white max-w-3xl">Neque, viverra nibh morbi in proin vel. Maecenas cursus sit eu ultrices amet elit. Amet scelerisque pellentesque vel tellus condimentum malesuada sagittis faucibus pretium. Tellus, mauris eget urna purus, nam. Rhoncus in diam sapien fames at urna mi. </p>
                    <div className=" my-7 md:ml-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                            {aminities.map((data, index) => {
                                return (
                                    <div key={index} className=" flex justify-start mb-3">
                                        <img src={data.image} alt={data.title} className='w-6 md:w-10' />
                                        <h1 className="font-light text-sm md:text-2xl font-roboto ml-3 text-white flex self-center">{data.title}</h1>
                                    </div>
                                )
                            })}

                        </div>


                    </div>
                </div>
            </div>

            <div className='hidden md:block'>
                <div className="Amen_slider absolute top-36 pb-40">
                    <div className='relative'>
                        <Swiper
                            slidesPerView={slidePerView}
                            navigation
                            {...params}
                            ref={swiperRef}
                            pagination={pagination}
                        >
                            {aminitiesSliderData.map((data, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img src={data.image} alt="" />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <div className='absolute bottom-7 right-7 z-50'>
                            <div className='flex'>
                                <a className='border border-white cursor-pointer px-3.5 md:px-5 py-2.5 md:py-4 mr-4 hover:bg-secondary hover:border-secondary transition-all hover:duration-500' onClick={goPrev}>
                                    <img src='/images/arrowleft.svg' />
                                </a>
                                <a className='border border-white cursor-pointer  px-3.5 md:px-5 py-2.5 md:py-4  hover:bg-secondary hover:border-secondary transition-all hover:duration-500' onClick={goNext}>
                                    <img src='/images/arrowright.svg' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Amen_service md:absolute md:top-64 bg-white md:right-20 shadow-lg z-50">
                    <h1 className="font-medium text-xl font-montserrat mt-8 ml-6 text-primary">{aminitiesServiceBox.title}</h1>
                    <p className="font-light text-xs font-roboto mt-4 ml-6 mb-8 text-secondary w-96">{aminitiesServiceBox.description}</p>
                </div>
            </div>

        </div>

    )
}

export default Amenities
