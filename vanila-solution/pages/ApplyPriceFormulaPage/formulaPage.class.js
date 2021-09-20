class FormulaPage {
  constructor(products) {
    this.productList = products;
    this.state = 'DISPLAY';
  }

  setView() {
    this.productList.forEach((product, index) => {
      const productNotModified = `
      <div class="product-container">
      <h2 class="product-container__title">${product?.name}</h2>
      <img
        class="product-container__image"
        src="https://via.placeholder.com/150"
        alt="product"
      />
      <h3 class="product-container__title">Original price</h3>
      <span class="product-container__title">${product?.price}€</span>
      </div>
      `;

      const productModified = `
      <div class="product-modified-container">
      <h2 class="product-container__title">${product?.name}</h2>
      <img
        className="product-container__image"
        src="https://via.placeholder.com/150"
        alt="product"
      />
      <h3 class="product-container__title">Modified price</h3>
      <span class="product-container__title" id="product-formulaPrice-${index}">${product?.formulaPrice}€</span>
      </div>
      `;

      const formula = `
      <form class="formula-${index}">
        <input
        id="formula-input-${index}"
        type="text"
        name="formula-input"
        placeholder=${product.formula}
        />
        <div id=${index}-buttons>
            <button
            type="button"
            onclick=handleEdit(${index})
            >
            Edit
        </div>
        </button>
      </form>
    `;
      document.getElementById('product-list').innerHTML += productNotModified + formula + productModified;
    });
  }

  renderFormula(index) {
    if (this.state === 'DISPLAY') {
      this.component = `
        <button
        type="button"
        onclick=handleEdit(${index})
        >
        Edit
        </button>
        `;
    } else {
      this.component = `
        <button
        type="button"
        onclick=handleSave(${index})
        >
        Save
        </button>
        <button
        type="button"
        onclick=handleCancel(${index})
        >
        Cancel
        </button>
        <button
        type="button"
        onclick=handleDelete(product, index)
        >
        Delete
        </button>
        `;
    }
    document.getElementById(`${index}-buttons`).innerHTML = this.component;
  }

  renderNewPrice(index, price) {
    this.price = price;
    document.getElementById(`product-formulaPrice-${index}`).innerHTML = `${price}€`;
  }
}
