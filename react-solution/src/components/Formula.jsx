/* eslint-disable react/prop-types */
/* eslint-disable no-eval */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveFormula } from '../redux/actions/actionCreators';

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
    if (handleValidation(formulaToSave, productData)) {
      const modifiedProduct = {
        ...productData,
        formula: formulaToSave,
        index,
      };
      dispatch(saveFormula(modifiedProduct, storeArrayIndex));
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
