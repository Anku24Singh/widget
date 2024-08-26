// import React from 'react';
// import Dashboard from './components/Dashboard';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Dashboard />
//     </div>
//   );
// }

// export default App;

// src/App.jsx

import React from 'react';
import Dashboard from './components/Dashboard';
import { DashboardProvider } from './contexts/DashboardContext';
import './styles.css';

const App = () => {
  return (
    <DashboardProvider>
      <div className="App">
        <h1>CNAPP Dashboard</h1>
        <Dashboard />
      </div>
    </DashboardProvider>
  );
};

export default App;
