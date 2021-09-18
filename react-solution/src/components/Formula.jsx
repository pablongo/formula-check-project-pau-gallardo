/* eslint-disable no-eval */
import React, { useState } from 'react';

export default function Formula() {
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
    const P = 1;
    console.log(P);
    try {
      eval(formulaToValidate);
      return '';
    } catch (error) {
      return '';
    }
  }

  function handleSave(formulaToSave) {
    handleValidation(formulaToSave);
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
