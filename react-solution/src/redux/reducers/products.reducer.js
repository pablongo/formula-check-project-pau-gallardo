import actionTypes from '../actions/actionTypes';

export default function productReducer(products = [], action) {
  let newProductList = products;
  switch (action.type) {
    case actionTypes.SAVE_FORMULA_PRICE:
      newProductList[action.index] = action.product;
      newProductList = [...newProductList];
      break;

    case actionTypes.DELETE_FORMULA:
      newProductList[action.index] = action.product;
      newProductList = [...newProductList];
      break;

    default:
      break;
  }
  return newProductList;
}
