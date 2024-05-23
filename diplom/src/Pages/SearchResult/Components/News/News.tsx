import React from 'react';
import {newsInfo} from './data';
import { NewsCard } from './NewsCard';
import { News } from './types';

function AllNews() {
    return (
      <>
        {newsInfo.map((props: News) => (
          <NewsCard key={props.code} props={props} />
        ))}
      </>
    );
  }

  export default AllNews;