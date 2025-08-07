import request from "@/utils/request";

/**
 * 获取产品数据
 */
export const getProductData = () => {
    return request({
        url: '/api/cpzx-lists?populate=images&populate=items.jsgg',
        method: 'get',
        data: {},
    });
}; 

/**
 * 获取产品目录
 */
export const getProductCatalog = () => {
    return request({
        url: '/api/cpzx-cpmls?populate=image',
        method: 'get',
        data: {},
    });
}; 
