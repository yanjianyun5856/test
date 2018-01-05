import fetch from '@/utils/fetch'


export function getList(params) {
  return fetch({
    url: '/tableList',
    method: 'get',
    params
  })
}

export function updateData(params) {

  return fetch({
    url: '/update',
    method: 'post',
    data:params 
  })
}

export function deleteData(params) {
  return fetch({
    url: '/delete',
    method: 'get',
    params
  })
}