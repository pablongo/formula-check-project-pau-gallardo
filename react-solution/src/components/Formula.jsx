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

  return (
    <>
      <input type="text" />
      {currentFormulaState === formulaStates.EDIT
        ? (
          <>
            <button type="button">Save</button>
            <button type="button">Cancel</button>
            <button type="button">Delete</button>
          </>
        )
        : <button type="button" onClick={handleEdit}>Edit</button>}
    </>
  );
}
