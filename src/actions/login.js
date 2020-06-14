import api from '@/services/api'
import { post } from '@/utils/request'
const proxy = 'http://134.175.115.202'
export function getLogin(option) {
    return {
        type: 'FETCH_LOGIN',
        payload: post(`${proxy}${api.login}`, option)
    }
}