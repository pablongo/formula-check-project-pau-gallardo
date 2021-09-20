class FormulaPage {
  constructor(products) {
    this.productList = products;
    this.state = 'DISPLAY';
  }

  setView() {
    this.productList.forEach((product, index) => {
      const productNotModified = `
      <div className="product-container">
      <h2 className="product-container__title">${product?.name}</h2>
      <img
        className="product-container__image"
        src="https://via.placeholder.com/150"
        alt="product"
      />
      <h3 className="product-container__title">Original price</h3>
      <span className="product-container__title">${product?.price}€</span>
      </div>
      `;

      const productModified = `
      <div className="product-container">
      <h2 className="product-container__title">${product?.name}</h2>
      <img
        className="product-container__image"
        src="https://via.placeholder.com/150"
        alt="product"
      />
      <h3 className="product-container__title">Modified price</h3>
      <span className="product-container__title">${product?.formulaPrice}€</span>
      </div>
      `;

      const formula = `
      <form>
        <input
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
}
