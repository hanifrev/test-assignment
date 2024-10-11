import React, { ReactNode } from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

interface LayoutProps {
  children: ReactNode;
}

const LayoutClient: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutClient;
