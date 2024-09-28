import { useState } from 'react';
import bundles from './bundles.json';
import ItemCheckbox from './ItemCheckbox';

function Bundle(props) {
    const bundle = bundles[props.bundleKey];
    const filteredItems = bundle.items.filter(item => item.seasons.includes(props.selectedFilter));
    const [neededLeft, setNeededLeft] = useState(bundle.needed);

    if (filteredItems.length > 0) {
        return (
            <div className="bundle">
                <h3>{props.bundleKey} - needed: {neededLeft}</h3>
                <div className="item-container">
                    {filteredItems
                        .map((item, index) => {
                            return (
                                <>
                                    <ItemCheckbox key={index} id={`item-${props.bundleIndex}-${index}`} label={item.label} src={item.img} season={item.season} />
                                </>
                            )
                        })}
                </div>
            </div>
        )
    }
}

export default Bundle