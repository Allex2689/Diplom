import React, { useEffect } from 'react';
import { DocumentCard } from './DocumentCard';
import { Document } from './types';
import { useDocumentsData } from '../../hooks/useDocumentsData';

function Documents() {
  const { data, isLoading, fetchData } = useDocumentsData();

  console.log(data)

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Загрузка...</div>
  }

  if (!data?.length) {
    return <div>Документов нет</div>
  }

  return (
    <>
      {data.map((document: Document) => (
        <DocumentCard key={document.id} document={document} />
      ))}
    </>
  );
}

export default Documents;
