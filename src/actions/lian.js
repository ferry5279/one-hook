import api from '@/services/api'
import { post, get } from '@/utils/request'
export function get_left_data(option) {
    return {
        type: 'LEFT_NAV_DATA',
        payload: get(api.leftdata)
    }
}
export function get_rig_data(option) {
    console.log(option)
    return {
        type: 'RIG_NAV_DATA',
        payload: get(`http://vueshop.glbuys.com/api/home/category/show?token=1ec949a15fb709370f&cid=${option.cid}`)
    }
}