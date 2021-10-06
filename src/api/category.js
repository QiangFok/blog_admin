import Request from '@/utils/request'
import {API_CATEGORY_LIST} from '@/constants/api'

export function loadList(data) {
    return new Request({
        url: API_CATEGORY_LIST,
        method: 'post',
        data
    })
}
