import React, { useEffect, useState } from 'react';
import Datafetching from '../utils/Datafetching';
import { useQuery } from 'react-query';
import Card from './Card';

const JobListing = () => {
  const [page, setPage] = useState(0);

  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData
  } = useQuery(['carddata', page], async () => await Datafetching(page), {
    keepPreviousData: true
  });
  
  return (
    <div className='list-container'>
      {data && data?.map((Jobdata) => (
        <Card key={Jobdata.jdUid} {...Jobdata} />  
      ))}
    </div>
  );
};

export default JobListing;
