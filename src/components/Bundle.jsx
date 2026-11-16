import { useEffect, useState } from 'react';
import bundles from '../bundles.json';
import ItemCheckbox from './ItemCheckbox';
import BundleSlot from './BundleSlot';

function Bundle(props) {
    const bundle = bundles[props.bundleKey];
    const filteredItems = bundle.items.filter(item => item.seasons.includes(props.selectedFilter));
    let outputItems = props.selectedFilter === "" ? bundle.items : filteredItems;
    const [itemsUsed, setItemsUsed] = useState(props.startupGlobalItems[bundle.id]);
    const itemsLeft = bundle.needed - itemsUsed.length;
    const itemIds = bundle.items.map(item => item.id);

    const setSelectedGlobalItems = props.setSelectedGlobalItems;
    useEffect(()=>{
        setSelectedGlobalItems((prev) => {
            const newState = { ...prev }
            if(!newState[bundle.id]) newState[bundle.id] = [];
            newState[bundle.id] = itemsUsed;
            return newState;
        });
    },[itemsUsed])

    if (outputItems.length > 0 || props.selectedFilter === "") {
        return (
            <div className="bundle">
                <h3>{props.bundleKey}</h3>
                <p>Left: {itemsLeft}</p>
                <div className='bundle-content'>
                    <div className='slots-wrapper'>
                        {itemsUsed.filter(itemId => itemIds.includes(itemId)).map((itemId) => {
                            const item = bundle.items.find(bundleItem => bundleItem.id === itemId);
                            return <BundleSlot key={`item-slot-${item.id}`} item={item} />
                        })}
                        {Array.from({ length: itemsLeft }).map((_, index) => {
                            return <BundleSlot key={`empty-slot-${index}-${bundle.id}`} id={`empty-slot-${index}-${bundle.id}`} />
                        })}
                    </div>
                    <div className="item-container">
                        {outputItems
                            .map((item, index) => {
                                return (
                                    <ItemCheckbox key={item.id} bundle={bundle} itemIndex={index} id={`checkbox-${item.id}`} item={item} itemsLeft={itemsLeft} itemsUsed={itemsUsed} setItemsUsed={setItemsUsed} />
                                )
                            })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Bundle