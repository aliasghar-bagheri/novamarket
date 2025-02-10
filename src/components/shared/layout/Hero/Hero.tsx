'use client';

import Button from '@/components/ui/Button';
import { MAIN_SLIDER } from '@/constants';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

export default function Hero() {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={10}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        centeredSlides
        // navigation
        className="relative w-full h-28 sm:h-56 lg:h-80 xl:h-[400px] overflow-hidden rounded"
      >
        {MAIN_SLIDER.map((slide) => (
          <SwiperSlide
            key={slide.src}
            className="relative w-full h-full rounded"
          >
            <Image
              src={slide.src}
              fill
              className="object-cover object-center rounded"
              alt="slide"
            />
          </SwiperSlide>
        ))}
        <SliderNavButtons />
      </Swiper>
    </div>
  );
}

function SliderNavButtons() {
  const swiper = useSwiper();

  return (
    <div className="absolute flex z-10 gap-x-3 right-2 bottom-2 sm:right-5 sm:bottom-5">
      <Button
        variant="secondary"
        type="button"
        className="p-2"
        onClick={() => swiper.slidePrev()}
      >
        <ArrowRight className="" />
      </Button>
      <Button
        variant="secondary"
        type="button"
        className="p-2"
        onClick={() => swiper.slideNext()}
      >
        <ArrowLeft className="" />
      </Button>
    </div>
  );
}
