//Store/Reducers/cartReducer.js

const initialState = { cartCar: [] }

function toggleCart(state = initialState, action) {
    let nextState 
    switch (action.type) {
        case 'TOGGLE_CART':
            
            const cartCarIndex = state.cartCar.findIndex(item => item.id === action.value.id)
            
            if (cartCarIndex !== -1) {
                // La voiture est déjà dans le panier, on la supprimer de la liste
                nextState = {
                    ...state,
                    cartCar: state.cartCar.filter((item, index) => index !== cartCarIndex)
                }
            }
            else {
                //La voiture n'est pas dans le panier, on l'ajoute au panier
                nextState = {
                    ...state,
                    cartCar : [...state.cartCar, action.value]
                }
            }
            return nextState || state
        
        default:
            return state
    }
}

export default toggleCart