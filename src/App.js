import { useState } from 'react';
import './App.css';
import bundles from './bundles.json'
import FilterRadio from './components/FilterRadio';
import Bundle from './components/Bundle';

function App() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const filterValues = [
    {"label": "Spring", "img": "https://stardewvalleywiki.com/mediawiki/images/thumb/9/9c/Spring.png/24px-Spring.png", "id": "spring"},
    {"label": "Summer", "img": "https://stardewvalleywiki.com/mediawiki/images/thumb/8/85/Summer.png/24px-Summer.png", "id": "summer"},
    {"label": "Fall", "img": "https://stardewvalleywiki.com/mediawiki/images/thumb/5/5d/Fall.png/24px-Fall.png", "id": "fall"},
    {"label": "Winter", "img": "https://stardewvalleywiki.com/mediawiki/images/thumb/a/a7/Winter.png/24px-Winter.png", "id": "winter"}
  ];

  return (
    <div className="App">
      <h1>Stardew Valley Item Logger</h1>
      <div class="filters-wrapper">
        {filterValues.map((filter) => {
          return <FilterRadio key={`filter-${filter.id}`} selectedFilter={selectedFilter} filter={filter} setSelectedFilter={setSelectedFilter} />
        })}
      </div>
      <h2>{selectedFilter === "" ? "All Seasons" : selectedFilter}</h2>
      <div className="bundles-wrapper">
        {Object.keys(bundles).map((bundleKey, bundleIndex) => {
          return (
            <Bundle key={bundles[bundleKey].id} bundleIndex={bundleIndex} bundleKey={bundleKey} selectedFilter={selectedFilter} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
