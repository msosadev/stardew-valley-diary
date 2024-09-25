import "./ItemCheckbox.css"

function ItemCheckbox(props) {
    return(
        <label className="item-checkbox" for={props.key}><img src={props.src} alt={`${props.label}`}></img> <input type="checkbox" name={props.key} id={props.key}></input> {props.label}</label>
    )
}

export default ItemCheckbox;