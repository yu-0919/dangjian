window.dashboardData = {

  // ========== 党员个人详情 ==========
  members: [
    {
      name: "张三",
      branch: "第一党支部",
      position: "支部书记",
      studyHours: 45,
      project: "武汉项目A",
      evaluation: "优秀"
    },
    {
      name: "李四",
      branch: "第二党支部",
      position: "党员",
      studyHours: 32,
      project: "武汉项目B",
      evaluation: "良好"
    },
    {
      name: "王五",
      branch: "第一党支部",
      position: "组织委员",
      studyHours: 50,
      project: "武汉项目A",
      evaluation: "优秀"
    },
    {
      name: "赵六",
      branch: "第三党支部",
      position: "党员",
      studyHours: 28,
      project: "武汉项目C",
      evaluation: "合格"
    },
    {
      name: "孙七",
      branch: "第二党支部",
      position: "宣传委员",
      studyHours: 6,
      project: "武汉项目B",
      evaluation: "合格"
    }
  ],

  // ========== 年龄分布 ==========
  ageGroups: {
    "30岁以下": 5,
    "31-40岁": 12,
    "41-50岁": 8,
    "51岁以上": 3
  },

  // ========== 项目分布 ==========
  projectGroups: {
    "武汉项目A": 10,
    "武汉项目B": 8,
    "武汉项目C": 6,
    "武汉项目D": 5
  },

  // ========== 学历分布 ==========
  eduGroups: {
    "博士": 2,
    "硕士": 8,
    "本科": 18,
    "大专": 5,
    "高中及以下": 2
  },

  // ========== 项目坐标（保留，暂时不用） ==========
  projects: [
    { name: "武汉项目A", lng: 114.31, lat: 30.52, members: 10 },
    { name: "武汉项目B", lng: 114.40, lat: 30.60, members: 8 },
    { name: "武汉项目C", lng: 114.25, lat: 30.55, members: 6 },
    { name: "武汉项目D", lng: 114.35, lat: 30.50, members: 5 }
  ],

  // ========== 学习链接 ==========
  theoryLinks: [
    { title: "学习强国", url: "https://www.xuexi.cn" },
    { title: "共产党员网", url: "https://www.12371.cn" },
    { title: "党史学习教育官网", url: "http://dangshi.people.com.cn" }
  ],

  // ========== 支部动态新闻 ==========
  news: [
    {
      id: 1,
      title: "招商积余湖北公司党支部开展主题党日活动",
      date: "2026-06-25",
      image: "https://picsum.photos/400/200",
      content: "6月25日，全体党员参观了红色教育基地，重温入党誓词，进一步坚定了理想信念。"
    },
    {
      id: 2,
      title: "支部书记讲党课：学条例、守纪律",
      date: "2026-06-10",
      image: "https://picsum.photos/400/200",
      content: "党课围绕《中国共产党纪律处分条例》展开，要求全体党员知敬畏、守底线。"
    }
  ],

  // ========== 党的理论（领导讲话）【新增】 ==========
  speeches: [
    {
      title: "习近平：在庆祝中国共产党成立105周年大会上的讲话",
      date: "2026-07-05",
      url: "https://www.12371.cn/2026/07/01/ARTI1782887883715499.shtml",
    },
    {
      title: "聂黎明挂点调研招商积余并讲授专题党课",
      date: "2026-07-03",
      content: "7月3日，公司党委副书记、总经理聂黎明到招商积余开展挂点调研，听取党建及经营、战略优化等工作汇报，讲授树立和践行正确政绩观专题党课，并出席思享汇活动，与30名来自不同岗位的青年员工代表座谈交流。"
    }
  ],

  // ========== 组织制度【新增】 ==========
  policies: [
    {
      title: "中国共产党纪律处分条例",
      date: "2026-07-05",
      url: "https://www.12371.cn/2023/12/27/ARTI1703689211048182.shtml",
      content: "这里放详细内容或摘要。可以分条列出，也可以放全文链接。"
    },
    {
      title: "招商积余湖北公司党建工作制度",
      date: "2026-07-05",
      url: "https://www.12371.cn/2026/03/23/ARTI1774225537913397.shtml",
      content: "这里放党建工作制度的详细内容。包括组织生活制度、学习制度、考核制度等。"
    }
  ]
};
