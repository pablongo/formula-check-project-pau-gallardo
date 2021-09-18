import actionTypes from './actionTypes';

export function saveFormula(product, index) {
  return ({
    type: actionTypes.SAVE_FORMULA,
    product,
    index,
  });
}

export function saveeFormula() {
  return ({

  });
}
