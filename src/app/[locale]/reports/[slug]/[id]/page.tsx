'use client';

import { useParams } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui';
import { useMountEffect } from '@/hooks';
import { reportBreadcrumbs } from './const';

const Report = () => {
  const { id } = useParams();

  useMountEffect(() => {
    console.log('Report>', id);
    /* @todo get speciment by id */
    // getSpecimen()
  });

  return (
    <>
      <Breadcrumbs navLinks={reportBreadcrumbs} />
    </>
  );
};

export default Report;
