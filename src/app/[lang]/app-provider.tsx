import React from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { RootLayoutProps } from '@/interfaces';

const AppProvider = ({ children }: RootLayoutProps) => {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppProvider;
