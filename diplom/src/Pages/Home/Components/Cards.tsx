
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar} from 'swiper/modules';



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
];


function Cards() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      
    >
      {rates.map((rate) => (
        <SwiperSlide>
          <Card rate={rate} key={rate.code}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Cards;
