import { useState } from 'react';
import bundles from '../bundles.json';
import ItemCheckbox from './ItemCheckbox';
import BundleSlot from './BundleSlot';

function Bundle(props) {
    const bundle = bundles[props.bundleKey];
    const filteredItems = bundle.items.filter(item => item.seasons.includes(props.selectedFilter));
    const [itemsUsed, setItemsUsed] = useState([]);

    if (filteredItems.length > 0) {
        return (
            <div className="bundle">
                <h3>{props.bundleKey}</h3>
                <p>Left: {bundle.needed - itemsUsed.length}</p>
                <div className='bundle-content'>
                    <div className='slots-wrapper'>
                        {itemsUsed.map((itemIndex, index) => {
                            return <BundleSlot key={index} item={filteredItems[itemIndex]} />
                        })}
                        {Array.from({ length: bundle.needed - itemsUsed.length }).map((_, index) => {
                            return <BundleSlot key={index} />
                        })}
                    </div>
                    <div className="item-container">
                        {filteredItems
                            .map((item, index) => {
                                return (
                                    <ItemCheckbox key={index} itemIndex={index} id={`item-${props.bundleIndex}-${index}`} item={item} itemsUsed={itemsUsed} setItemsUsed={setItemsUsed} />
                                )
                            })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Bundle