import ItemCard from "../ItemCard/ItemCard";
import './home.css';

import data from '../../data';
import { useState } from "react";

import {getCategoryList, getVendorList} from '../utils';
import lodash from 'lodash';

const Home = () => {

    const [filtered_data, setData] = useState(data);
    const [vendor_list] = useState(getVendorList(filtered_data));
    const [category_list] = useState(getCategoryList(filtered_data));

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
        <div className="main">
            <div className="filter-div">
                <div className="filter-row">                  

                    <span>
                        <p>Clear Filter</p>
                        <button onClick={clear_filter}>Clear Filter</button>
                    </span>

                    <span >
                        <p>Availibility</p>
                        <select onChange={filter_availibility}>
                            <option key="1" value={1}>In Stock</option>
                            <option key="0" value={0}>Out of Stock</option>
                        </select>
                    </span>

                </div>
                <div className="filter-row">
                    <span >
                        <p>Category</p>
                        <select onChange={filter_category}>
                            {
                                category_list.map(category=>(
                                    <option key={category} value={category}>{category}</option>
                                ))
                            }
                        </select>
                    </span>

                    <span >
                        <p>Vendor</p>
                        <select onChange={filter_vendor}>
                            {
                                vendor_list.map(vendor=>(
                                    <option key={vendor} value={vendor}>{vendor}</option>
                                ))
                            }
                        </select>
                    </span>
                </div>
                

            </div>
            <div className="items-div">
                {
                    filtered_data.map(item => (
                        <ItemCard
                            itemName={item?.name}
                            key={item?.id}
                            itemPrice={item?.price}
                            itemAvailable={item?.available}
                            itemVendor={item?.vendor}
                            itemCategory={item?.category} />
                    ))
                }
            </div>
        </div>
    );
}

export default Home;
