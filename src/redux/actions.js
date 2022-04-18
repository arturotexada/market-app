export const actions = {
    addProduct: "ADD_PRODUCT",
    deleteProduct: "DELETE_PRODUCT",
    selectProduct: "SELECT_PRODUCT",
    updateProduct: "UPDATE_PRODUCT"
}



export const addProduct = (product) => ({
    type: actions.addProduct,
    payload: product
})

export const deleteProduct = (id) => ({
    type: actions.deleteProduct,
    payload: id
})

export const selectProduct = (product) => ({
    type: actions.selectProduct,
    payload: product
})

export const updateProduct = (product) => ({
    type: actions.updateProduct,
    payload: product
})