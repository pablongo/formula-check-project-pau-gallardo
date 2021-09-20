function handleEdit(index) {
  productsPage.state = 'EDIT';
  productsPage.renderFormula(index);
}

function handleCancel(index) {
  document.getElementById(`formula-input-${index}`).value = '';
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
  const input = document.getElementById(`formula-input-${index}`);
  const formula = input.value;
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
  input.placeholder = formula;
  productsPage.state = 'DISPLAY';
  productsPage.renderFormula(index);
}

function handleDelete(index) {
  const product = productList[index];
  const modifiedProduct = {
    ...product,
    formula: '',
    formulaPrice: product.price,
    index
  };
  productList[index] = modifiedProduct;
  productsPage.renderNewPrice(index, product.price);
  document.getElementById(`formula-input-${index}`).placeholder = '';
  productsPage.state = 'DISPLAY';
  productsPage.renderFormula(index);
}
