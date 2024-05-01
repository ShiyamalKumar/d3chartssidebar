import React from 'react';
import Sidebar from './Sidebar'; // Adjust the path as necessary
import BarChart from './BarChart';
import PieChart from './PieChart';
import ScatterPlot from './ScatterPlot';

const data = [
    { product: "Apples", sales: 120 },
    { product: "Oranges", sales: 200 },
    { product: "Bananas", sales: 90 },
    { product: "Berries", sales: 160 },
    { product: "Peaches", sales: 130 }
];

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div style={{ marginLeft: '250px', padding: '20px' }}>
        <p>Welcome to my application!</p>
        <h1>Product Sales Bar Chart</h1>
            <BarChart data={data} />
            <ScatterPlot data={data} />
            <PieChart data={data} />
      </div>
    </div>
  );
}

export default App;
