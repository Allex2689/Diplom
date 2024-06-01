
import React, {useCallback, useEffect, useState} from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {MOBILE_SCREEN_MAX_WIDTH} from "../constants";
import ArrowPrev from '../../../assets/images/arrow1.svg';
import ArrowNext from '../../../assets/images/arrow2.svg';

interface Rate {
  img: string;
  alt: string;
  text: string;
  code: number;
}

interface CardsProps {
  rate: Rate;
}


export const Card: React.FC<CardsProps> = ({ rate }) => {
  return (
    <div className="card">
      <img src={rate.img} alt={rate.alt} />
      <p>{rate.text}</p>
    </div>
  );
}

export const rates = [
  {
    img: './time.svg',
    alt: 'time',
    text: 'Высокая и оперативная скорость обработки заявки',
    code: 0,
  },
  {
    img: './search.svg',
    alt: 'search',
    text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос',
    code: 1,
  },
  {
    img: './shield.svg',
    alt: 'shield',
    text: 'Защита конфиденциальных сведений, не подлежащих разглашению по федеральному законодательству',
    code: 2,
  },
  {
    img: './time.svg',
    alt: 'time',
    text: 'Высокая и оперативная скорость обработки заявки',
    code: 3,
  },
  {
    img: './search.svg',
    alt: 'search',
    text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос',
    code: 4,
  },
  {
    img: './shield.svg',
    alt: 'shield',
    text: 'Защита конфиденциальных сведений, не подлежащих разглашению по федеральному законодательству',
    code: 5,
  },
];


function Cards() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return (
      <div className="swiper-container">
          <img src={ArrowPrev} alt="arrow1" className="swiper-button-prev" onClick={handlePrevious}/>
          <Swiper
              spaceBetween={10}
              slidesPerView={width < MOBILE_SCREEN_MAX_WIDTH ? 1 : 3}
              onSwiper={setSwiperRef}
          >
              {rates.map((rate) => (
                  <SwiperSlide key={rate.code}>
                    <Card rate={rate}/>
                  </SwiperSlide>
              ))}
          </Swiper>
          <img src={ArrowNext} alt="arrow2" className="swiper-button-next" onClick={handleNext}/>
      </div>
  );
}

export default Cards;
