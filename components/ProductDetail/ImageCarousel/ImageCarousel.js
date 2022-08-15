import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";

export default function ImageCarousel({ images }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#404040",
                    "--swiper-pagination-color": "#fff",
                    "--swiper-navigation-size": "20px",
                }}
                nextEl={null}
                spaceBetween={10}
                navigation={true}
                thumbs={{
                    swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                            ? thumbsSwiper
                            : null,
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 rounded-sm border"
            >
                {images.map(({ file, url, label }, index) => (
                    <SwiperSlide key={`main-image-${url}-${index}`}>
                        <Image
                            draggable={false}
                            alt="image-product"
                            src={file || url}
                            layout="fill"
                            objectFit="contain"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper rounded-sm "
            >
                {images.map(({ file, small_url, url, label }, index) => (
                    <SwiperSlide
                        className="border"
                        key={`thumbnail-image-${url}-${index}`}
                    >
                        <Image
                            draggable={false}
                            priority
                            key={`thumnail-image-${small_url || file || url}`}
                            alt="image-product"
                            src={small_url || file || url}
                            layout="fill"
                            objectFit="contain"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
