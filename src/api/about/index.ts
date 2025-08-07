import request from '../../utils/request';

/**
 * 获取公司简介
 * @param params 
 * @returns 
 */
export const getCompanyIntro = () => {
    return request({
        url: '/api/gongsijianjie?populate=image&populate=video&populate=tags',
        method: 'get',
        data: {},
    });
}; 

/**
 * 获取董事长致辞
 */
export const getPresidentSpeech = () => {
    return request({
        url: '/api/dongshizhangzhici?populate=*',
        method: 'get',
        data: {},
    });
}; 