/*
 * @Author: weisheng
 * @Date: 2024-01-12 18:23:22
 * @LastEditTime: 2024-06-19 19:26:32
 * @LastEditors: weisheng
 * @Description:
 * @FilePath: \wot-starter-retail\src\services\good\comments\fetchCommentDetail.ts
 * 记得注释
 */
import { config } from '../../../config/index'
import { queryCommentDetail } from '../../../model/comments/queryDetail'
import { delay } from '../../_utils/delay'
/** 获取商品评价数据 */
function mockQueryCommentDetail(params) {
  const data = queryCommentDetail()
  return delay().then(() => {
    return data
  })
}

/** 获取评价详情 */
export function getCommentDetail(params) {
  if (config.useMock) {
    return mockQueryCommentDetail(params)
  }
  return new Promise((resolve) => {
    resolve('real api')
  })
}
