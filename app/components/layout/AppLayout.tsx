import React, { ReactNode } from 'react';
import Header from './Header';

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <main className="py-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;