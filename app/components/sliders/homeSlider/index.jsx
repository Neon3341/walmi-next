"use client"
import { useEffect, useState } from "react"
import HSSlideOne from "./SlideOne";
import HSSlideTwo from "./SlideTwo";
import Button from "@components/button/variantButton";


export default function HomeSlider() {
    const [slide, setSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const duration = 5000;
    const autoplay = false;

    const slides = [
        <HSSlideOne />,
    ]

    useEffect(() => {
        autoplay && autoRotateSlideShow()
    }, []);

    const autoRotateSlideShow = () => {
        setTimeout(() => {
            nextSlide()
            autoRotateSlideShow()
        }, duration);
    }

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setSlide((prev) => {
                if (prev <= slides.length - 2) {
                    return prev + 1
                } else {
                    return 0;
                }
            });
            setIsTransitioning(false);
        }, 300); // Длительность анимации
    }

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setSlide((prev) => {
                if (prev > 0) {
                    return prev - 1
                } else {
                    return slides.length - 1;
                }
            });
            setIsTransitioning(false);
        }, 300); // Длительность анимации
    }

    return (
        <div className="relative">
            <div className="hidden flex-col absolute -left-[250px]">
                <p>
                    <span className="font-bold">METADATA:</span>
                    <br />
                    Slide: {slide + 1}
                    <br />
                    Slides total:{slides.length}
                </p>
                <div className="w-fit">
                    <Button onClick={nextSlide}>След слайд</Button>
                    <Button onClick={prevSlide}>Прошлый слайд</Button>
                </div>
            </div>

            <div className="relative rounded-xl lg:h-full bg-neutral-200">
                {slides.map((slideComponent, index) => (
                    <div
                        key={index}
                        className={`lg:absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
                            index === slide ? 'opacity-100 z-20' : 'opacity-0 z-0'
                        }`}
                    >
                        {slideComponent}
                    </div>
                ))}
            </div>
            <br />
        </div>
    )
}