import React from 'react';
import './Cart.css';

const Card = (props) => {
    const card = props.card;

    let total = 0;
    for (let i = 0; i < card.length; i++) {
        const product = card[i];
        total = total + Number(product.price);
    }

    let shipping = 0;
    if (total > 10) {
        shipping = 0;
    }
    else if (total > 5) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    const tax = (0 / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    return (
        <div className="summary-box shadow-sm">
            <p className="summary-title">Order Summary</p> <hr />
            <p className='item-details'> Total Items Ordered: {card.length}</p>
            <p className='item-details'>{props.name}</p>

            <p className='item-details'> Total Product Price: ${total}</p>
            <p className='shipping-details'>Shipping Cost: ${shipping}</p>
            <p className='item-details'>Total Price: ${grandTotal}</p>
            <button className='button'>Product to checkout</button>
        </div>
    );
};

export default Card;