import React, { useState } from 'react';

export default function Formula() {
  const formulaStates = {
    DISPLAY: 'DISPLAY',
    EDIT: 'EDIT',
  };

  const [currentFormulaState, setCurrentFormulaState] = useState(formulaStates.DISPLAY);

  function handleEdit() {
    setCurrentFormulaState(formulaStates.EDIT);
  }

  function handleSave() {

  }
  function handleCancel() {

  }
  function handleDelete() {

  }

  return (
    <>
      <input type="text" />
      {currentFormulaState === formulaStates.EDIT
        ? (
          <>
            <button type="button" onClick={handleSave}>Save</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
            <button type="button" onClick={handleDelete}>Delete</button>
          </>
        )
        : <button type="button" onClick={handleEdit}>Edit</button>}
    </>
  );
}
