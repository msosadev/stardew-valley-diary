import { useState } from 'react';
import bundles from '../bundles.json';
import ItemCheckbox from './ItemCheckbox';
import BundleSlot from './BundleSlot';

function Bundle(props) {
    const bundle = bundles[props.bundleKey];
    let outputItems;
    if (props.selectedFilter === "") {
        outputItems = bundle.items;
    } else {
        const filteredItems = bundle.items.filter(item => item.seasons.includes(props.selectedFilter));
        outputItems = filteredItems;
    }
    const [itemsUsed, setItemsUsed] = useState([]);

    if (outputItems.length > 0 || props.selectedFilter === "") {
        return (
            <div className="bundle">
                <h3>{props.bundleKey}</h3>
                <p>Left: {bundle.needed - itemsUsed.length}</p>
                <div className='bundle-content'>
                    <div className='slots-wrapper'>
                        {itemsUsed.map((itemIndex) => {
                            return <BundleSlot key={`item-slot-${outputItems[itemIndex]}`} item={outputItems[itemIndex]} />
                        })}
                        {Array.from({ length: bundle.needed - itemsUsed.length }).map((_, index) => {
                            return <BundleSlot key={`empty-slot-${index}-${bundle.id}`} id={`empty-slot-${index}-${bundle.id}`} />
                        })}
                    </div>
                    <div className="item-container">
                        {outputItems
                            .map((item, index) => {
                                return (
                                    <ItemCheckbox key={item.id} itemIndex={index} id={`checkbox-${item.id}`} item={item} itemsUsed={itemsUsed} setItemsUsed={setItemsUsed} />
                                )
                            })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Bundle