import {DataTypes,ActionTypes} from './Types.js'

const port=3030;
const port2=process.env.PORT || 3200;
const protocol="http";

const hostname="localhost";
export const RestUrls={
 
    [DataTypes.ORDERS]: `${protocol}://${hostname}:${port2}/api/orders`,
    [DataTypes.ORDERS_LIST]:`${protocol}://${hostname}:${port2}/api/orderslist`,
    [DataTypes.PRODUCTS]:`${protocol}://${hostname}:${port}/products`,
    [DataTypes.CATEGORIES]:`${protocol}://${hostname}:${port}/categories`,
    [ActionTypes.CREATE_ACCOUNT]:`${protocol}://${hostname}:${port2}/api/register`,
    [ActionTypes.LOGIN]:`${protocol}://${hostname}:${port2}/api/login`
}

// export const restUrls={}

// restUrls[DataTypes.PRODUCTS]=`${protocol}://${host}:${port}/api/products`;
// restUrls[DataTypes.CATAGORIES]=`${protocol}://${host}:${port}/api/catagories`;

