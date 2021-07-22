import React, { useState, useEffect, useCallback, useRef } from "react";
import { testimonialData, testimonialSliderData } from '../../constants/constant'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
SwiperCore.use([Virtual]);
SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);
const Client = () => {
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


    return (
        <div className='bg-clientbg w-full px-8 md:px-0 pb-20 md:pb-96'>

            <div className=" max-w-5xl mx-auto">
                <h1 className="font-medium client-title font-montserrat mt-24 pt-7 mb-3  text-primary ">{testimonialData.title}</h1>
                <p className="font-normal text-xs font-montserrat  text-secondary mb-12 max-w-2xl">{testimonialData.description} </p>
                <div className='relative'>
                    <div className='md:absolute md:left-0 md:right-0'>
                        <div className="flex flex-col md:flex-row bg-primary py-4">

                            <div className=" md:w-96 my-6  pt-10 md:pl-8 pr-10 testimonial-left border-black">
                               <div className='flex justify-center '>
                               <img className="ml-8" src={testimonialData.image} alt="" />
                               </div>
                              
                                <h1 className="font-medium text-base md:text-2xl font-montserrat mt-6 mb-2 text-center text-secondary">{testimonialData.name}</h1>
                                <h1 className="font-normal text-xs md:text-base italic font-montserrat mb-10 text-center text-secondary">{testimonialData.designation}</h1>
                            </div>
                            <div className='client-slider'>
                                <Swiper
                                    slidesPerView={slidePerView}
                                    navigation
                                      {...params}
                                    ref={swiperRef}
                                >
                                    {testimonialSliderData.map((data, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div>
                                                    <p className="font-normal bg-fadeprimary text-sm md:text-xl font-montserrat mt-12 mx-8 md:mx-10 mb-10 px-6 py-8 text-secondary">
                                                        {data.comments}
                                                    </p>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                             </Swiper>

                                <div className='flex justify-end mr-5'>
                                    <div>
                                        <a onClick={goPrev}>
                                            <img src='/images/arrowleft.svg' className='border border-white  cursor-pointer px-3.5 md:px-5 py-2.5 md:py-4 mr-4 hover:bg-secondary hover:border-secondary transition-all hover:duration-500' />
                                        </a>
                                    </div>
                                    <div>
                                        <a onClick={goNext}>
                                            <img src='/images/arrowright.svg' className='border border-white cursor-pointer px-3.5 md:px-5 py-2.5 md:py-4 hover:bg-secondary hover:border-secondary transition-all hover:duration-500' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Client
