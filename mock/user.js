// mock 用户
// 引入mockjs
import { mock } from 'mockjs';

// 生成模拟数据
const test = function () {
  return mock({
    // 属性list的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [
      {
        // 属性id是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        // 通过占位符生成随机数据
        name: '@name',
        age: '@natural(18, 100)',
        email: '@email',
      },
    ],
  });
};

// 映射访问的url
// 此处表示当Ajax请求/mock/test路径时，会映射执行test函数
mock('/mock/test', test);
