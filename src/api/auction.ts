import axios from '../utils/axios'

export function getAuctionList(type: any, data: any) {
  return axios({
    url: '/hns/wallet/auction/'+ type,
    method: 'post',
    data
  })
}

export function getMarket (params: any) {
  return axios({
    url:'hns/names',
    method:'get',
    params
  })
}