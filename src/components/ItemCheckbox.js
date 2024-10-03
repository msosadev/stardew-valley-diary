import ItemImg from "./ItemImg";

function ItemCheckbox(props) {
    let checked = props.itemsUsed.includes(props.item.id);

    function changeHandler(evt) {
        if (evt.target.checked) {
            props.setItemsUsed((prev) => [...prev, props.item.id]);
        } else {
            props.setItemsUsed((prev) => prev.filter(itemId => itemId !== props.item.id));
        }
    }

    return (
        <label className="item-checkbox" htmlFor={props.id}><ItemImg item={props.item} /> <input checked={checked} disabled={props.itemsLeft === 0 && !checked ? true : false} onChange={changeHandler} type="checkbox" name={props.id} id={props.id}></input> {props.item.label}</label>
    )
}

export default ItemCheckbox;