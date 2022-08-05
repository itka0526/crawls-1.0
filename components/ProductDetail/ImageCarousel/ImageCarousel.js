import { useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "./ImageCarousel.module.css";

import { ChevronLeft as LeftIcon } from "react-feather";
import { ChevronRight as RightIcon } from "react-feather";

import Image from "next/image";

const ImageCarousel = ({ images }) => {
    const globalControlStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        height: "2.25rem",
        width: "2.25rem",
        backgroundColor: "#1660ab",
        background: "rgba(170, 165, 165, 0.17)",
        boxShadow:
            "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        backdropFilter: "blur(3.7px)",
        "-webkit-backdrop-filter": "blur(3.7px)",
        top: "0",
        bottom: "0",
        margin: "auto",
        zIndex: "1000",
        borderRadius: "50%",
        transition: "transform 150ms",
        cursor: "pointer",
    };

    const carouselControlLeftButtonStyle = {
        left: "0.25rem",
        paddingRight: "0.125rem",
        ...globalControlStyles,
    };
    const carouselControlRightButtonStyle = {
        right: "0.25rem",
        paddingLeft: "0.125rem",
        ...globalControlStyles,
    };

    const fakeThumbnail = useRef();

    useEffect(() => {
        //suuld ni neg placeholder tavihgui bol ygad ch um suuliin zurag ni dutuu haragdaad bsn
        const el = fakeThumbnail.current;
        if (el) {
            el.parentNode.style.visibility = "hidden";
            el.style.pointerEvents = "none";
        }
    }, [fakeThumbnail]);

    return (
        <Carousel
            className={`${styles["custom-carousel"]} h-full w-full `}
            useKeyboardArrows
            transitionTime={250}
            showIndicators={null}
            showStatus={false}
            renderArrowPrev={(onClickHandler) =>
                images.length > 1 && (
                    <div
                        data-identifier="main-carousel-controls-identifier"
                        style={carouselControlLeftButtonStyle}
                        onClick={onClickHandler}
                    >
                        <LeftIcon height={30} width={30} color={"black"} />
                    </div>
                )
            }
            renderArrowNext={(onClickHandler) =>
                images.length > 1 && (
                    <div
                        data-identifier="main-carousel-controls-identifier"
                        onClick={onClickHandler}
                        style={carouselControlRightButtonStyle}
                    >
                        <RightIcon height={27} width={27} color={"black"} />
                    </div>
                )
            }
            renderThumbs={() => {
                return images
                    .concat([{ file: "", label: "fake" }])
                    .map(({ file, small_url, url, label }, index) =>
                        label === "fake" ? (
                            <div
                                ref={fakeThumbnail}
                                key={`fake-div-${index}`}
                            />
                        ) : (
                            <Image
                                priority
                                key={`thumnail-image-${
                                    small_url || file || url
                                }`}
                                alt="image-product"
                                src={small_url || file || url}
                                height={75}
                                width={75}
                            />
                        )
                    );
            }}
        >
            {images.map(({ file, url, label }, index) => (
                <div
                    className="relative h-full w-full"
                    key={`main-image-${file || url}`}
                >
                    <Image
                        alt="image-product"
                        src={file || url}
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;
