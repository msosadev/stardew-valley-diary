function ItemImg(props) {
    return(
        <img src={props.item.img} alt={`${props.item.label}`}></img>
    )
}

export default ItemImg;