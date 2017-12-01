import axios from 'axios'
import qs from 'qs'

export const fetch = (options) => {
  const {method = 'get', data, url} = options
  return new Promise((resolve, reject) => {
    if (method === 'get') {
      axios.get(url, {
        params: data
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
    } else if (method === 'post') {
      axios.post(url, qs.stringify(data))
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
    }
  })
}

export const getNum = (data) => {
  return fetch({
    method: 'post',
    url: '/answer/get_num',
    data: data
  })
}

export const getPrize = (data) => {
  return fetch({
    method: 'post',
    url: '/answer/get_prize',
    data: data
  })
}
