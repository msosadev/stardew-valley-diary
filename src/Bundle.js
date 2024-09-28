import { useState } from 'react';
import bundles from './bundles.json';
import ItemCheckbox from './ItemCheckbox';
import ItemImg from './ItemImg';

function Bundle(props) {
    const bundle = bundles[props.bundleKey];
    const filteredItems = bundle.items.filter(item => item.seasons.includes(props.selectedFilter));
    const [itemsUsed, setItemsUsed] = useState([]);

    if (filteredItems.length > 0) {
        return (
            <div className="bundle">
                <h3>{props.bundleKey} - needed: {bundle.needed - itemsUsed.length}</h3>
                {itemsUsed.map(index=> <ItemImg item={filteredItems[index]} />)}
                <div className="item-container">
                    {filteredItems
                        .map((item, index) => {
                            return (
                                <>
                                    <ItemCheckbox key={index} itemIndex={index} id={`item-${props.bundleIndex}-${index}`} item={item} itemsUsed={itemsUsed} setItemsUsed={setItemsUsed} />
                                </>
                            )
                        })}
                </div>
            </div>
        )
    }
}

export default Bundle