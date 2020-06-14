const initialState = {
    leftData: [],
    rigData: []
}

export default function lian(state = initialState, { type, payload }) {
    switch (type) {
        case 'LEFT_NAV_DATA':
            console.log(payload)
            return {...state, leftData: payload.data }
        case 'RIG_NAV_DATA':
            console.log(payload)
            return {...state, rigData: payload.data }
        default:
            return state
    }
}