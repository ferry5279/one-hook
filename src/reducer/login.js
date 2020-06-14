// import _ from 'loadsh';
import { message } from 'antd'
const initialState = {
    token: '',
    login_data: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'FETCH_LOGIN':
            console.log(payload)
            if (payload.code === '200') {
                message.info(payload.message)
                state.token = payload.data.token
                localStorage.setItem('token', payload.data.token)
            }
            return {...state, login_data: payload.data.userData }
        default:
            return state
    }
}