import { useEffect } from "react";
import { useHistogramData, HistogramColumn } from "../hooks/useHistogramData";


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
        {data.map((item) => (
          <Column key={item.date} columnData={item} />
        ))}
      </>
    );
  }

  export default Histograms;
