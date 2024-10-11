import React, { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  StackedCarousel,
  ResponsiveContainer,
} from 'react-stacked-center-carousel';
import Image from 'next/image';
import HeroCard from '../atoms/HeroCard';

const ArrowLeft = () => (
  <Image src="/chev-left.svg" alt="left" width={32} height={32} />
);

const ArrowRight = () => (
  <Image src="/chev-right.svg" alt="right" width={32} height={32} />
);

export const carouselItems = [{}, {}];

const CardSwipeAnimation = () => {
  const carouselRef = useRef<any>();
  const isWideViewport = useMediaQuery({ query: '(min-width: 768px)' });
  const carouselHeight = isWideViewport ? '400px' : '320px';
  const slideWidth = isWideViewport ? 294 : 222;
  const carouselWidth = isWideViewport ? 600 : 315;

  useEffect(() => {
    const autoScroll = setInterval(() => {
      carouselRef.current?.goNext();
    }, 3500);
    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className="max-w-[600px] relative xl:transform xl:translate-y-[-35px]">
      <div style={{ height: carouselHeight }}>
        <ResponsiveContainer
          carouselRef={carouselRef}
          render={(parentWidth, ref) => (
            <StackedCarousel
              ref={ref}
              slideComponent={ProfileCard}
              slideWidth={slideWidth}
              carouselWidth={carouselWidth}
              data={carouselItems}
              currentVisibleSlide={3}
              maxVisibleSlide={3}
              useGrabCursor
            />
          )}
        />
        <NavigationArrows carouselRef={carouselRef} />
      </div>
    </div>
  );
};

interface ArrowProps {
  carouselRef: any;
}

const NavigationArrows = ({ carouselRef }: ArrowProps) => (
  <>
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '-10px',
        zIndex: 10,
        cursor: 'pointer',
      }}
      onClick={() => carouselRef.current?.goBack()}
    >
      <ArrowLeft />
    </div>
    <div
      style={{
        position: 'absolute',
        top: '50%',
        right: '-10px',
        zIndex: 10,
        cursor: 'pointer',
      }}
      onClick={() => carouselRef.current?.goNext()}
    >
      <ArrowRight />
    </div>
  </>
);

const ProfileCard = React.memo(() => {
  return (
    <div>
      <HeroCard />
    </div>
  );
});

ProfileCard.displayName = 'ProfileCard';

export default CardSwipeAnimation;
