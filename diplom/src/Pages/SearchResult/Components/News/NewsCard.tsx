 import {News} from './types';


 interface NewsCardProps {
    props: News;
 }
 
 
 export const NewsCard: React.FC<NewsCardProps> = ({props}) => {
    return (
        <div className={`news news-${props.code}`}>
            <div className='topInfo'>
                <p>{props.date}</p>
                <a href="">{props.link}</a>
            </div>
            <h4>{props.title}</h4>
            <p className='underTitleText'>{props.techNews}</p>
            <img src={props.img.src} alt={props.img.alt}/>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <div className='buttonWithText'>
            <button>{props.button}</button>
            <p>{props.text3}</p>
            </div>
        </div>
    )
}