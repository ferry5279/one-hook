import api from '@/services/api'
import { post, get } from '@/utils/request'
export function getData(option) {
    return {
        type: 'DEFAULT_DATA',
        payload: get(api.userList)
    }
}
export function dellData(option) {
    return {
        type: 'DELL_DATA',
        payload: post(api.dell, option)
    }
}
export function searData(option) {
    return {
        type: 'SEAR_DATA',
        payload: post(api.search, option)
    }
}
export function addData(option) {
    return {
        type: 'ADD_DATA',
        payload: post(api.add, option)
    }
}
export function editData(option) {
    return {
        type: 'EDIT_DATA',
        payload: post(api.update, option)
    }
}