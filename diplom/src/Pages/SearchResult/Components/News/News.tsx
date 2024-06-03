import React, { useEffect } from 'react';
import { newsInfo } from './data';
import { NewsCard } from './NewsCard';
import { News } from './types';
import { useNewsData } from '../../hooks/useNewsData';

function AllNews() {
  const { data, fetchData } = useNewsData();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {newsInfo.map((props: News) => (
        <NewsCard key={props.code} props={props} />
      ))}
    </>
  );
}

export default AllNews;
