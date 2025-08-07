import request from "@/utils/request";

/**
 * 获取人才理念数据
 */
export const getTalentIdeaData = () => {
    return request({
        url: '/api/rencailinian?populate=items.image&populate=image',
        method: 'get',
        data: {},
    });
}; 

/**
 * 获取服务与支持数据
 */
export const getServiceSupportData = () => {
    return request({
        url: '/api/fuwuyuzhichi',
        method: 'get',
        data: {},
    });
}; 

/**
 * 获取问题解答数据
 */
export const getQuestionAnswerData = () => {
    return request({
        url: '/api/faq',
        method: 'get',
        data: {},
    });
}; 
