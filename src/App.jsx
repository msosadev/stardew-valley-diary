import { useEffect, useState } from 'react';
import './App.css';
import bundles from './bundles.json'
import filterValues from './filterValues.json'
import FilterRadio from './components/FilterRadio';
import Bundle from './components/Bundle';

function App() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const localStorageItemsKey = "stardewLoggerSaveState";
  const startupGlobalItems = JSON.parse(localStorage.getItem(localStorageItemsKey)) || {};
  const [selectedGlobalItems, setSelectedGlobalItems] = useState(startupGlobalItems);

  useEffect(()=> {
    localStorage.setItem(localStorageItemsKey, JSON.stringify(selectedGlobalItems));
  },[selectedGlobalItems])

  return (
    <div className="App">
      <h1>Stardew Valley Item Logger</h1>
      <div className="filters-wrapper">
        {filterValues.map((filter) => {
          return <FilterRadio key={`filter-${filter.id}`} selectedFilter={selectedFilter} filter={filter} setSelectedFilter={setSelectedFilter} />
        })}
      </div>
      <h2>{selectedFilter === "" ? "All Seasons" : selectedFilter}</h2>
      <div className="bundles-wrapper">
        {Object.keys(bundles).map((bundleKey, bundleIndex) => {
          return (
            <Bundle startupGlobalItems={startupGlobalItems} key={bundles[bundleKey].id} bundleIndex={bundleIndex} bundleKey={bundleKey} selectedFilter={selectedFilter} setSelectedGlobalItems={setSelectedGlobalItems} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
