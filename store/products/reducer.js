
export const initalState = {
    allProducts: [],
    compareItems: [],
    cartItems: [],
};

function reducer(state = initalState, action) {
    switch (action.type) {
        // new
        case "GET_ALL_PRODUCTS":
            return {
                ...state,
                allProducts: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;
