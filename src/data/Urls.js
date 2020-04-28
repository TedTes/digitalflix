import {DataTypes,ActionTypes} from './Types.js'

const port=3030;
const protocol="http";
const sslProtocol="http";
const hostname="localhost";
export const RestUrls={
 
    [DataTypes.ORDERS]: `${sslProtocol}://${hostname}:3500/api/orders`,
    [DataTypes.PRODUCTS]:`${protocol}://${hostname}:${port}/products`,
    [DataTypes.CATEGORIES]:`${protocol}://${hostname}:${port}/categories`,
    [ActionTypes.CREATE_ACCOUNT]:`${sslProtocol}://${hostname}:3500/api/register`,
    [ActionTypes.LOGIN]:`${sslProtocol}://${hostname}:3500/api/login`
}

// export const restUrls={}

// restUrls[DataTypes.PRODUCTS]=`${protocol}://${host}:${port}/api/products`;
// restUrls[DataTypes.CATAGORIES]=`${protocol}://${host}:${port}/api/catagories`;

