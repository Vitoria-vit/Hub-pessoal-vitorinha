import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 md:p-8">
        {children}
      </main>
      <footer className="bg-gray-100 p-4 text-center text-sm text-gray-600 mt-auto">
        Feito com ♡ para seu florescimento.
      </footer>
    </div>
  );
};

export default Layout;

