// mock 博客
import { mock } from 'mockjs';

// 随机生成一个Blog
const getBlogById = function () {
  return mock({
    id: '@increment(1)',
    // 博客标题
    title: '@csentence(5, 10)',
    // 博客内容
    content: '@cparagraph(100, 200)',
    // 博客作者
    author: '@cname',
    // 博客发布日期
    date: '@date("yyyy-MM-dd")',
    // 博客标签 随机选取两个作为最终标签
    tags: ['技术', '生活', '旅行'].sort(() => Math.random() - 0.5).slice(0, 2),
  });
};

// 获取文章的相关文章
const getBlogRelated = function () {
  return mock({
    'list|3-5': [
      {
        id: '@increment(1)',
        // 博客标题
        title: '@csentence(5, 10)',
        // 博客作者
        author: '@cname',
        // 博客发布日期
        date: '@date("yyyy-MM-dd")',
      },
    ],
  }).list;
};

// 获取文章的评论
const getBlogComment = function () {
  return mock({
    'list|3-5': [
      {
        id: '@increment(1)',
        // 评论者名称
        username: '@cname',
        // 评论时间
        time: '@date("yyyy-MM-dd")',
        // 评论内容
        content: '@csentence(5, 10)',
      },
    ],
  }).list;
};

// 映射访问的url
mock('/mock/blog/1', 'get', getBlogById);
mock('/mock/blog/1/related', 'get', getBlogRelated);
mock('/mock/blog/1/comment', 'get', getBlogComment);
