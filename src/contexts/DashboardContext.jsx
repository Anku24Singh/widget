// // src/contexts/DashboardContext.jsx

// import React, { createContext, useState, useContext } from 'react';

// // Create the context
// const DashboardContext = createContext();

// // Create a custom hook to use the DashboardContext
// export const useDashboard = () => useContext(DashboardContext);

// // Create a provider component
// export const DashboardProvider = ({ children }) => {
//   const [categories, setCategories] = useState({
//     'CSPM Executive Dashboard': [
//       { id: 1, name: 'Widget 1', text: 'This is widget 1' },
//       { id: 2, name: 'Widget 2', text: 'This is widget 2' },
//     ],
//     'CWPP Dashboard': [
//       { id: 3, name: 'Widget 3', text: 'This is widget 3' },
//       { id: 4, name: 'Widget 4', text: 'This is widget 4' },
//     ],
//     'Registry Scan': [
//       { id: 5, name: 'Widget 5', text: 'This is widget 5' },
//       { id: 6, name: 'Widget 6', text: 'This is widget 6' },
//     ],
//   });

//   // Function to add a widget to a category
//   const addWidget = (category, widget) => {
//     setCategories((prevCategories) => ({
//       ...prevCategories,
//       [category]: [...prevCategories[category], widget],
//     }));
//   };

//   // Function to remove a widget from a category
//   const removeWidget = (category, widgetId) => {
//     setCategories((prevCategories) => ({
//       ...prevCategories,
//       [category]: prevCategories[category].filter(widget => widget.id !== widgetId),
//     }));
//   };

//   return (
//     <DashboardContext.Provider value={{ categories, addWidget, removeWidget }}>
//       {children}
//     </DashboardContext.Provider>
//   );
// };


import React, { createContext, useState, useContext } from 'react';
import dashboardData from '../dashboardData.json'; // Import JSON data

const DashboardContext = createContext();

export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
  const [categories, setCategories] = useState(dashboardData); // Initialize state with JSON data

  const addWidget = (category, widget) => {
    setCategories((prevCategories) => ({
      ...prevCategories,
      [category]: [...prevCategories[category], widget],
    }));
  };

  const removeWidget = (category, widgetId) => {
    setCategories((prevCategories) => ({
      ...prevCategories,
      [category]: prevCategories[category].filter(widget => widget.id !== widgetId),
    }));
  };

  return (
    <DashboardContext.Provider value={{ categories, addWidget, removeWidget }}>
      {children}
    </DashboardContext.Provider>
  );
};
