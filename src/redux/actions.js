const setOffers = offers => ({
    type: 'SET_OFFERS',
    payload: offers
})

const setCurrentOffer = offer => ({
    type: 'SET_CURRENT_OFFER',
    payload: offer
})

const setFilter = filter => ({
    type: 'SET_FILTER',
    payload: filter
})

const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
})

export { setOffers, setCurrentOffer, setFilter, setCurrentUser };