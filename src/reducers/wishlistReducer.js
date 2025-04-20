// src/reducers/wishlistReducer.js
const initialState = [];

function wishlistReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      // Check if the product already exists in the wishlist
      const itemExists = state.some(item => item.id === action.payload.id);
      if (itemExists) {
        return state; // Don't add it again
      }
      return [...state, action.payload];
    
    default:
      return state;
  }
}

export default wishlistReducer;
