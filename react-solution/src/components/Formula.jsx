import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';

import { saveFormulaAndPrice } from '../redux/actions/actionCreators';

import './Formula.css';

export default function Formula({ product, index }) {
  const dispatch = useDispatch();

  const formulaStates = {
    DISPLAY: 'DISPLAY',
    EDIT: 'EDIT',
  };

  const [currentFormulaState, setCurrentFormulaState] = useState(formulaStates.DISPLAY);
  const [inputFormula, setInputFormula] = useState();
  const [formulaPlaceholder, setFormulaPlaceholder] = useState(product.formula);
  const [validFormula, setvalidFormula] = useState(true);

  function handleEdit() {
    setCurrentFormulaState(formulaStates.EDIT);
  }

  function handleValidation(formulaToValidate, { price }) {
    // eslint-disable-next-line no-unused-vars
    const P = price;
    try {
      let result = eval(formulaToValidate);
      if (result === Infinity) {
        setvalidFormula(false);
        result = undefined;
      }
      setvalidFormula(true);
      return result;
    } catch (error) {
      setvalidFormula(false);
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
      setCurrentFormulaState(formulaStates.DISPLAY);
      setFormulaPlaceholder(modifiedProduct.formula);
    }
  }

  function handleCancel() {
    setCurrentFormulaState(formulaStates.DISPLAY);
  }

  function handleDelete(productData, storeArrayIndex) {
    const modifiedProduct = {
      ...productData,
      formula: '',
      formulaPrice: productData.price,
      index,
    };
    dispatch(saveFormulaAndPrice(modifiedProduct, storeArrayIndex));
    setCurrentFormulaState(formulaStates.DISPLAY);
    setInputFormula('');
    setFormulaPlaceholder('');
  }

  function handleFormula(event) {
    setInputFormula(event.target.value);
  }

  return (
    <form className="formula-container">
      <input
        type="text"
        className={validFormula ? 'formula-container__input' : 'formula-container__input--valid'}
        name="formula-input"
        placeholder={formulaPlaceholder}
        value={inputFormula}
        onChange={handleFormula}
        disabled={currentFormulaState === formulaStates.DISPLAY}
      />
      {currentFormulaState === formulaStates.EDIT
        ? (
          <div className="formula-container__edit-buttons">
            <button
              type="button"
              onClick={() => handleSave(inputFormula, product, index)}
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => handleDelete(product, index)}
            >
              Delete
            </button>
          </div>
        )
        : (
          <button
            type="button"
            onClick={handleEdit}
          >
            Edit
          </button>
        )}
    </form>
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
  index: PropTypes.number.isRequired,
};
