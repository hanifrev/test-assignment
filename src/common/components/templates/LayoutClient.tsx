import React, { ReactNode } from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

interface LayoutProps {
  children: ReactNode;
}

const LayoutClient: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full relative">
      <div className="w-full h-full bg-gradient-to-br from-[#26c2b9] to-[#288be6] absolute top-0 left-0 z-0"></div>
      <Header />
      <div className="flex-grow relative z-10">{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutClient;
