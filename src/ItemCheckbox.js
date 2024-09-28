import "./ItemCheckbox.css"
import ItemImg from "./ItemImg";

function ItemCheckbox(props) {
    function changeHandler(evt) {
        if (evt.target.checked) {
            props.setItemsUsed((prev) => [...prev, props.itemIndex]);
        } else {
            props.setItemsUsed((prev) => prev.filter(item => item !== props.itemIndex));
        }
    }

    return (
        <label className="item-checkbox" htmlFor={props.id}><ItemImg item={props.item} /> <input onChange={changeHandler} type="checkbox" name={props.id} id={props.id}></input> {props.item.label}</label>
    )
}

export default ItemCheckbox;