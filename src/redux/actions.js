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

export { setOffers, setCurrentOffer, setFilter };