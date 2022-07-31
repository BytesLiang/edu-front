import request from '@/utils/request'

export default {
  getCourseList(count) {
    return request({
      url: `/eduService/front/index/course/${count}`,
      method: 'get'
    })
  },
  getTeacherList(count) {
    return request({
      url: `/eduService/front/index/teacher/${count}`,
      method: 'get'
    })
  }
}