import actionTypes from './actionTypes';

export function saveFormulaAndPrice(product, index) {
  return ({
    type: actionTypes.SAVE_FORMULA_PRICE,
    product,
    index,
  });
}

export function deleteFormula(product, index) {
  return ({
    type: actionTypes.DELETE_FORMULA,
    product,
    index,
  });
}
