import ItemCard from "../ItemCard/ItemCard";
import './home.css';

import data from '../../data';
import { useState } from "react";

import {getCategoryList, getVendorList} from '../utils';
import lodash from 'lodash';
import Cart from "../Cart/Cart";

const Home = () => {

    const [card, setCard] = useState([]);
    const [filtered_data, setData] = useState(data);
    const [vendor_list] = useState(getVendorList(filtered_data));
    const [category_list] = useState(getCategoryList(filtered_data));

    const addProduct = (product) => {
        const newCard = [...card, product];
        setCard(newCard);
      };

    const clear_filter = () => {
        setData(data);
    }

    const filter_category = (e)=>{
        setData(
            lodash.filter(data, {category: e.target.value})
        );
    }

    const filter_vendor = (e)=>{
        setData(
            lodash.filter(data, {vendor: e.target.value})
        );
    }

    const filter_availibility = (e)=>{
        setData(
            lodash.filter(data, {available: Number(e.target.value)})
        );
    }

    return (
        <>
        <div className="main center">
            <div className="filter-div">
                <div className="filter-row">                  

                    <span>
                        <p>Clear Filter</p>
                        <button onClick={clear_filter}>Clear Filter</button>
                    </span>

                    <span >
                        <p>Availibility</p>
                        <select value="" onChange={filter_availibility}>
                            <option></option>
                            <option key="1" value={1}>In Stock</option>
                            <option key="0" value={0}>Out of Stock</option>
                        </select>
                    </span>

                </div>
                <div className="filter-row">
                    <span >
                        <p>Category</p>
                        <select value="" onChange={filter_category}>
                        <option></option>
                            {
                                category_list.map(category=>(
                                    <option key={category} value={category}>{category}</option>
                                ))
                            }
                        </select>
                    </span>

                    <span >
                        <p>Vendor</p>
                        <select value="" onChange={filter_vendor}>
                        <option></option>
                            {
                                vendor_list.map(vendor=>(
                                    <option key={vendor} value={vendor}>{vendor}</option>
                                ))
                            }
                        </select>
                    </span>
                </div>
                

            </div>
            </div>
            <div>
            <div className="items-div">
                {
                    filtered_data.map(item => (
                        <ItemCard
                            product={item}
                            image={item?.image}
                            itemName={item?.name}
                            key={item?.id}
                            itemPrice={item?.price}
                            itemAvailable={item?.available}
                            itemVendor={item?.vendor}
                            itemCategory={item?.category} 
                            addProduct={addProduct}/>
                    ))
                }
            </div>
            <div>
            <Cart card={card}></Cart>
            </div>
        </div>
        </>
    );
}

export default Home;
