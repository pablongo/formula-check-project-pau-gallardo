class FormulaPage {
  constructor(products) {
    this.productList = products;
  }

  setView() {
    this.productList.forEach((product) => {
      const element = `
      <h1>${product.name}</h1>
      <input
      type="text"
      className={validFormula ? 'formula-container__input' : 'formula-container__input--valid'}
      name="formula-input"
      placeholder={formulaPlaceholder}
      value={inputFormula}
      onChange={handleFormula}
      disabled={currentFormulaState === formulaStates.DISPLAY}
    />
    `;

      document.getElementById('product-list').innerHTML += element;
    });
  }
}

module.exports = FormulaPage;
