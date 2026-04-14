import { createContext, useContext, useState, useEffect } from "react";

const TimelineContext = createContext();

export function TimelineProvider({ children }) {
  const [entries, setEntries] = useState(() => {
    return JSON.parse(localStorage.getItem("timeline")) || [];
  });

  useEffect(() => {
    localStorage.setItem("timeline", JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry) => {
    setEntries([entry, ...entries]);
  };

  return (
    <TimelineContext.Provider value={{ entries, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}

export const useTimeline = () => useContext(TimelineContext);