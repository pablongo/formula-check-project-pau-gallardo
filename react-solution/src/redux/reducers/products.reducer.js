import actionTypes from '../actions/actionTypes';

export default function productReducer(products = [], action) {
  const newProductList = products;
  switch (action.type) {
    case actionTypes.SAVE_FORMULA_PRICE:
      newProductList[action.index] = action.product;
      break;

    default:
      break;
  }
  return newProductList;
}
