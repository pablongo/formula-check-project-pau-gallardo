import actionTypes from './actionTypes';

export function saveFormulaAndPrice(product, index) {
  return ({
    type: actionTypes.SAVE_FORMULA_PRICE,
    product,
    index,
  });
}

export function saveeFormula() {
  return ({

  });
}
