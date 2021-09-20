function handleEdit(index) {
  productsPage.state = 'EDIT';
  productsPage.renderFormula(index);
}

function handleCancel(index) {
  productsPage.state = 'DISPLAY';
  productsPage.renderFormula(index);
}

function handleValidation({ price }, formula) {
  const P = price;
  try {
    let result = eval(formula);
    if (result === Infinity) {
      result = undefined;
    }
    return result;
  } catch (error) {
    return undefined;
  }
}

function handleSave(index) {
  const product = productList[index];
  const formula = document.getElementById(`formula-input-${index}`).value;
  const newPrice = handleValidation(product, formula);
  if (newPrice) {
    const modifiedProduct = {
      ...product,
      formula,
      formulaPrice: newPrice,
      index
    };
    productList[index] = modifiedProduct;
    productsPage.renderNewPrice(index, newPrice);
  }
  productsPage.state = 'DISPLAY';
  productsPage.renderFormula(index);
}
