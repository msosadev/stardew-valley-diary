import { useState } from "react";
import ItemImg from "./ItemImg";

function ItemCheckbox(props) {
    const [isChecked, setIsChecked] = useState(false);
    
    function changeHandler(evt) {
        setIsChecked(evt.target.checked);
        if (evt.target.checked) {
            props.setItemsUsed((prev) => [...prev, props.itemIndex]);
        } else {
            props.setItemsUsed((prev) => prev.filter(item => item !== props.itemIndex));
        }
    }

    return (
        <label className="item-checkbox" htmlFor={props.id}><ItemImg item={props.item} /> <input disabled={props.itemsLeft === 0 && !isChecked ? true : false} onChange={changeHandler} type="checkbox" name={props.id} id={props.id}></input> {props.item.label}</label>
    )
}

export default ItemCheckbox;