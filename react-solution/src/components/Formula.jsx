import React, { useState } from 'react';

export default function Formula() {
  const formulaStates = {
    DISPLAY: 'DISPLAY',
    EDIT: 'EDIT',
  };

  const [currentFormulaState, setCurrentFormulaState] = useState(formulaStates.DISPLAY);

  return (
    <>
      <input type="text" />
      <button type="button">Edit</button>
      <button type="button">Save</button>
      <button type="button">Cancel</button>
      <button type="button">Delete</button>
    </>
  );
}
