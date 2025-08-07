import request from "@/utils/request";

/**
 * 获取首页数据
 */
export const getHomeData = () => {
    return request({
        url: '/api/home-page?populate[0]=banner.image&populate[1]=about.image&populate[2]=cpzs&populate[3]=xwdt&populate[4]=ryzz&populate[5]=hzhb&populate[6]=hzhbLinks.image',
        method: 'get',
        data: {},
    });
}; 