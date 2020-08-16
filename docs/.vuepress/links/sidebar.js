module.exports = {
  '/guide': [
    {
      title: '指南',
      collapsable: false,
      children: [
        '/guide/introduction',
        '/guide/chapter',
        '/guide/install',
        '/guide/repo',
        '/guide/pull',
      ],
    },
  ],
  '/code': [
    {
      title: '代码',
      collapsable: false,
      children: [], // TODO
    },
  ],
  '/basic': [
    {
      title: '创建型模式',
      collapsable: false,
      children: [
        '/basic/create_pattern/', // TODO
      ],
    },
    {
      title: '行为型模式',
      collapsable: false,
      children: [
        '/basic/behavior_pattern/', // TODO
      ],
    },
    {
      title: '结构型模式',
      collapsable: false,
      children: [
        '/basic/structural_pattern/', // TODO
      ],
    },
  ],
};
