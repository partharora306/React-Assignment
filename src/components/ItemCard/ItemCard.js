import React from "react";
import './itemcard.css';

const ItemCard = (props) => {

    return (
        <div className={"card"}>
            <span className="first-row">
                <p className="item-name">{props.itemName}</p>
                <p className="hiphen"> - </p>
                <p className="price">{props.itemPrice} &#8377;</p>
                <span className={"tag "+((props.itemAvailable)?"tag-instock":"tag-outstock")}>{(props.itemAvailable)? "In-Stock":"Out-of-Stock"} </span>
            </span>
            <span className="second-row">
                <p className="vendor"> {props.itemVendor}</p>
                <p className="vertical-split">|</p>
                <p className="category">{props.itemCategory} </p>
            </span>
        </div>
    );
}

export default ItemCard;