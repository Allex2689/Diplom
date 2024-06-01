
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';



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
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={3}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
    >
      {rates.map((rate) => (
        <SwiperSlide key={rate.code}>
          <Card rate={rate}/>
        </SwiperSlide>
      ))}
      <img src="./arrow1.svg" alt="arrow1" className="swiper-button-prev" />
      <img src="./arrow2.svg" alt="arrow2" className="swiper-button-next" />
    </Swiper>  
  );
}

export default Cards;
