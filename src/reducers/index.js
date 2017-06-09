const initialState = { media: [] }

const media = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MEDIA':
            return { ...state, media: action.media }
        default:
            return state
    }
}

export default media