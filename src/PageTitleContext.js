import React, { createContext, useState, useContext } from 'react';

const PageTitleContext = createContext({
  title: 'Coach Finder',
  setTitle: () => {}
});

export const usePageTitle = () => useContext(PageTitleContext);

export const PageTitleProvider = ({ children }) => {
  const [title, setTitle] = useState('Coach Finder');

  return (
    <PageTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
};
