const INITIAL_STATE = {
    offers: [],
    currentOffer: {},
    filter: {
        title: '',
        city: ''
    }
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
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;