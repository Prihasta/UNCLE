import React, { ReactNode } from 'react';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-stone-950 text-gray-200">
      <div className="w-full max-w-3xl mx-auto px-4 py-10 md:py-16">
        <div className="bg-stone-950 bg-opacity-90 border border-gray-800 p-8 md:p-10 rounded-xl shadow-2xl text-lg leading-relaxed">
          {children}
        </div>
      </div>
      <div className="absolute bottom-4 left-4 text-sm text-gray-400">
        Source: https://www.imdb.com/title/tt1638355/plotsummary/
      </div>
    </div>
  );
};

export default Layout;
