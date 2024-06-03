import { useState } from "react";
import moment from 'moment';

export enum HistogramType {
    RiskFactors = 'riskFactors',
    TotalDocuments = 'totalDocuments',
}

interface HistogramData {
    date: string;
    value: number;
}

interface Histogram {
    data: HistogramData[];
    histogramType: HistogramType.RiskFactors | HistogramType.TotalDocuments;
}

export interface HistogramColumn {
    date: string;
    totalDocuments: number;
    riskFactors: number;
}

const transformData = (data: Histogram[]) => {
   const result: HistogramColumn[] = [];

   data[0]?.data?.map(({ date, value }) => {
    const formattedDate = moment(date).format('DD.MM.YYYY');
    const riskFactors = data[1]?.data?.find((riskData) => riskData.date === date)?.value || 0;

       result.push({
        date: formattedDate,
        totalDocuments: value,
        riskFactors: riskFactors,
       })
   })

    return result;
}

 export const useHistogramData = () => {
    const [data, setData] = useState<Histogram[]>([]);

    const fetchData = () => {
        fetch('https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify({
              issueDateInterval: {
              startDate: "2023-09-01T00:00:00+03:00",
              endDate: "2024-04-13T23:59:59+03:00"
              },
              searchContext: {
              targetSearchEntitiesContext: {
              targetSearchEntities: [
              {
              type: "company",
              sparkId: null,
              entityId: null,
              inn: 7710137066,
              maxFullness: true,
              inBusinessNews: null
              }
              ],
              onlyMainRole: true,
              tonality: "any",
              onlyWithRiskFactors: false,
              riskFactors: {
              and: [],
              or: [],
              not: []
              },
              themes: {
              and: [],
              or: [],
              not: []
              }
              },
              themesFilter: {
              and: [],
              or: [],
              not: []
              }
              },
              searchArea: {
              includedSources: [],
              excludedSources: [],
              includedSourceGroups: [],
              excludedSourceGroups: []
              },
              attributeFilters: {
              excludeTechNews: true,
              excludeAnnouncements: true,
              excludeDigests: true
              },
              similarMode: "duplicates",
              limit: 1000,
              sortType: "sourceInfluence",
              sortDirectionType: "desc",
              intervalType: "month",
              histogramTypes: [
              "totalDocuments",
              "riskFactors"
              ]
              })

        }).then((response) => {
            return response.json()
        })
        .then((responseData) => {
            setData(responseData?.data);
        })
        .catch((err) => console.error(err));
    }
    return {
        data: transformData(data),
        fetchData
    }
    }
