import {actions} from './actions';

const INITIAL_STATE = {
    products: [
        {    id: 1,
            name: "Pollo Frito",
            price: 1.2,
            isAvailable: true
        },
        {    id: 2,
            name: "Jabón",
            price: 3.1,
            isAvailable: true
        }
    ],
    productSelected: null
}

const reducer = (state = INITIAL_STATE, action) => {
		switch(action.type){

            case actions.addProduct:
            return {
                    ...state,
                    products: [...state.products, action.payload]
            }

            case actions.deleteProduct: 
            return {
                    ...state,
                    products: state.products.filter(product => 
                         product.id !== action.payload
                         )    
            }

            case actions.selectProduct: 
            return {
                    ...state,
                    
                         productSelected:  action.payload
                            
            } 

            case actions.updateProduct: 
            const index = state.products.findIndex(
                product => product.id === action.payload.id)
            state.products[index] = action.payload

            return {
                    ...state,
                        products: [...state.products],
                         productSelected:  null           
            } 

        default: 
            return state;
    }
}

export default reducer;