// CalorieContext.js
import React, { createContext, useState } from 'react';

export const CalorieContext = createContext();

export const CalorieProvider = ({ children }) => {
  const [dailyCalorieTarget, setDailyCalorieTarget] = useState(0);
  const [todayConsumedCalories, setTodayConsumedCalories] = useState(0);

  return (
    <CalorieContext.Provider
      value={{
        dailyCalorieTarget,
        setDailyCalorieTarget,
        todayConsumedCalories,
        setTodayConsumedCalories,
      }}
    >
      {children}
    </CalorieContext.Provider>
  );
};
