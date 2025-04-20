// Action to add a product to the wishlist
export const addToWishlist = (product) => ({
    type: "ADD_TO_WISHLIST",
    payload: product,
  });
  
  // Action to remove a product from the wishlist
  export const removeFromWishlist = (productId) => ({
    type: "REMOVE_FROM_WISHLIST",
    payload: productId,
  });
  
  // Action to clear the entire wishlist
  export const clearWishlist = () => ({
    type: "CLEAR_WISHLIST",
  });
  