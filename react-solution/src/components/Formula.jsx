/* eslint-disable react/prop-types */
/* eslint-disable no-eval */
import React, { useState } from 'react';
import { saveFormula } from '../redux/actions/actionCreators';

export default function Formula({ product, index }) {
  const formulaStates = {
    DISPLAY: 'DISPLAY',
    EDIT: 'EDIT',
  };

  const [currentFormulaState, setCurrentFormulaState] = useState(formulaStates.DISPLAY);
  const [inputFormula, setInputFormula] = useState();

  function handleEdit() {
    setCurrentFormulaState(formulaStates.EDIT);
  }

  function handleValidation(formulaToValidate) {
    try {
      eval(formulaToValidate);
      return true;
    } catch (error) {
      return false;
    }
  }

  function handleSave(formulaToSave, product, index) {
    if (handleValidation(formulaToSave)) {
      saveFormula(formulaToSave, product, index);
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
            <button type="button" onClick={() => handleSave(inputFormula)}>Save</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
            <button type="button" onClick={handleDelete}>Delete</button>
          </>
        )
        : <button type="button" onClick={handleEdit}>Edit</button>}
    </>
  );
}
