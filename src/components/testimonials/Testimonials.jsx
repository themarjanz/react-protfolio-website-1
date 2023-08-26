import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [

    {
        avatar: AVTR1,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In consequatur cupiditate ipsum vero, minima soluta? Eum, nihil, fugit labore aut doloremque minima, ratione laborum earum maxime tenetur error expedita animi'
    },
    {
        avatar: AVTR2,
        name: 'Mina Snow',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In consequatur cupiditate ipsum vero, minima soluta? Eum, nihil, fugit labore aut doloremque minima, ratione laborum earum maxime tenetur error expedita animi'
    },
    {
        avatar: AVTR3,
        name: 'Kina Snow',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In consequatur cupiditate ipsum vero, minima soluta? Eum, nihil, fugit labore aut doloremque minima, ratione laborum earum maxime tenetur error expedita animi'
    },
    {
        avatar: AVTR4,
        name: 'Rina Snow',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In consequatur cupiditate ipsum vero, minima soluta? Eum, nihil, fugit labore aut doloremque minima, ratione laborum earum maxime tenetur error expedita animi'
    },
]


const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>REVIEW FROM CLIENTS</h5>
            <h2>Testimonials</h2>

            {/* Install from- https://swiperjs.com/react */}

            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}

                pagination={{ clickable: true }}>
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className="client__avatar">
                                    <img src={avatar} alt='' />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }



            </Swiper>
        </section>
    )
}

export default Testimonials