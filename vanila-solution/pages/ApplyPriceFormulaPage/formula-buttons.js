function handleEdit(index) {
  const buttonContainer = document.getElementById(`${index}-buttons`);
  buttonContainer.innerHTML = `
    <button
    type="button"
    onclick=handleSave(inputFormula, product, index)
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

function handleCancel(index) {
  const buttonContainer = document.getElementById(`${index}-buttons`);
  buttonContainer.innerHTML = `
    <div id=${index}-buttons>
    <button
    type="button"
    onclick=handleEdit(${index})
    >
    Edit
    </div>
    `;
}
