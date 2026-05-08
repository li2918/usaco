const questions = [
  {
    id: "f1",
    group: "foundation",
    level: "基础",
    skill: "编程基础",
    points: 4,
    title: "循环边界",
    prompt: "要读取 N 头牛的编号并求和，N 已知。哪种循环最不容易出现多读或少读？",
    options: [
      "for (int i = 0; i <= N; i++)",
      "for (int i = 0; i < N; i++)",
      "while (N--) 后再额外读一次",
      "从 1 循环到 N-1"
    ],
    answer: 1
  },
  {
    id: "f2",
    group: "foundation",
    level: "基础",
    skill: "调试习惯",
    points: 4,
    title: "样例不通过时的第一步",
    prompt: "一道题样例输出不对，最合适的第一步是什么？",
    options: [
      "马上换一种完全不同的算法",
      "打印关键变量或手算一组小样例定位差异",
      "只改输出格式直到样例看起来接近",
      "忽略样例，直接提交"
    ],
    answer: 1
  },
  {
    id: "f3",
    group: "foundation",
    level: "基础",
    skill: "复杂度分析",
    points: 5,
    title: "约束与复杂度",
    prompt: "如果 N 最大是 100000，通常哪种复杂度最稳妥？",
    options: ["O(N^2)", "O(N!)", "O(N log N)", "O(2^N)"],
    answer: 2
  },
  {
    id: "b1",
    group: "bronze",
    level: "Bronze",
    skill: "模拟实现",
    points: 6,
    title: "模拟题核心",
    prompt: "USACO Bronze 模拟题最重要的能力通常是？",
    options: [
      "先写高级数据结构",
      "把题意状态、转移顺序和边界条件准确翻译成代码",
      "只记忆固定模板",
      "优先证明最优子结构"
    ],
    answer: 1
  },
  {
    id: "b2",
    group: "bronze",
    level: "Bronze",
    skill: "枚举",
    points: 6,
    title: "可行枚举",
    prompt: "N <= 100，检查所有二元组 (i, j) 是否满足条件，最自然的做法是？",
    options: ["双重循环", "Dijkstra", "线段树", "后缀数组"],
    answer: 0
  },
  {
    id: "b3",
    group: "bronze",
    level: "Bronze",
    skill: "排序与贪心",
    points: 7,
    title: "先排序再处理",
    prompt: "要把区间按左端点从小到大合并，第一步通常是？",
    options: [
      "按输入顺序直接合并",
      "按右端点随机打乱",
      "按左端点排序，再维护当前合并区间",
      "对每个点都建图"
    ],
    answer: 2
  },
  {
    id: "b4",
    group: "bronze",
    level: "Bronze",
    skill: "数据结构基础",
    points: 6,
    title: "频次统计",
    prompt: "要统计每个牛编号出现次数，编号范围较小，最直接的数据结构是？",
    options: ["数组或哈希表", "最小生成树", "拓扑排序", "二分图匹配"],
    answer: 0
  },
  {
    id: "s1",
    group: "silver",
    level: "Silver",
    skill: "二分答案",
    points: 9,
    title: "二分答案条件",
    prompt: "二分答案通常依赖什么性质？",
    options: [
      "答案必须是字符串",
      "可行性随答案单调变化",
      "输入必须已经随机",
      "所有题都能转成递归"
    ],
    answer: 1
  },
  {
    id: "s2",
    group: "silver",
    level: "Silver",
    skill: "前缀和",
    points: 8,
    title: "区间和查询",
    prompt: "多次询问数组 [l, r] 的和，最常用的预处理是？",
    options: ["前缀和", "DFS 树", "并查集", "快速幂"],
    answer: 0
  },
  {
    id: "s3",
    group: "silver",
    level: "Silver",
    skill: "图论基础",
    points: 9,
    title: "连通块",
    prompt: "无向图中统计连通块数量，常用方法是？",
    options: ["排序每条边", "DFS/BFS 或并查集", "只看节点编号", "动态规划背包"],
    answer: 1
  },
  {
    id: "s4",
    group: "silver",
    level: "Silver",
    skill: "双指针",
    points: 8,
    title: "滑动窗口",
    prompt: "处理正数数组中满足和不超过 K 的最长连续区间，哪种思路常见？",
    options: ["双指针维护窗口", "枚举所有排列", "Floyd 最短路", "高精度乘法"],
    answer: 0
  },
  {
    id: "s5",
    group: "silver",
    level: "Silver",
    skill: "最短路",
    points: 10,
    title: "非负边权最短路",
    prompt: "带非负边权图的单源最短路，典型算法是？",
    options: ["KMP", "Dijkstra", "快速排序", "欧几里得算法"],
    answer: 1
  },
  {
    id: "g1",
    group: "gold",
    level: "Gold",
    skill: "动态规划",
    points: 12,
    title: "DP 状态设计",
    prompt: "设计动态规划时，最关键的是先明确什么？",
    options: [
      "变量名是否很短",
      "状态含义、转移来源和边界",
      "一定要使用递归",
      "只需要背模板"
    ],
    answer: 1
  },
  {
    id: "g2",
    group: "gold",
    level: "Gold",
    skill: "树与图",
    points: 12,
    title: "树上信息合并",
    prompt: "要计算每个节点子树内的信息，常见遍历方式是？",
    options: ["后序 DFS", "随机访问节点", "只遍历叶子", "按字符串字典序遍历"],
    answer: 0
  },
  {
    id: "g3",
    group: "gold",
    level: "Gold",
    skill: "数据结构进阶",
    points: 12,
    title: "动态区间查询",
    prompt: "数组有单点修改和区间求和，多次操作时常用什么？",
    options: ["树状数组或线段树", "普通数组每次重算", "全排列", "暴力递归所有子集"],
    answer: 0
  },
  {
    id: "g4",
    group: "gold",
    level: "Gold",
    skill: "数学建模",
    points: 11,
    title: "取模计数",
    prompt: "答案很大且题目要求 mod 1e9+7，代码中应如何处理？",
    options: [
      "最后一次性用 int 存全部答案",
      "每次加法或乘法后按需取模，并注意溢出",
      "忽略取模",
      "把所有数转成字符串排序"
    ],
    answer: 1
  },
  {
    id: "g5",
    group: "gold",
    level: "Gold",
    skill: "综合建模",
    points: 13,
    title: "从题意到算法",
    prompt: "遇到长题面时，最有效的建模顺序是？",
    options: [
      "先找样例输出规律并硬编码",
      "提炼输入约束、状态变量、目标函数，再选择算法",
      "直接写最长的模板",
      "跳过题意只看标题"
    ],
    answer: 1
  }
];

const state = {
  started: false,
  activeFilter: "all",
  answers: {},
  secondsLeft: 45 * 60,
  timerId: null
};

const els = {
  list: document.querySelector("#questionList"),
  template: document.querySelector("#questionTemplate"),
  timeLeft: document.querySelector("#timeLeft"),
  progressFill: document.querySelector("#progressFill"),
  progressText: document.querySelector("#progressText"),
  startBtn: document.querySelector("#startBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  report: document.querySelector("#report"),
  levelPreview: document.querySelector("#levelPreview"),
  studentName: document.querySelector("#studentName"),
  studentLanguage: document.querySelector("#studentLanguage"),
  studentGoal: document.querySelector("#studentGoal"),
  reportTitle: document.querySelector("#reportTitle"),
  finalScore: document.querySelector("#finalScore"),
  recommendedLevel: document.querySelector("#recommendedLevel"),
  accuracy: document.querySelector("#accuracy"),
  skillBars: document.querySelector("#skillBars"),
  diagnosisList: document.querySelector("#diagnosisList"),
  studyPlan: document.querySelector("#studyPlan"),
  printBtn: document.querySelector("#printBtn")
};

function renderQuestions() {
  els.list.innerHTML = "";
  const visible = questions.filter((question) => {
    return state.activeFilter === "all" || question.group === state.activeFilter;
  });

  visible.forEach((question) => {
    const node = els.template.content.firstElementChild.cloneNode(true);
    node.dataset.id = question.id;
    node.classList.toggle("locked", !state.started);
    node.querySelector(".badge").textContent = `${question.level} · ${question.skill}`;
    node.querySelector(".points").textContent = `${question.points} 分`;
    node.querySelector("h3").textContent = question.title;
    node.querySelector(".prompt").textContent = question.prompt;

    const options = node.querySelector(".options");
    question.options.forEach((option, index) => {
      const label = document.createElement("label");
      label.className = "option";
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = question.id;
      radio.value = String(index);
      radio.disabled = !state.started;
      radio.checked = state.answers[question.id] === index;
      radio.addEventListener("change", () => {
        state.answers[question.id] = index;
        updateProgress();
        renderReport();
      });
      const text = document.createElement("span");
      text.textContent = option;
      label.append(radio, text);
      options.append(label);
    });

    els.list.append(node);
  });
}

function updateProgress() {
  const answered = Object.keys(state.answers).length;
  const ratio = answered / questions.length;
  els.progressFill.style.width = `${Math.round(ratio * 100)}%`;
  els.progressText.textContent = `${answered} / ${questions.length} 已完成`;

  if (!state.started) {
    els.levelPreview.textContent = "等待开始";
    return;
  }

  const report = calculateReport();
  els.levelPreview.textContent = `当前估计：${report.level}`;
}

function startAssessment() {
  if (state.started) return;
  state.started = true;
  els.startBtn.textContent = "测评进行中";
  els.startBtn.disabled = true;
  tickTimer();
  state.timerId = window.setInterval(tickTimer, 1000);
  renderQuestions();
  updateProgress();
}

function resetAssessment() {
  state.started = false;
  state.answers = {};
  state.secondsLeft = 45 * 60;
  window.clearInterval(state.timerId);
  state.timerId = null;
  els.startBtn.textContent = "开始测评";
  els.startBtn.disabled = false;
  els.report.hidden = true;
  renderQuestions();
  updateProgress();
  updateTimerText();
}

function tickTimer() {
  updateTimerText();
  if (state.secondsLeft <= 0) {
    window.clearInterval(state.timerId);
    state.timerId = null;
    state.started = false;
    renderQuestions();
    renderReport(true);
    return;
  }
  state.secondsLeft -= 1;
}

function updateTimerText() {
  const minutes = Math.floor(state.secondsLeft / 60);
  const seconds = state.secondsLeft % 60;
  els.timeLeft.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function calculateReport() {
  let earned = 0;
  let total = 0;
  let correct = 0;
  const skillMap = new Map();
  const levelMap = new Map();

  questions.forEach((question) => {
    total += question.points;
    const isCorrect = state.answers[question.id] === question.answer;
    if (isCorrect) {
      earned += question.points;
      correct += 1;
    }

    addBucket(skillMap, question.skill, question.points, isCorrect);
    addBucket(levelMap, question.group, question.points, isCorrect);
  });

  const score = Math.round((earned / total) * 100);
  const levelScores = Object.fromEntries(
    Array.from(levelMap.entries()).map(([key, value]) => [key, value.possible ? value.earned / value.possible : 0])
  );

  let level = "Bronze 预备班";
  if (score >= 78 && levelScores.gold >= 0.55 && levelScores.silver >= 0.68) {
    level = "Gold 强化班";
  } else if (score >= 62 && levelScores.silver >= 0.58) {
    level = "Silver 提升班";
  } else if (score >= 42 && levelScores.bronze >= 0.55) {
    level = "Bronze 冲刺班";
  }

  return {
    score,
    correct,
    totalQuestions: questions.length,
    level,
    skills: Array.from(skillMap.entries()).map(([skill, value]) => ({
      skill,
      percent: value.possible ? Math.round((value.earned / value.possible) * 100) : 0
    })),
    levelScores
  };
}

function addBucket(map, key, points, isCorrect) {
  if (!map.has(key)) {
    map.set(key, { earned: 0, possible: 0 });
  }
  const bucket = map.get(key);
  bucket.possible += points;
  if (isCorrect) bucket.earned += points;
}

function renderReport(timeExpired = false) {
  const answered = Object.keys(state.answers).length;
  if (answered === 0 && !timeExpired) {
    els.report.hidden = true;
    return;
  }

  const report = calculateReport();
  const name = els.studentName.value.trim() || "新学员";
  els.report.hidden = false;
  els.reportTitle.textContent = `${name} 的测评报告`;
  els.finalScore.textContent = String(report.score);
  els.recommendedLevel.textContent = report.level;
  els.accuracy.textContent = `${Math.round((report.correct / report.totalQuestions) * 100)}%`;

  els.skillBars.innerHTML = "";
  report.skills
    .sort((a, b) => a.percent - b.percent)
    .forEach((item) => {
      const row = document.createElement("div");
      row.className = "skill-row";
      row.innerHTML = `
        <div class="skill-label"><span>${item.skill}</span><span>${item.percent}%</span></div>
        <div class="bar"><div style="width:${item.percent}%"></div></div>
      `;
      els.skillBars.append(row);
    });

  renderDiagnosis(report);
  renderStudyPlan(report);
}

function renderDiagnosis(report) {
  els.diagnosisList.innerHTML = "";
  const weak = report.skills.filter((item) => item.percent < 55).slice(0, 3);
  const strong = report.skills.filter((item) => item.percent >= 75).slice(0, 3);
  const items = [];

  items.push(`推荐从「${report.level}」开始，当前目标为「${els.studentGoal.value}」，主要语言为 ${els.studentLanguage.value}。`);
  if (strong.length) {
    items.push(`优势能力：${strong.map((item) => item.skill).join("、")}，可以安排更高密度的综合题。`);
  }
  if (weak.length) {
    items.push(`优先补强：${weak.map((item) => item.skill).join("、")}，这些短板会直接影响比赛题稳定性。`);
  }
  if (report.levelScores.gold >= 0.5 && report.levelScores.silver < 0.6) {
    items.push("能理解部分高阶概念，但 Silver 基础还不够稳，建议先补齐图论、二分和前缀和。");
  }
  if (!weak.length) {
    items.push("各模块没有明显断层，可以进入限时套题训练，用复盘提升速度和代码准确率。");
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    els.diagnosisList.append(li);
  });
}

function renderStudyPlan(report) {
  els.studyPlan.innerHTML = "";
  const weakSkills = report.skills.filter((item) => item.percent < 65).map((item) => item.skill);
  const plan = [];

  if (report.level.includes("预备")) {
    plan.push("第 1 周：变量、循环、数组、字符串和输入输出训练，每天 3 到 5 道短模拟题。");
    plan.push("第 2 周：枚举、排序、频次统计和边界条件专项，建立提交前自测清单。");
  } else if (report.level.includes("Bronze")) {
    plan.push("第 1 周：Bronze 模拟、枚举、排序题混合训练，要求每题写出状态变化表。");
    plan.push("第 2 周：加入简单贪心和前缀和，为 Silver 题型做迁移准备。");
  } else if (report.level.includes("Silver")) {
    plan.push("第 1 周：二分答案、前缀和、双指针专项，每个专题完成 6 到 8 道题。");
    plan.push("第 2 周：BFS/DFS、并查集、Dijkstra 入门，开始做 90 分钟限时训练。");
  } else {
    plan.push("第 1 周：树形 DP、线段树、最短路变形题，强调状态定义和复杂度证明。");
    plan.push("第 2 周：Gold 套题复盘，记录每题卡点并沉淀个人模板。");
  }

  if (weakSkills.length) {
    plan.push(`每次课后额外安排「${weakSkills.slice(0, 3).join("、")}」错题回炉，直到单项正确率超过 70%。`);
  }
  plan.push("每两周重新测评一次，比较综合分、单项分和限时完成率，决定是否升班。");

  plan.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    els.studyPlan.append(li);
  });
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    state.activeFilter = tab.dataset.filter;
    renderQuestions();
  });
});

els.startBtn.addEventListener("click", startAssessment);
els.resetBtn.addEventListener("click", resetAssessment);
els.printBtn.addEventListener("click", () => window.print());

renderQuestions();
updateProgress();
updateTimerText();
