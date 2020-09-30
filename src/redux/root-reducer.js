const INITIAL_STATE = {
    offers: [],
    currentOffer: {}
};

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_OFFERS':
            return {
                ...state,
                offers: action.payload
            }
        case 'SET_CURRENT_OFFER':
            return {
                ...state,
                currentOffer: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;