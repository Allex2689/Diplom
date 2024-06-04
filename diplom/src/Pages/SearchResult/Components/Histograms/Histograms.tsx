import { useEffect, useState } from 'react';
import { useHistogramData, HistogramColumn } from '../../hooks/useHistogramData';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles1 from '../../searchResult.module.css';
import { useLocation } from 'react-router-dom';
import MOBILE_SCREEN_MAX_WIDTH from '../../../Home/Components/Cards/constans'

interface Info {
  period: string;
  total: number;
  risks: number;
}

interface InfoProps {
  columnData: HistogramColumn;
}

const Column: React.FC<InfoProps> = ({ columnData }) => {
  return (
    <div className="summaryInfoBlock">
      <p>{columnData.date}</p>
      <p>{columnData.totalDocuments}</p>
      <p>{columnData.riskFactors}</p>
    </div>
  );
};

function Histograms() {
  const { data, fetchData } = useHistogramData();
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Swiper 
      className="swiper-histogram"
      spaceBetween={20}
      slidesPerView={width < MOBILE_SCREEN_MAX_WIDTH ? 1 : 9}
      >
      
        {data.map((item) => (
          <SwiperSlide key={item.date}>
            <Column columnData={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Histograms;
