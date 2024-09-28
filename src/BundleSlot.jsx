import ItemImg from "./ItemImg";

function BundleSlot(props) {
    return (
        <div className='bundle-slot'>{props.item !== undefined ?<ItemImg item={props.item} /> : ""}</div>
    );
}

export default BundleSlot;