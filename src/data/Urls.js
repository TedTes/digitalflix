import {DataTypes} from './Types.js'

const port=3030;
const protocol="http";
const hostname="localhost";
export const RestUrls={
    // [DataTypes.PRODUCTS]:`${protocol}://${hostname}:${port}/api/products`,
    // [DataTypes.CATEGORIES]:`${protocol}://${hostname}:${port}/api/categories`,
    // [DataTypes.ORDERS]: `${protocol}://${hostname}:${port}/api/orders`
    [DataTypes.PRODUCTS]:`${protocol}://${hostname}:${port}/products`,
    [DataTypes.CATEGORIES]:`${protocol}://${hostname}:${port}/categories`
}

// export const restUrls={}

// restUrls[DataTypes.PRODUCTS]=`${protocol}://${host}:${port}/api/products`;
// restUrls[DataTypes.CATAGORIES]=`${protocol}://${host}:${port}/api/catagories`;

