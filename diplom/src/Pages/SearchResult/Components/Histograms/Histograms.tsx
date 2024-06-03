import { useEffect } from "react";
import { useHistogramData, HistogramColumn } from "../../hooks/useHistogramData";
import { Swiper, SwiperSlide } from 'swiper/react';
import styles1 from '../../searchResult.module.css';

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

    useEffect(() => {
        fetchData();
    }, []);

    return (
      <>
      <Swiper>
     
        {data.map((item) => (
         <SwiperSlide key={item.date}>
          <Column  columnData={item} />
          </SwiperSlide>
          
        
        ))}
   </Swiper>
      </>
    );
  }

  export default Histograms;
