
interface ImageProps {
    src: string;
    alt: string;
}

interface PriceProps {
    newPrice: string;
    oldPrice: string;
    payment?: string;
}

interface InfoTextProps {
    one: string;
    two: string;
    three: string;
}

interface Rate {
    title: string;
    underTitle: string;
    img: ImageProps;
    price: PriceProps;
    infoText: InfoTextProps;
    buttonText: string;
    code: number;
}

interface TariffProps {
    rate: Rate;
}

const Tariff: React.FC<TariffProps> = ({ rate }) => {
    return (
        <div className="tariff">
            <div className={`tariffTitle tariffTitle-${rate.code}`}>
                <h3>{rate.title}</h3>
                <div className="titleAndImg">
                    <p>{rate.underTitle}</p>
                    <img src={rate.img.src} alt={rate.img.alt} className={`img img-${rate.code}`}/>
                </div>
            </div>
            <div className={`tariffInfo tariffInfo-${rate.code}`}>
                <span className={rate.code === 2 ? "spanInfo" : ""}><strong className="newPrice">{rate.price.newPrice}</strong>{rate.price.oldPrice && <del className="oldPrice">{rate.price.oldPrice}</del>}</span>
                <p>{rate.price.payment}</p>
                <h4>В тариф входит:</h4>
                <div className="list">
                    <p>{rate.infoText.one}</p>
                    <p>{rate.infoText.two}</p>
                    <p>{rate.infoText.three}</p>
                </div>
                <button>{rate.buttonText}</button>
            </div>
        </div>
    );
}


export const rates = [
    {
        title: 'Beginner',
        underTitle: 'Для небольшого исследования',
        img: {
            src: './bulb.svg',
            alt: 'bulb',
        },
        price: {
            newPrice: '799 ₽',
            oldPrice: '1 200 ₽',
            payment: 'или 150 ₽/мес. при рассрочке на 24 мес.',
        },
        infoText: {
            one:'Безлимитная история запросов',
            two:'Безопасная сделка',
            three:'Поддержка 24/7',
        },
        buttonText: 'Подробнее',
        code: 0, 
    },
    {
        title: 'Pro',
        underTitle: 'Для HR и фрилансеров',
        img: {
            src: './bullseye.svg',
            alt: 'bullseye',
        },
        price: {
            newPrice: '1 299 ₽',
            oldPrice: '2 600 ₽',
            payment: 'или 279 ₽/мес. при рассрочке на 24 мес.',
        },
        infoText: {
            one:'Все пункты тарифа Beginner',
            two:'Экспорт истории',
            three:'Рекомендации по приоритетам',
        },
        buttonText: 'Подробнее',  
        code: 1,  
    },
    {
        title: 'Business',
        underTitle: 'Для корпоративных клиентов',
        img: {
            src: './notebook.svg',
            alt: 'notebook',
        },
        price: {
            newPrice: '2 379 ₽',
            oldPrice: '3 700 ₽',
            payment: '',
        },
        infoText: {
            one:'Все пункты тарифа Pro',
            two:'Безлимитное количество запросов',
            three:'Приоритетная поддержка',
        },
        buttonText: 'Подробнее', 
        code: 2,   
    },
]





function Tariffs () {
  return (
    <>
      {rates.map((rate) => (
        <Tariff key={rate.code} rate={rate} />
      ))}
    </>
  );
}

export default Tariffs;