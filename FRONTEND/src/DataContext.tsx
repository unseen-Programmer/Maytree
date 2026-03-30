import { createContext, useContext } from "react";
import { useDataService } from "./services/dataService";

const DataContext = createContext<any>(null);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const data = useDataService();
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used inside DataProvider");
  }
  return context;
}