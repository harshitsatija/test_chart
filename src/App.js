import './App.css';
import React from 'react';
import MyResponsiveSunburst from './MyResponsiveSunburst';
import myData from './myData'; // This should be the data you want to visualize with the Sunburst chart

function App() {
  return (
    <div className="App2" style={{
      height: '100vh', 
      width: '100vw', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      <div className="App" style={{
        height: '500px', 
        width: '100%', 
        paddingTop: '20px', // Add top padding
        paddingBottom: '20px' // Add bottom padding
      }}>
        <MyResponsiveSunburst data={myData} />
      </div>
    </div>
  );
}

export default App;
