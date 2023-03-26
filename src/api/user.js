import request from '@/utils/request';

export function addUser(data) {
  return request({
    url: 'users/test',
    method: 'post',
    data,
  });
}

export function getUsers(page, size) {
  return request({
    url: `users/page=${page}&size=${size}`,
    method: 'get',
  });
}
