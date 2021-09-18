import actionTypes from './actionTypes';

export function saveFormula(formulaToSave, product, index) {
  const data = {
    ...product,
    formula: formulaToSave,
    index,
  };

  return ({
    type: actionTypes.SAVE_FORMULA,
    data,
  });
}
export function saveeFormula(formulaToSave, product, index) {
  const data = {
    ...product,
    formula: formulaToSave,
    index,
  };

  return ({
    type: actionTypes.SAVE_FORMULA,
    data,
  });
}
