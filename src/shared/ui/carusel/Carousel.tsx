'use client'

import Image from 'next/image';
import classes from './carousel.module.css';
import { Carousel as MantineCarousel } from "@mantine/carousel"
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Announcement } from '@/shared/api/db';


export const Carousel = ({ data }: { data: Announcement[] }) => {

    const autoplay = useRef(Autoplay({ delay: 7000, jump: true }));

    return (
        <>
            <MantineCarousel
                align={'center'}
                draggable={false}
                loop
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                classNames={{
                    controls: classes.controls,
                    root: classes.root,
                    control: classes.control,
                    viewport: classes.viewport,
                    container: classes.container
                }} >
                {
                    data.map((slide) => (
                        <MantineCarousel.Slide classNames={{
                            slide: classes.slide
                        }} key={slide.id}>
                            <div className={classes.slide_box_content}>
                                <Image src={slide.imageUrl} alt="photo" fill />
                                <div className={classes.slide_box_header}>
                                    {slide.title && <h1>{slide.title}</h1>}
                                    {slide.description && <p>{slide.description}</p>}
                                </div>
                            </div>
                        </MantineCarousel.Slide>
                    ))
                }
            </MantineCarousel >
        </>
    )
}