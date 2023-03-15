import request from '@/utils/request';

export function addUser(data) {
  return request({
    url: 'users/test',
    method: 'post',
    data,
  });
}

export function getUsers() {
  return request({
    url: 'users',
    method: 'get',
  });
}
