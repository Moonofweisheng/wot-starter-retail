/*
 * @Author: weisheng
 * @Date: 2023-12-25 21:05:40
 * @LastEditTime: 2023-12-27 10:14:18
 * @LastEditors: weisheng
 * @Description:
 * @FilePath: \wot-starter-retail\src\utils\addressParse.ts
 * 记得注释
 */
import { areaData } from '../config/index'

export const addressParse = (provinceName, cityName, countryName) => {
  return new Promise((resolve, reject) => {
    try {
      const province = areaData.find((v) => v.label === provinceName)
      if (province) {
        const { value: provinceCode } = province
        const city = province.children.find((v) => v.label === cityName)
        const { value: cityCode } = city
        const country = city.children.find((v) => v.label === countryName)
        const { value: districtCode } = country
        resolve({
          provinceCode,
          cityCode,
          districtCode
        })
      }
    } catch (error) {
      reject('地址解析失败')
    }
  })
}
