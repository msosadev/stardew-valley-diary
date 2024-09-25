import './App.css';
import bundles from './bundles.json'
import ItemCheckbox from './ItemCheckbox';

console.log(bundles);

function App() {
  return (
    <div className="App">
      <h1>Stardew valley item logger</h1>
      <div class="items">
        {Object.keys(bundles).map((key) => {
          return (
            <div class="bundle">
              <h2>{key}</h2>
              <div class="item-container">
                {bundles[key].items.map((item, index) => {
                  return <ItemCheckbox key={`item-${index}`} label={item.label} src={item.img} />
                })}
              </div>
            </div>
          )
        })}

      </div>
    </div>
  );
}

export default App;
