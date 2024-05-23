interface Rate {
    img: string;
    alt: string;
    text: string;
    code: number;
}

interface CardsProps {
    rate: Rate;
}

const Card: React.FC<CardsProps> = ({ rate }) => {
    return (
        <div className="card">
            <img src={rate.img} alt={rate.alt} />
            <p>{rate.text}</p>
        </div>
    )
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

]


function Cards() {
    return (
      <>
        {rates.map((rate) => (
          <Card key={rate.code} rate={rate} />
        ))}
      </>
    );
  }

  export default Cards;



