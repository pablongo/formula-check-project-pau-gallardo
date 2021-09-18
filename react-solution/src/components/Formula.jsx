import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';

import { saveFormulaAndPrice } from '../redux/actions/actionCreators';

export default function Formula({ product, index }) {
  const dispatch = useDispatch();

  const formulaStates = {
    DISPLAY: 'DISPLAY',
    EDIT: 'EDIT',
  };

  const [currentFormulaState, setCurrentFormulaState] = useState(formulaStates.DISPLAY);
  const [inputFormula, setInputFormula] = useState();

  function handleEdit() {
    setCurrentFormulaState(formulaStates.EDIT);
  }

  function handleValidation(formulaToValidate, { price }) {
    // eslint-disable-next-line no-unused-vars
    const P = price;
    try {
      const result = eval(formulaToValidate);
      return result;
    } catch (error) {
      return undefined;
    }
  }

  function handleSave(formulaToSave, productData, storeArrayIndex) {
    const newPrice = handleValidation(formulaToSave, productData);
    if (newPrice) {
      const modifiedProduct = {
        ...productData,
        formula: formulaToSave,
        formulaPrice: newPrice,
        index,
      };
      dispatch(saveFormulaAndPrice(modifiedProduct, storeArrayIndex));
    }
  }

  function handleCancel() {
    setCurrentFormulaState(formulaStates.DISPLAY);
  }

  function handleDelete() {
  }

  function handleFormula(event) {
    setInputFormula(event.target.value);
  }

  return (
    <>
      <input
        type="text"
        name="formula-input"
        onChange={handleFormula}
      />
      {currentFormulaState === formulaStates.EDIT
        ? (
          <>
            <button type="button" onClick={() => handleSave(inputFormula, product, index)}>Save</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
            <button type="button" onClick={handleDelete}>Delete</button>
          </>
        )
        : <button type="button" onClick={handleEdit}>Edit</button>}
    </>
  );
}

Formula.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    formulaPrice: PropTypes.number,
    formula: PropTypes.string,
    index: PropTypes.number,
  }),
  index: PropTypes.string.isRequired,
};
