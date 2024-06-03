import { useEffect,useState, useCallback} from "react";
import { useHistogramData, HistogramColumn } from "../../hooks/useHistogramData";
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles1 from '../../searchResult.module.css';
import classNames from "classnames";
import MOBILE_SCREEN_MAX_WIDTH from '../../../Home/Components/Cards/constans';
import ArrowPrev from '../../../../assets/images/arrow1.svg';
import ArrowNext from '../../../../assets/images/arrow2.svg';

interface Info {
  period: string;
  total: number;
  risks: number;
}

interface InfoProps {
  columnData: HistogramColumn;
}

const Column: React.FC<InfoProps> = ({columnData}) => {
    return (
        <div className="summaryInfoBlock">
            <p>{columnData.date}</p>
            <p>{columnData.totalDocuments}</p>
            <p>{columnData.riskFactors}</p>
        </div>
    )
}

function Histograms () {
    const {data, fetchData} = useHistogramData();
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

    useEffect(() => {
        fetchData();
    }, []);

    return (
      <>
      <Swiper 
       modules={[Navigation]}
       onSwiper={setSwiperRef}
      spaceBetween={50}
      slidesPerView={width < MOBILE_SCREEN_MAX_WIDTH ? 1 : 9}
      className={classNames(styles1.swiper, styles1['swiper-wrapper'])}
      >
        {data.map((item) => (
         <SwiperSlide key={item.date} className={styles1["swiper-slide"]}>
          <Column  columnData={item} />
          </SwiperSlide>
        ))}
   </Swiper>
      </>
    );
  }

  export default Histograms;
