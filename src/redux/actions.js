const setOffers = offers => ({
    type: 'SET_OFFERS',
    payload: offers
})

const setCurrentOffer = offer => ({
    type: 'SET_CURRENT_OFFER',
    payload: offer
})

export { setOffers, setCurrentOffer };