import request from '@/utils/request';

export function addUser(data) {
  return request({
    url: 'users/test',
    method: 'post',
    data
  });
}
