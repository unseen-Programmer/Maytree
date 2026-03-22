import React, { createContext, useContext } from 'react';
import { useDataService } from './services/dataService';

const DataContext = createContext<ReturnType<typeof useDataService> | null>(null);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const data = useDataService();
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within a DataProvider');
  return context;
};
