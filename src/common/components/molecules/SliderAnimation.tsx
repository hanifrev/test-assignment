import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SmallCardAnimation from '../atoms/SmallCardAnimation';

const cardsData = [
  {
    name: '해외 마케팅',
    image: '/small-card-1.svg',
  },
  {
    name: '퍼블리셔',
    image: '/small-card-2.svg',
  },
  {
    name: '캐드원(제도사)',
    image: '/small-card-3.svg',
  },
  {
    name: '해외 세일즈',
    image: '/small-card-4.svg',
  },
  {
    name: '해외 CS',
    image: '/small-card-5.svg',
  },
];

const CardSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container overflow-hidden relative w-auto">
      <motion.div
        className="cards-wrapper flex"
        style={{
          width: `${cardsData.length * 100}%`,
          display: 'flex',
          transition: 'transform 0.8s ease-in-out',
        }}
        animate={{ x: -activeIndex * 400 }}
      >
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            className="card w-auto h-[88px] flex items-center justify-center px-[10px]  rounded-lg"
            // style={{ minWidth: '400px' }}
          >
            <SmallCardAnimation imageSrc={card.image} text={card.name} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CardSlider;
