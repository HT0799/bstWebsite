import request from "@/utils/request";

/**
 * 获取研发中心数据
 */
export const getResearchCenterData = () => {
    return request({
        url: '/api/yanfazhongxin?populate=lhsys.items.image&populate=zsscx.items&populate=zsscx.zlzs.image',
        method: 'get',
        data: {},
    });
}; 

/**
 * 获取智能自动化数据
 */
export const getSmartAutomationData = () => {
    return request({
        url: '/api/zhinengzidonghuagongyishebei?populate=znzdhgysb.items&populate=jsys.items.tags',
        method: 'get',
        data: {},
    });
}; 

/**
 * 获取优品保障数据
 */
export const getQualityAssuranceData = () => {
    return request({
        url: '/api/youpinbaozhang?populate=jczx.items.image&populate=jczx.tags&populate=kemaZs.items.image&populate=ddwjcbg.image&populate=ddwjcbg.items.image',
        method: 'get',
        data: {},
    });
}; 