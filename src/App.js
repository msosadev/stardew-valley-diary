import { useState } from 'react';
import './App.css';
import bundles from './bundles.json'
import FilterRadio from './Filter';
import Bundle from './Bundle';

function App() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const filterValues = ["All Seasons","Spring", "Summer", "Fall", "Winter"];
  
  return (
    <div className="App">
      <h1>Stardew Valley Item Logger</h1>
      {filterValues.map((filter,index)=> {
        return <FilterRadio key={`filter-${index}`} selectedFilter={selectedFilter} filter={filter} setSelectedFilter={setSelectedFilter} />
      })}
      <h2>{selectedFilter}</h2>
      <div className="items">
        {Object.keys(bundles).map((bundleKey, bundleIndex) => {
          return (
            <Bundle key={`bundle-${bundleIndex}`} bundleIndex={bundleIndex} bundleKey={bundleKey} selectedFilter={selectedFilter} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
