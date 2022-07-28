import lodash from 'lodash';

const getVendorList = (data) =>{
    return lodash.union(lodash.map(data, 'vendor'));
}

const getCategoryList = (data) =>{
    return lodash.union(lodash.map(data, 'category'));
}

export {
    getVendorList,
    getCategoryList
}