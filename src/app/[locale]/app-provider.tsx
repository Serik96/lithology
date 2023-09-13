import React, { PropsWithChildren } from 'react';
import Header from '@/components/header';

type TProps = PropsWithChildren;

const AppProvider = ({ children }: TProps) => {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};

export default AppProvider;
