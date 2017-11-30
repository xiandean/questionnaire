import axios from 'axios'

export const fetch = (options) => {
  const {method = 'get', data, params, url} = options
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      data: data,
      params: params
    })
    .then((response) => {
      resolve(response.data)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

export const getNum = (data) => {
  return fetch({
    url: '/answer/get_num',
    params: data
  })
}

export const getPrize = (data) => {
  console.log(data)
  return fetch({
    url: '/answer/get_prize',
    params: data
  })
}
