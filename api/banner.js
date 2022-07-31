import request from '@/utils/request'

export default {
  getBannerList(count) {
    return request({
      url: `/edu/cms/banner/front/list/${count}`,
      method: 'get'
    })
  }
}