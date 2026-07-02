window.dashboardData = {
  // ========== 党员个人详情（用于筛选） ==========
  members: [
    {
      name: "张三",
      branch: "第一党支部",
      position: "支部书记",
      studyHours: 45,
      lastActivity: "2026-06-20 主题党日",
      evaluation: "优秀"
    },
    {
      name: "李四",
      branch: "第二党支部",
      position: "党员",
      studyHours: 32,
      lastActivity: "2026-06-18 党课学习",
      evaluation: "良好"
    },
    {
      name: "王五",
      branch: "第一党支部",
      position: "组织委员",
      studyHours: 50,
      lastActivity: "2026-06-20 主题党日",
      evaluation: "优秀"
    },
    {
      name: "赵六",
      branch: "第三党支部",
      position: "党员",
      studyHours: 28,
      lastActivity: "2026-06-15 志愿服务",
      evaluation: "合格"
    }
    // 按相同格式继续添加所有党员...
  ],

  // ========== 年龄分布（饼图） ==========
  ageGroups: {
    "30岁以下": 5,
    "31-40岁": 12,
    "41-50岁": 8,
    "51岁以上": 3
  },

  // ========== 项目分布（饼图） ==========
  projectGroups: {
    "武汉项目A": 10,
    "武汉项目B": 8,
    "武汉项目C": 6,
    "武汉项目D": 5
  },

  // ========== 学历分布（饼图，新增） ==========
  eduGroups: {
    "博士": 2,
    "硕士": 8,
    "本科": 18,
    "大专": 5,
    "高中及以下": 2
  },

  // ========== 武汉市项目坐标（暂时不用，保留） ==========
  projects: [
    { name: "武汉项目A", lng: 114.31, lat: 30.52, members: 10 },
    { name: "武汉项目B", lng: 114.40, lat: 30.60, members: 8 },
    { name: "武汉项目C", lng: 114.25, lat: 30.55, members: 6 },
    { name: "武汉项目D", lng: 114.35, lat: 30.50, members: 5 }
  ],

  // ========== 党的理论外链 ==========
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
  ]
};
