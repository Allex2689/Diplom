import { useState } from 'react';
import { useLocation } from 'react-router-dom';

interface News {}

interface ObjectSearchItem {
  encodedId: string;
  influence: number;
  similarCount: number;
}

interface ObjectSearchResponseData {
  items: ObjectSearchItem[];
}

interface DocumentsResponseData {}

export const useNewsData = () => {
  const [data, setData] = useState([]);

  const { state } = useLocation();

  const fetchDocuments = (ids: string[]) => {
    fetch('https://gateway.scan-interfax.ru/api/v1/documents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({ ids })
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData: DocumentsResponseData) => {
        setData(responseData);
      });
  };

  const fetchData = () => {
    if (!state) {
      return;
    }

    fetch('https://gateway.scan-interfax.ru/api/v1/objectsearch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({
        issueDateInterval: {
          startDate: state.startDate,
          endDate: state.endDate
        },
        searchContext: {
          targetSearchEntitiesContext: {
            targetSearchEntities: [
              {
                type: 'company',
                sparkId: null,
                entityId: null,
                inn: state.inn,
                maxFullness: state.maxFullness,
                inBusinessNews: state.inBusinessNews
              }
            ],
            onlyMainRole: state.onlyMainRole,
            tonality: state.tonality,
            onlyWithRiskFactors: state.onlyWithRiskFactors,
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
          excludeTechNews: state.excludeTechNews,
          excludeAnnouncements: state.excludeAnnouncements,
          excludeDigests: state.excludeDigests
        },
        similarMode: 'duplicates',
        limit: state.limit,
        sortType: 'sourceInfluence',
        sortDirectionType: 'desc',
        intervalType: 'month',
        histogramTypes: ['totalDocuments', 'riskFactors']
      })
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData: ObjectSearchResponseData) => {
        const ids = responseData.items.map((item: ObjectSearchItem) => item.encodedId);
        fetchDocuments(ids);
      })
      .catch((err) => console.error(err));
  };
  return {
    data,
    fetchData
  };
};
