import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};

export const loginData = params => {
    return request({
        url: '/login',
        method: 'post',
        data: params,
        contentType: 'application/json'
    })
}
