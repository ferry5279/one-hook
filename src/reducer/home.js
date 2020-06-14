const initialState = {
    data: []
}
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DEFAULT_DATA':
            return {...state, data: payload.users }
        case 'DELL_DATA':
            return {...state }
        case 'SEAR_DATA':
            return {...state, data: payload.users }
        case 'ADD_DATA':
            return {...state }
        case 'EDIT_DATA':
            return {...state }
        default:
            return state
    }
}