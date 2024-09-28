import "./ItemCheckbox.css"

function ItemCheckbox(props) {
    return(
        <label className="item-checkbox" htmlFor={props.id}><img src={props.src} alt={`${props.label}`}></img> <input type="checkbox" name={props.id} id={props.id}></input> {props.label}</label>
    )
}

export default ItemCheckbox;