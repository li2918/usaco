const questions = [
  {
    id: "q1",
    type: "choice",
    group: "foundation",
    level: "基础",
    skill: "读题与边界",
    points: 6,
    title: "循环边界与输入数量",
    prompt: "题目给定 N，接下来有 N 行牛的编号。哪种写法最不容易多读或少读？",
    options: [
      "for (int i = 0; i <= N; i++) 读入",
      "for (int i = 0; i < N; i++) 读入",
      "while (N--) 后再额外读一次",
      "从 1 循环到 N - 1"
    ],
    answer: 1
  },
  {
    id: "q2",
    type: "choice",
    group: "foundation",
    level: "基础",
    skill: "复杂度分析",
    points: 7,
    title: "约束与复杂度判断",
    prompt: "如果 N 最大为 100000，通常哪类复杂度最适合作为第一选择？",
    options: ["O(N^2)", "O(N!)", "O(N log N)", "O(2^N)"],
    answer: 2
  },
  {
    id: "q3",
    type: "short",
    group: "bronze",
    level: "Bronze",
    skill: "模拟实现",
    points: 10,
    title: "描述模拟状态",
    prompt: "用 2 到 4 句话说明：写 USACO Bronze 模拟题时，你会如何确定状态变量、更新顺序和边界条件？",
    keywords: ["状态", "顺序", "边界", "样例", "变量", "更新"],
    minLength: 35,
    rubric: "优秀答案应提到状态变量、按题意顺序更新、处理边界，并用样例或小数据验证。"
  },
  {
    id: "q4",
    type: "code",
    group: "bronze",
    level: "Bronze",
    skill: "枚举与实现",
    points: 14,
    title: "Bronze 代码题：最佳双牛组合",
    prompt: "给定 N 个正整数，选出两个不同位置的数，使它们的和最大。请写出完整函数或完整程序，并说明复杂度。",
    problem: {
      input: "第一行 N，第二行 N 个整数。2 <= N <= 1000。",
      output: "输出两个不同数的最大和。",
      sampleIn: "5\n3 9 1 7 9",
      sampleOut: "18"
    },
    checks: [
      { label: "读入 N 和数组", patterns: ["cin", "input", "Scanner", "read"], points: 3 },
      { label: "保证选择两个不同位置", patterns: ["i < j", "j = i + 1", "second", "两个", "different"], points: 3 },
      { label: "使用排序或一次扫描维护最大两个数", patterns: ["sort", "max1", "max2", "first", "second"], points: 5 },
      { label: "写出复杂度", patterns: ["O(N)", "O(N log N)", "复杂度"], points: 3 }
    ],
    rubric: "可以排序取最大两个，也可以一次扫描维护最大和次大。暴力 O(N^2) 在 N=1000 可接受，但不是最优表达。"
  },
  {
    id: "q5",
    type: "choice",
    group: "silver",
    level: "Silver",
    skill: "前缀和",
    points: 9,
    title: "区间和预处理",
    prompt: "多次询问数组 [l, r] 的和，最常用的预处理是？",
    options: ["前缀和", "DFS 树", "并查集", "快速幂"],
    answer: 0
  },
  {
    id: "q6",
    type: "short",
    group: "silver",
    level: "Silver",
    skill: "二分答案",
    points: 12,
    title: "二分答案的适用条件",
    prompt: "请解释什么叫“答案具有单调性”，并举一个适合二分答案的 USACO 风格场景。",
    keywords: ["单调", "可行", "不可行", "二分", "最大", "最小"],
    minLength: 45,
    rubric: "优秀答案应说明阈值变化导致可行性一边成立一边不成立，并能举最大最小化或最小最大化场景。"
  },
  {
    id: "q7",
    type: "code",
    group: "silver",
    level: "Silver",
    skill: "图论基础",
    points: 18,
    title: "Silver 代码题：统计连通块",
    prompt: "给定一个 N 个点 M 条边的无向图，输出连通块数量。请写出完整程序或核心代码。",
    problem: {
      input: "第一行 N M，接下来 M 行每行 a b。1 <= N <= 100000，0 <= M <= 200000。",
      output: "输出连通块个数。",
      sampleIn: "5 3\n1 2\n2 3\n4 5",
      sampleOut: "2"
    },
    checks: [
      { label: "使用邻接表或并查集", patterns: ["vector", "adj", "parent", "union", "find", "ArrayList"], points: 5 },
      { label: "遍历所有节点", patterns: ["for", "range", "1", "N"], points: 3 },
      { label: "DFS/BFS 或 union-find 逻辑完整", patterns: ["dfs", "bfs", "queue", "stack", "union", "find"], points: 6 },
      { label: "考虑大数据复杂度", patterns: ["O(N+M)", "O(M", "复杂度"], points: 4 }
    ],
    rubric: "N 和 M 很大，应使用邻接表 DFS/BFS 或并查集，不能用邻接矩阵。"
  },
  {
    id: "q8",
    type: "choice",
    group: "silver",
    level: "Silver",
    skill: "双指针",
    points: 9,
    title: "滑动窗口条件",
    prompt: "正数数组中寻找和不超过 K 的最长连续区间，常见做法是？",
    options: ["双指针维护窗口", "枚举所有排列", "Floyd 最短路", "高精度乘法"],
    answer: 0
  },
  {
    id: "q9",
    type: "short",
    group: "gold",
    level: "Gold",
    skill: "动态规划",
    points: 14,
    title: "DP 状态设计",
    prompt: "给你一个序列题，要求最优值。请说明你设计 DP 时会如何定义状态、转移、初值和答案位置。",
    keywords: ["状态", "转移", "初值", "边界", "答案", "复杂度"],
    minLength: 55,
    rubric: "优秀答案应清楚区分 dp[i] 的含义、从哪里转移、如何初始化以及最终答案在哪里。"
  },
  {
    id: "q10",
    type: "code",
    group: "gold",
    level: "Gold",
    skill: "数据结构进阶",
    points: 22,
    title: "Gold 代码题：动态区间和",
    prompt: "维护长度为 N 的数组，支持单点加值与区间求和。请写出树状数组或线段树核心代码。",
    problem: {
      input: "N Q，随后 N 个初始值。操作 add i x 表示 a[i]+=x，sum l r 表示查询区间和。",
      output: "对每个 sum 操作输出答案。N,Q <= 200000。",
      sampleIn: "5 4\n1 2 3 4 5\nsum 2 4\nadd 3 10\nsum 2 4\nsum 1 5",
      sampleOut: "9\n19\n25"
    },
    checks: [
      { label: "选择树状数组或线段树", patterns: ["bit", "fenwick", "tree", "segment", "lowbit"], points: 5 },
      { label: "实现 update/add", patterns: ["update", "add", "+=", "lowbit"], points: 5 },
      { label: "实现 prefix/query", patterns: ["query", "sum", "prefix", "lowbit"], points: 5 },
      { label: "区间和由两个前缀相减或线段树查询得到", patterns: ["r", "l - 1", "left", "right"], points: 4 },
      { label: "复杂度达到 O(log N)", patterns: ["O(log N)", "log"], points: 3 }
    ],
    rubric: "N,Q 到 200000，普通数组每次重算会超时。注意 long long。"
  },
  {
    id: "q11",
    type: "choice",
    group: "gold",
    level: "Gold",
    skill: "最短路",
    points: 10,
    title: "非负边权最短路",
    prompt: "带非负边权图的单源最短路，典型算法是？",
    options: ["KMP", "Dijkstra", "快速排序", "欧几里得算法"],
    answer: 1
  },
  {
    id: "q12",
    type: "code",
    group: "gold",
    level: "Gold",
    skill: "综合建模",
    points: 24,
    title: "Gold 代码题：最长可行前缀",
    prompt: "给定 N 个任务耗时和总时间 T，求最长连续区间，使区间总耗时不超过 T。所有耗时为正数。请写出 O(N) 或 O(N log N) 解法。",
    problem: {
      input: "第一行 N T，第二行 N 个正整数。N <= 200000。",
      output: "输出最长连续区间长度。",
      sampleIn: "7 8\n2 1 3 4 2 1 5",
      sampleOut: "4"
    },
    checks: [
      { label: "识别正数数组可用双指针", patterns: ["two", "双指针", "left", "right", "l", "r"], points: 5 },
      { label: "维护窗口和", patterns: ["sum", "cur", "window"], points: 5 },
      { label: "超出 T 时移动左端点", patterns: ["while", "> T", ">T", "left++", "l++"], points: 6 },
      { label: "更新最大长度", patterns: ["max", "ans", "right - left + 1", "r-l+1"], points: 5 },
      { label: "复杂度说明", patterns: ["O(N)", "复杂度"], points: 3 }
    ],
    rubric: "因为所有耗时为正数，窗口右端扩展后若超时，左端单调右移即可。"
  }
];

const questionEnglish = {
  q1: {
    level: "Foundation",
    skill: "Reading and Edge Cases",
    title: "Loop Boundaries and Input Count",
    prompt: "The problem gives N, followed by N lines of cow IDs. Which loop is least likely to read too many or too few values?",
    options: [
      "Read with for (int i = 0; i <= N; i++)",
      "Read with for (int i = 0; i < N; i++)",
      "Use while (N--), then read one extra value",
      "Loop from 1 to N - 1"
    ]
  },
  q2: {
    level: "Foundation",
    skill: "Complexity Analysis",
    title: "Constraints and Complexity",
    prompt: "If N can be as large as 100000, which time complexity is usually the best first choice?",
    options: ["O(N^2)", "O(N!)", "O(N log N)", "O(2^N)"]
  },
  q3: {
    skill: "Simulation Implementation",
    title: "Describing Simulation State",
    prompt: "In 2 to 4 sentences, explain how you choose state variables, update order, and edge cases when solving a USACO Bronze simulation problem.",
    rubric: "A strong answer mentions state variables, updating in problem order, handling edge cases, and checking with samples or small tests.",
    keywords: ["state", "order", "edge", "case", "sample", "variable", "update"]
  },
  q4: {
    skill: "Enumeration and Implementation",
    title: "Bronze Coding: Best Pair of Cows",
    prompt: "Given N positive integers, choose two values from different positions so their sum is maximized. Write a complete function or program and state the complexity.",
    problem: {
      input: "The first line contains N. The second line contains N integers. 2 <= N <= 1000.",
      output: "Print the maximum sum of two values from different positions.",
      sampleIn: "5\n3 9 1 7 9",
      sampleOut: "18"
    },
    checks: [
      "Reads N and the array",
      "Ensures two different positions are selected",
      "Uses sorting or one scan to track the two largest values",
      "States the time complexity"
    ],
    rubric: "You may sort and take the largest two values, or scan once to track the largest and second largest. Brute force O(N^2) works for N=1000, but it is not the best expression."
  },
  q5: {
    skill: "Prefix Sums",
    title: "Preprocessing Range Sums",
    prompt: "For many queries asking for the sum of array interval [l, r], what preprocessing is most commonly used?",
    options: ["Prefix sums", "DFS tree", "Disjoint set union", "Fast exponentiation"]
  },
  q6: {
    skill: "Binary Search on Answer",
    title: "When Binary Search on Answer Applies",
    prompt: "Explain what it means for an answer to be monotonic, and give one USACO-style scenario where binary search on the answer is appropriate.",
    rubric: "A strong answer explains that feasibility changes on one side of a threshold and gives a max-min or min-max type scenario.",
    keywords: ["monotonic", "feasible", "infeasible", "binary", "search", "maximum", "minimum"]
  },
  q7: {
    skill: "Graph Basics",
    title: "Silver Coding: Count Connected Components",
    prompt: "Given an undirected graph with N nodes and M edges, output the number of connected components. Write a complete program or the core code.",
    problem: {
      input: "The first line contains N M. The next M lines each contain a b. 1 <= N <= 100000, 0 <= M <= 200000.",
      output: "Print the number of connected components.",
      sampleIn: "5 3\n1 2\n2 3\n4 5",
      sampleOut: "2"
    },
    checks: [
      "Uses an adjacency list or disjoint set union",
      "Visits all nodes",
      "Implements DFS/BFS or union-find correctly",
      "Considers complexity for large inputs"
    ],
    rubric: "Because N and M are large, use an adjacency-list DFS/BFS or DSU. Do not use an adjacency matrix."
  },
  q8: {
    skill: "Two Pointers",
    title: "Sliding Window Condition",
    prompt: "In an array of positive numbers, you need the longest contiguous interval whose sum is at most K. What is the common approach?",
    options: ["Maintain a window with two pointers", "Enumerate all permutations", "Floyd shortest paths", "High-precision multiplication"]
  },
  q9: {
    skill: "Dynamic Programming",
    title: "Designing DP States",
    prompt: "For a sequence problem asking for an optimal value, explain how you define the DP state, transition, initial values, and final answer position.",
    rubric: "A strong answer clearly defines what dp[i] means, where transitions come from, how initialization works, and where the final answer is stored.",
    keywords: ["state", "transition", "initial", "base", "edge", "answer", "complexity"]
  },
  q10: {
    skill: "Advanced Data Structures",
    title: "Gold Coding: Dynamic Range Sum",
    prompt: "Maintain an array of length N with point additions and range-sum queries. Write the core code for a Fenwick tree or segment tree.",
    problem: {
      input: "N Q, followed by N initial values. Operation add i x means a[i] += x, and sum l r asks for the range sum.",
      output: "For each sum operation, print the answer. N,Q <= 200000.",
      sampleIn: "5 4\n1 2 3 4 5\nsum 2 4\nadd 3 10\nsum 2 4\nsum 1 5",
      sampleOut: "9\n19\n25"
    },
    checks: [
      "Chooses a Fenwick tree or segment tree",
      "Implements update/add",
      "Implements prefix/query",
      "Gets a range sum from two prefixes or a segment-tree query",
      "Reaches O(log N) complexity"
    ],
    rubric: "With N,Q up to 200000, recomputing sums with a plain array will time out. Remember long long."
  },
  q11: {
    skill: "Shortest Paths",
    title: "Shortest Paths with Nonnegative Edge Weights",
    prompt: "For single-source shortest paths in a graph with nonnegative edge weights, what is the classic algorithm?",
    options: ["KMP", "Dijkstra", "Quicksort", "Euclidean algorithm"]
  },
  q12: {
    skill: "Integrated Modeling",
    title: "Gold Coding: Longest Feasible Prefix",
    prompt: "Given N task durations and total time T, find the longest contiguous interval with total duration at most T. All durations are positive. Write an O(N) or O(N log N) solution.",
    problem: {
      input: "The first line contains N T. The second line contains N positive integers. N <= 200000.",
      output: "Print the length of the longest contiguous interval.",
      sampleIn: "7 8\n2 1 3 4 2 1 5",
      sampleOut: "4"
    },
    checks: [
      "Recognizes that positive arrays allow two pointers",
      "Maintains the window sum",
      "Moves the left endpoint when the sum exceeds T",
      "Updates the maximum length",
      "States the complexity"
    ],
    rubric: "Because all durations are positive, after expanding the right endpoint, if the window exceeds T, the left endpoint can move monotonically right."
  }
};

const uiText = {
  zh: {
    htmlLang: "zh-CN",
    pageTitle: "USACO 新学员能力评估",
    switchLanguage: "English",
    brandTagline: "分层诊断 · 单题作答 · 代码题复核",
    studentTitle: "学员信息",
    studentNameLabel: "姓名",
    studentNamePlaceholder: "例如：Alex",
    studentLanguageLabel: "当前编程语言",
    undecided: "未确定",
    studentGoalLabel: "目标",
    goals: {
      "bronze-starter": "Bronze 入门",
      "bronze-to-silver": "Bronze 冲 Silver",
      "silver-to-gold": "Silver 冲 Gold",
      "gold-intensive": "Gold 强化"
    },
    progressTitle: "测评进度",
    timeLeftLabel: "剩余时间",
    start: "开始测评",
    inProgress: "测评进行中",
    submitted: "测评已提交",
    reset: "重新开始",
    mapTitle: "题目导航",
    introEyebrow: "Assessment Flow",
    introTitle: "从基础读题到代码实现的完整入班测评",
    introCopy: "测评共 12 题，包含概念题、简答题和代码题。系统会自动初评客观题与代码结构，并在报告中标出需要老师人工复核的高阶题。",
    prev: "上一题",
    save: "保存答案",
    next: "下一题",
    submit: "提交测评",
    print: "打印报告",
    reportEyebrow: "Assessment Report",
    reportTitle: "测评报告",
    finalScoreLabel: "综合分",
    recommendedLevelLabel: "推荐班型",
    pending: "待评估",
    completionRateLabel: "完成度",
    skillBarsTitle: "能力雷达",
    diagnosisTitle: "诊断结论",
    codeReviewTitle: "代码题复核清单",
    studyPlanTitle: "学习路径建议",
    completed: "已完成",
    points: "分",
    input: "输入",
    output: "输出",
    sampleInput: "样例输入",
    sampleOutput: "样例输出",
    shortPlaceholder: "写下你的思路。请尽量说明为什么这样做，而不只是给结论。",
    codePlaceholder: "在这里写代码。可以写完整程序，也可以写核心函数，但要包含复杂度说明。",
    autoFocus: "自动初评关注点",
    savedChoice: "已保存。提交后会计入诊断结果。",
    savedScore: "已保存，自动初评",
    newStudent: "新学员",
    reportOf: (name, timeExpired) => `${name} 的测评报告${timeExpired ? "（时间到）" : ""}`,
    noAnswer: "未作答",
    types: {
      choice: "选择题",
      short: "简答题",
      code: "代码题"
    },
    levels: {
      prep: "Bronze 预备班",
      bronze: "Bronze 冲刺班",
      silver: "Silver 提升班",
      gold: "Gold 强化班"
    }
  },
  en: {
    htmlLang: "en",
    pageTitle: "USACO New Student Assessment",
    switchLanguage: "中文",
    brandTagline: "Level diagnosis · One question at a time · Code review",
    studentTitle: "Student Info",
    studentNameLabel: "Name",
    studentNamePlaceholder: "Example: Alex",
    studentLanguageLabel: "Current Programming Language",
    undecided: "Not sure",
    studentGoalLabel: "Goal",
    goals: {
      "bronze-starter": "Bronze Starter",
      "bronze-to-silver": "Bronze to Silver",
      "silver-to-gold": "Silver to Gold",
      "gold-intensive": "Gold Strengthening"
    },
    progressTitle: "Progress",
    timeLeftLabel: "Time Left",
    start: "Start Assessment",
    inProgress: "In Progress",
    submitted: "Submitted",
    reset: "Restart",
    mapTitle: "Questions",
    introEyebrow: "Assessment Flow",
    introTitle: "Complete placement assessment from reading basics to code implementation",
    introCopy: "The assessment has 12 questions, including concepts, short answers, and coding tasks. The system gives an initial score for objective answers and code structure, then flags advanced answers for teacher review.",
    prev: "Previous",
    save: "Save Answer",
    next: "Next",
    submit: "Submit Assessment",
    print: "Print Report",
    reportEyebrow: "Assessment Report",
    reportTitle: "Assessment Report",
    finalScoreLabel: "Overall Score",
    recommendedLevelLabel: "Recommended Class",
    pending: "Pending",
    completionRateLabel: "Completion",
    skillBarsTitle: "Skills",
    diagnosisTitle: "Diagnosis",
    codeReviewTitle: "Code Review Checklist",
    studyPlanTitle: "Study Plan",
    completed: "completed",
    points: "pts",
    input: "Input",
    output: "Output",
    sampleInput: "Sample Input",
    sampleOutput: "Sample Output",
    shortPlaceholder: "Explain your reasoning. Try to include why, not only the conclusion.",
    codePlaceholder: "Write code here. A full program or core function is fine, but include complexity.",
    autoFocus: "Auto-scoring Focus",
    savedChoice: "Saved. It will be included after submission.",
    savedScore: "Saved. Initial score:",
    newStudent: "New Student",
    reportOf: (name, timeExpired) => `${name}'s Assessment Report${timeExpired ? " (Time Expired)" : ""}`,
    noAnswer: "No answer",
    types: {
      choice: "Multiple Choice",
      short: "Short Answer",
      code: "Coding"
    },
    levels: {
      prep: "Bronze Prep",
      bronze: "Bronze Accelerator",
      silver: "Silver Builder",
      gold: "Gold Intensive"
    }
  }
};

const TOTAL_SECONDS = 60 * 60;

const state = {
  language: "en",
  started: false,
  submitted: false,
  timeExpired: false,
  currentIndex: 0,
  answers: {},
  secondsLeft: TOTAL_SECONDS,
  timerId: null
};

const els = {
  intro: document.querySelector("#intro"),
  questionStage: document.querySelector("#questionStage"),
  questionMap: document.querySelector("#questionMap"),
  timeLeft: document.querySelector("#timeLeft"),
  progressFill: document.querySelector("#progressFill"),
  progressText: document.querySelector("#progressText"),
  startBtn: document.querySelector("#startBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  questionKicker: document.querySelector("#questionKicker"),
  questionTitle: document.querySelector("#questionTitle"),
  questionType: document.querySelector("#questionType"),
  questionBadge: document.querySelector("#questionBadge"),
  questionPoints: document.querySelector("#questionPoints"),
  questionPrompt: document.querySelector("#questionPrompt"),
  problemBlock: document.querySelector("#problemBlock"),
  answerArea: document.querySelector("#answerArea"),
  feedback: document.querySelector("#feedback"),
  prevBtn: document.querySelector("#prevBtn"),
  saveBtn: document.querySelector("#saveBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  submitBtn: document.querySelector("#submitBtn"),
  report: document.querySelector("#report"),
  studentName: document.querySelector("#studentName"),
  studentLanguage: document.querySelector("#studentLanguage"),
  studentGoal: document.querySelector("#studentGoal"),
  languageToggle: document.querySelector("#languageToggle"),
  brandTagline: document.querySelector("#brandTagline"),
  studentTitle: document.querySelector("#student-title"),
  studentNameLabel: document.querySelector("#studentNameLabel"),
  studentLanguageLabel: document.querySelector("#studentLanguageLabel"),
  studentGoalLabel: document.querySelector("#studentGoalLabel"),
  progressTitle: document.querySelector("#progress-title"),
  timeLeftLabel: document.querySelector("#timeLeftLabel"),
  mapTitle: document.querySelector("#map-title"),
  introEyebrow: document.querySelector("#introEyebrow"),
  introTitle: document.querySelector("#introTitle"),
  introCopy: document.querySelector("#introCopy"),
  reportTitle: document.querySelector("#reportTitle"),
  reportEyebrow: document.querySelector(".report-header .eyebrow"),
  finalScoreLabel: document.querySelector("#finalScoreLabel"),
  finalScore: document.querySelector("#finalScore"),
  recommendedLevelLabel: document.querySelector("#recommendedLevelLabel"),
  recommendedLevel: document.querySelector("#recommendedLevel"),
  completionRateLabel: document.querySelector("#completionRateLabel"),
  completionRate: document.querySelector("#completionRate"),
  skillBarsTitle: document.querySelector("#skillBarsTitle"),
  skillBars: document.querySelector("#skillBars"),
  diagnosisTitle: document.querySelector("#diagnosisTitle"),
  diagnosisList: document.querySelector("#diagnosisList"),
  codeReviewTitle: document.querySelector("#codeReviewTitle"),
  codeReviewList: document.querySelector("#codeReviewList"),
  studyPlanTitle: document.querySelector("#studyPlanTitle"),
  studyPlan: document.querySelector("#studyPlan"),
  printBtn: document.querySelector("#printBtn")
};

function startAssessment() {
  if (state.started) return;
  state.started = true;
  state.submitted = false;
  els.intro.hidden = true;
  els.report.hidden = true;
  els.questionStage.hidden = false;
  els.startBtn.textContent = t("inProgress");
  els.startBtn.disabled = true;
  state.timerId = window.setInterval(tickTimer, 1000);
  tickTimer();
  renderCurrentQuestion();
  updateProgress();
}

function resetAssessment() {
  window.clearInterval(state.timerId);
  state.started = false;
  state.submitted = false;
  state.timeExpired = false;
  state.currentIndex = 0;
  state.answers = {};
  state.secondsLeft = TOTAL_SECONDS;
  state.timerId = null;
  els.startBtn.textContent = t("start");
  els.startBtn.disabled = false;
  els.intro.hidden = false;
  els.questionStage.hidden = true;
  els.report.hidden = true;
  els.feedback.hidden = true;
  updateTimerText();
  updateProgress();
  renderQuestionMap();
}

function tickTimer() {
  updateTimerText();
  if (state.secondsLeft <= 0) {
    submitAssessment(true);
    return;
  }
  state.secondsLeft -= 1;
}

function updateTimerText() {
  const minutes = Math.floor(state.secondsLeft / 60);
  const seconds = state.secondsLeft % 60;
  els.timeLeft.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function renderCurrentQuestion() {
  const question = questions[state.currentIndex];
  const view = getQuestionView(question);
  els.questionKicker.textContent = `Question ${state.currentIndex + 1} / ${questions.length}`;
  els.questionTitle.textContent = view.title;
  els.questionType.textContent = getTypeLabel(question.type);
  els.questionBadge.textContent = `${view.level} · ${view.skill}`;
  els.questionPoints.textContent = `${question.points} ${t("points")}`;
  els.questionPrompt.textContent = view.prompt;
  els.answerArea.innerHTML = "";
  els.feedback.hidden = true;

  renderProblemBlock(question);
  if (question.type === "choice") renderChoice(question);
  if (question.type === "short") renderShortAnswer(question);
  if (question.type === "code") renderCodeAnswer(question);

  els.prevBtn.disabled = state.currentIndex === 0;
  els.nextBtn.disabled = state.currentIndex === questions.length - 1;
  els.submitBtn.hidden = state.currentIndex !== questions.length - 1;
  renderQuestionMap();
}

function renderProblemBlock(question) {
  if (!question.problem) {
    els.problemBlock.hidden = true;
    els.problemBlock.innerHTML = "";
    return;
  }

  const problem = getQuestionView(question).problem || question.problem;
  els.problemBlock.hidden = false;
  els.problemBlock.innerHTML = `
    <dl>
      <div><dt>${t("input")}</dt><dd>${escapeHtml(problem.input)}</dd></div>
      <div><dt>${t("output")}</dt><dd>${escapeHtml(problem.output)}</dd></div>
    </dl>
    <div class="samples">
      <div><span>${t("sampleInput")}</span><pre>${escapeHtml(problem.sampleIn)}</pre></div>
      <div><span>${t("sampleOutput")}</span><pre>${escapeHtml(problem.sampleOut)}</pre></div>
    </div>
  `;
}

function renderChoice(question) {
  const options = document.createElement("div");
  options.className = "options";
  question.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.className = "option";
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = question.id;
    radio.value = String(index);
    radio.checked = state.answers[question.id] === index;
    radio.addEventListener("change", () => {
      state.answers[question.id] = index;
      showSavedFeedback(question);
      updateProgress();
    });
    const text = document.createElement("span");
    text.textContent = getQuestionView(question).options?.[index] || option;
    label.append(radio, text);
    options.append(label);
  });
  els.answerArea.append(options);
}

function renderShortAnswer(question) {
  const wrapper = document.createElement("div");
  wrapper.className = "written-answer";
  wrapper.innerHTML = `
    <textarea id="currentAnswer" rows="8" placeholder="${escapeHtml(t("shortPlaceholder"))}">${escapeHtml(state.answers[question.id] || "")}</textarea>
    <p>${escapeHtml(getQuestionView(question).rubric || question.rubric)}</p>
  `;
  els.answerArea.append(wrapper);
}

function renderCodeAnswer(question) {
  const wrapper = document.createElement("div");
  wrapper.className = "code-answer";
  wrapper.innerHTML = `
    <textarea id="currentAnswer" rows="18" spellcheck="false" placeholder="${escapeHtml(t("codePlaceholder"))}">${escapeHtml(state.answers[question.id] || "")}</textarea>
    <div class="rubric">
      <strong>${t("autoFocus")}</strong>
      <ul>${question.checks.map((check, index) => `<li>${escapeHtml(getCheckLabel(question, check, index))}</li>`).join("")}</ul>
      <p>${escapeHtml(getQuestionView(question).rubric || question.rubric)}</p>
    </div>
  `;
  els.answerArea.append(wrapper);
}

function saveCurrentAnswer() {
  const question = questions[state.currentIndex];
  persistCurrentAnswer(question);
  showSavedFeedback(question);
  updateProgress();
}

function persistCurrentAnswer(question = questions[state.currentIndex]) {
  if (question.type !== "choice") {
    const input = document.querySelector("#currentAnswer");
    state.answers[question.id] = input ? input.value.trim() : "";
  }
}

function showSavedFeedback(question) {
  const result = scoreQuestion(question);
  els.feedback.hidden = false;
  els.feedback.className = `feedback ${result.earned >= question.points * 0.7 ? "good" : "warn"}`;
  if (question.type === "choice") {
    els.feedback.textContent = t("savedChoice");
    return;
  }
  els.feedback.textContent = `${t("savedScore")} ${result.earned} / ${question.points} ${t("points")}. ${getResultNote(result)}`;
}

function goToQuestion(index) {
  saveCurrentAnswer();
  state.currentIndex = Math.max(0, Math.min(index, questions.length - 1));
  renderCurrentQuestion();
}

function updateProgress() {
  const answered = questions.filter((question) => hasAnswer(question)).length;
  const ratio = answered / questions.length;
  els.progressFill.style.width = `${Math.round(ratio * 100)}%`;
  els.progressText.textContent = `${answered} / ${questions.length} ${t("completed")}`;

  renderQuestionMap();
}

function renderQuestionMap() {
  els.questionMap.innerHTML = "";
  questions.forEach((question, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = index + 1;
    button.className = "map-dot";
    button.dataset.level = question.group;
    button.classList.toggle("active", index === state.currentIndex && state.started);
    button.classList.toggle("done", hasAnswer(question));
    const view = getQuestionView(question);
    button.title = `${view.level} · ${getTypeLabel(question.type)} · ${view.skill}`;
    button.addEventListener("click", () => {
      if (!state.started || state.submitted) return;
      goToQuestion(index);
    });
    els.questionMap.append(button);
  });
}

function hasAnswer(question) {
  const value = state.answers[question.id];
  if (question.type === "choice") return Number.isInteger(value);
  return typeof value === "string" && value.trim().length > 0;
}

function scoreQuestion(question) {
  const value = state.answers[question.id];
  if (question.type === "choice") {
    return {
      earned: value === question.answer ? question.points : 0,
      possible: question.points,
      needsReview: false,
      note: value === question.answer ? "客观题正确。" : "客观题错误。",
      noteEn: value === question.answer ? "The objective question is correct." : "The objective question is incorrect."
    };
  }

  if (question.type === "short") {
    const text = normalizeText(value || "");
    const keywords = [...question.keywords, ...(questionEnglish[question.id]?.keywords || [])];
    const hits = keywords.filter((keyword) => text.includes(keyword.toLowerCase())).length;
    const lengthScore = text.length >= question.minLength ? 0.35 : Math.min(0.35, text.length / question.minLength * 0.35);
    const keywordScore = Math.min(0.65, hits / Math.max(1, question.keywords.length - 1) * 0.65);
    const earned = Math.round(question.points * Math.min(1, lengthScore + keywordScore));
    return {
      earned,
      possible: question.points,
      needsReview: true,
      note: `命中 ${hits} 个关键点，建议老师复核表达质量。`,
      noteEn: `${hits} key points detected. Teacher review is recommended for explanation quality.`
    };
  }

  const text = normalizeText(value || "");
  let earned = 0;
  const matched = [];
  question.checks.forEach((check) => {
    const ok = check.patterns.some((pattern) => text.includes(pattern.toLowerCase()));
    if (ok) {
      earned += check.points;
      matched.push(check.label);
    }
  });
  return {
    earned,
    possible: question.points,
    needsReview: true,
    note: matched.length ? `命中：${matched.join("、")}。` : "未命中关键实现线索。",
    noteEn: matched.length ? `Matched: ${matched.map((label) => {
      const index = question.checks.findIndex((check) => check.label === label);
      return questionEnglish[question.id]?.checks?.[index] || label;
    }).join(", ")}.` : "No key implementation clues were detected.",
    matched
  };
}

function calculateReport() {
  let earned = 0;
  let possible = 0;
  const skillMap = new Map();
  const levelMap = new Map();
  const typeMap = new Map();
  const reviewItems = [];

  questions.forEach((question) => {
    const result = scoreQuestion(question);
    possible += result.possible;
    earned += result.earned;
    addBucket(skillMap, question.skill, result.earned, result.possible);
    addBucket(levelMap, question.group, result.earned, result.possible);
    addBucket(typeMap, question.type, result.earned, result.possible);
    if (question.type === "code") {
      reviewItems.push({ question, result, answer: state.answers[question.id] || "" });
    }
  });

  const score = Math.round((earned / possible) * 100);
  const levelScores = toPercentMap(levelMap);
  const typeScores = toPercentMap(typeMap);

  let levelKey = "prep";
  if (score >= 78 && levelScores.gold >= 0.58 && typeScores.code >= 0.55) {
    levelKey = "gold";
  } else if (score >= 62 && levelScores.silver >= 0.58 && typeScores.code >= 0.4) {
    levelKey = "silver";
  } else if (score >= 42 && levelScores.bronze >= 0.5) {
    levelKey = "bronze";
  }

  return {
    score,
    levelKey,
    levelScores,
    typeScores,
    reviewItems,
    completed: questions.filter((question) => hasAnswer(question)).length,
    skills: Array.from(skillMap.entries()).map(([skill, value]) => ({
      skill,
      percent: value.possible ? Math.round((value.earned / value.possible) * 100) : 0
    }))
  };
}

function addBucket(map, key, earned, possible) {
  if (!map.has(key)) {
    map.set(key, { earned: 0, possible: 0 });
  }
  const bucket = map.get(key);
  bucket.earned += earned;
  bucket.possible += possible;
}

function toPercentMap(map) {
  return Object.fromEntries(
    Array.from(map.entries()).map(([key, value]) => [key, value.possible ? value.earned / value.possible : 0])
  );
}

function submitAssessment(timeExpired = false) {
  if (state.submitted) return;
  saveCurrentAnswer();
  state.started = false;
  state.submitted = true;
  state.timeExpired = timeExpired;
  window.clearInterval(state.timerId);
  state.timerId = null;
  els.startBtn.textContent = t("submitted");
  els.questionStage.hidden = true;
  els.intro.hidden = true;
  renderReport(timeExpired);
  updateProgress();
}

function renderReport(timeExpired = false) {
  const report = calculateReport();
  const name = els.studentName.value.trim() || t("newStudent");
  els.report.hidden = false;
  els.reportTitle.textContent = t("reportOf")(name, timeExpired);
  els.finalScore.textContent = String(report.score);
  els.recommendedLevel.textContent = getLevelLabel(report.levelKey);
  els.completionRate.textContent = `${Math.round((report.completed / questions.length) * 100)}%`;

  els.skillBars.innerHTML = "";
  report.skills
    .sort((a, b) => a.percent - b.percent)
    .forEach((item) => {
      const row = document.createElement("div");
      row.className = "skill-row";
      row.innerHTML = `
        <div class="skill-label"><span>${escapeHtml(getSkillLabel(item.skill))}</span><span>${item.percent}%</span></div>
        <div class="bar"><div style="width:${item.percent}%"></div></div>
      `;
      els.skillBars.append(row);
    });

  renderDiagnosis(report);
  renderCodeReview(report.reviewItems);
  renderStudyPlan(report);
}

function renderDiagnosis(report) {
  els.diagnosisList.innerHTML = "";
  const weak = report.skills.filter((item) => item.percent < 55).slice(0, 4);
  const strong = report.skills.filter((item) => item.percent >= 75).slice(0, 3);
  const items = [];

  if (state.language === "zh") {
    items.push(`推荐从「${getLevelLabel(report.levelKey)}」开始；当前目标为「${getGoalLabel(els.studentGoal.value)}」，主要语言为 ${getLanguageLabel(els.studentLanguage.value)}。`);
    items.push(`代码题自动初评得分率约为 ${Math.round((report.typeScores.code || 0) * 100)}%，该项最能反映真实上机能力。`);
    if (strong.length) items.push(`优势能力：${formatSkillList(strong)}。`);
    if (weak.length) items.push(`优先补强：${formatSkillList(weak)}。`);
    if ((report.typeScores.short || 0) < 0.55) items.push("算法表达偏弱，建议要求学员每题先写思路、复杂度和边界样例。");
    if ((report.typeScores.code || 0) < 0.45) items.push("代码实现稳定性不足，建议暂缓高阶专题，先补输入输出、数据结构和调试流程。");
  } else {
    items.push(`Recommended starting point: ${getLevelLabel(report.levelKey)}. Current goal: ${getGoalLabel(els.studentGoal.value)}. Main language: ${getLanguageLabel(els.studentLanguage.value)}.`);
    items.push(`Coding-task initial score is about ${Math.round((report.typeScores.code || 0) * 100)}%, which best reflects practical implementation ability.`);
    if (strong.length) items.push(`Strengths: ${formatSkillList(strong)}.`);
    if (weak.length) items.push(`Priority skills to improve: ${formatSkillList(weak)}.`);
    if ((report.typeScores.short || 0) < 0.55) items.push("Algorithm explanation is relatively weak. Ask the student to write the idea, complexity, and edge-case samples before coding.");
    if ((report.typeScores.code || 0) < 0.45) items.push("Code implementation is not yet stable. Delay advanced topics and first strengthen input/output, data structures, and debugging workflow.");
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    els.diagnosisList.append(li);
  });
}

function renderCodeReview(items) {
  els.codeReviewList.innerHTML = "";
  items.forEach(({ question, result, answer }) => {
    const article = document.createElement("article");
    article.className = "review-item";
    const preview = answer.trim() ? answer.trim().slice(0, 420) : t("noAnswer");
    article.innerHTML = `
      <div>
        <strong>${escapeHtml(getQuestionView(question).title)}</strong>
        <span>${result.earned} / ${question.points} ${t("points")} · ${escapeHtml(getQuestionView(question).level)}</span>
      </div>
      <p>${escapeHtml(getResultNote(result))}</p>
      <pre>${escapeHtml(preview)}</pre>
    `;
    els.codeReviewList.append(article);
  });
}

function renderStudyPlan(report) {
  els.studyPlan.innerHTML = "";
  const weakSkills = report.skills.filter((item) => item.percent < 65).map((item) => item.skill);
  const plan = [];

  if (report.levelKey === "prep") {
    plan.push(localizedText("第 1 周：变量、循环、数组、字符串与输入输出，每次课后完成 3 道短代码题。", "Week 1: variables, loops, arrays, strings, and input/output. Complete 3 short coding tasks after each class."));
    plan.push(localizedText("第 2 周：Bronze 模拟与枚举，训练手写状态表和边界样例。", "Week 2: Bronze simulation and enumeration. Practice writing state tables and edge-case samples."));
  } else if (report.levelKey === "bronze") {
    plan.push(localizedText("第 1 周：排序、频次统计、双重枚举与模拟题混合训练。", "Week 1: mixed practice on sorting, frequency counting, double loops, and simulation."));
    plan.push(localizedText("第 2 周：加入前缀和、简单贪心和短代码限时练习。", "Week 2: add prefix sums, simple greedy, and timed short coding drills."));
  } else if (report.levelKey === "silver") {
    plan.push(localizedText("第 1 周：二分答案、前缀和、双指针，每个专题完成 5 到 8 道题。", "Week 1: binary search on answer, prefix sums, and two pointers. Finish 5 to 8 problems per topic."));
    plan.push(localizedText("第 2 周：DFS/BFS、并查集、Dijkstra 入门，并安排 90 分钟限时套题。", "Week 2: DFS/BFS, DSU, and introductory Dijkstra, plus a 90-minute timed set."));
  } else {
    plan.push(localizedText("第 1 周：树状数组、线段树、树形 DP 和最短路变形题。", "Week 1: Fenwick trees, segment trees, tree DP, and shortest-path variations."));
    plan.push(localizedText("第 2 周：Gold 套题复盘，要求写出状态定义、复杂度证明和错因总结。", "Week 2: review Gold sets with state definitions, complexity proofs, and error summaries."));
  }

  if (weakSkills.length) {
    const skillList = weakSkills.slice(0, 4).map(getSkillLabel).join(state.language === "zh" ? "、" : ", ");
    plan.push(localizedText(`重点回炉「${skillList}」，直到单项得分率超过 70%。`, `Rebuild priority skills: ${skillList} until each exceeds 70%.`));
  }
  plan.push(localizedText("代码题建议由老师复核一次，尤其检查边界、复杂度、变量初始化和样例外小数据。", "Have a teacher review coding answers, especially edge cases, complexity, variable initialization, and tests beyond the sample."));

  plan.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    els.studyPlan.append(li);
  });
}

function getTypeLabel(type) {
  return t("types")[type];
}

function t(key) {
  return uiText[state.language][key];
}

function localizedText(zh, en) {
  return state.language === "zh" ? zh : en;
}

function getQuestionView(question) {
  if (state.language === "zh") return question;
  return {
    ...question,
    ...(questionEnglish[question.id] || {}),
    problem: questionEnglish[question.id]?.problem || question.problem
  };
}

function getSkillEnglish(skill) {
  const entry = Object.values(questionEnglish).find((item) => {
    const question = questions.find((candidate) => candidate.skill === skill && questionEnglish[candidate.id] === item);
    return Boolean(question);
  });
  return entry?.skill || skill;
}

function getSkillLabel(skill) {
  return state.language === "zh" ? skill : getSkillEnglish(skill);
}

function getCheckLabel(question, check, index) {
  return state.language === "zh" ? check.label : questionEnglish[question.id]?.checks?.[index] || check.label;
}

function getResultNote(result) {
  return state.language === "zh" ? result.note : result.noteEn;
}

function getLevelLabel(levelKey) {
  return t("levels")[levelKey];
}

function getGoalLabel(value) {
  return t("goals")[value] || value;
}

function getLanguageLabel(value) {
  if (value === "undecided") return t("undecided");
  return value;
}

function formatSkillList(items) {
  return items.map((item) => getSkillLabel(item.skill)).join(state.language === "zh" ? "、" : ", ");
}

function updateGoalOptions() {
  Array.from(els.studentGoal.options).forEach((option) => {
    option.textContent = getGoalLabel(option.value);
  });
  Array.from(els.studentLanguage.options).forEach((option) => {
    if (option.value === "undecided") option.textContent = t("undecided");
  });
}

function updateStaticText() {
  const ui = uiText[state.language];
  document.documentElement.lang = ui.htmlLang;
  document.title = ui.pageTitle;
  els.languageToggle.textContent = ui.switchLanguage;
  els.brandTagline.textContent = ui.brandTagline;
  els.studentTitle.textContent = ui.studentTitle;
  els.studentNameLabel.textContent = ui.studentNameLabel;
  els.studentName.placeholder = ui.studentNamePlaceholder;
  els.studentLanguageLabel.textContent = ui.studentLanguageLabel;
  els.studentGoalLabel.textContent = ui.studentGoalLabel;
  els.progressTitle.textContent = ui.progressTitle;
  els.timeLeftLabel.textContent = ui.timeLeftLabel;
  els.resetBtn.textContent = ui.reset;
  els.mapTitle.textContent = ui.mapTitle;
  els.introEyebrow.textContent = ui.introEyebrow;
  els.introTitle.textContent = ui.introTitle;
  els.introCopy.textContent = ui.introCopy;
  els.prevBtn.textContent = ui.prev;
  els.saveBtn.textContent = ui.save;
  els.nextBtn.textContent = ui.next;
  els.submitBtn.textContent = ui.submit;
  els.printBtn.textContent = ui.print;
  els.reportEyebrow.textContent = ui.reportEyebrow;
  els.finalScoreLabel.textContent = ui.finalScoreLabel;
  els.recommendedLevelLabel.textContent = ui.recommendedLevelLabel;
  els.completionRateLabel.textContent = ui.completionRateLabel;
  els.skillBarsTitle.textContent = ui.skillBarsTitle;
  els.diagnosisTitle.textContent = ui.diagnosisTitle;
  els.codeReviewTitle.textContent = ui.codeReviewTitle;
  els.studyPlanTitle.textContent = ui.studyPlanTitle;
  if (!state.started && !state.submitted) {
    els.startBtn.textContent = ui.start;
    els.reportTitle.textContent = ui.reportTitle;
    els.recommendedLevel.textContent = ui.pending;
  } else if (state.started) {
    els.startBtn.textContent = ui.inProgress;
  } else {
    els.startBtn.textContent = ui.submitted;
  }
  updateGoalOptions();
  updateProgress();
  if (state.started) renderCurrentQuestion();
  if (state.submitted) renderReport(state.timeExpired);
}

function toggleLanguage() {
  if (state.started) persistCurrentAnswer();
  state.language = state.language === "zh" ? "en" : "zh";
  updateStaticText();
}

function normalizeText(value) {
  return String(value || "").toLowerCase().replace(/\s+/g, " ");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

els.startBtn.addEventListener("click", startAssessment);
els.resetBtn.addEventListener("click", resetAssessment);
els.saveBtn.addEventListener("click", saveCurrentAnswer);
els.prevBtn.addEventListener("click", () => goToQuestion(state.currentIndex - 1));
els.nextBtn.addEventListener("click", () => goToQuestion(state.currentIndex + 1));
els.submitBtn.addEventListener("click", () => submitAssessment(false));
els.printBtn.addEventListener("click", () => window.print());
els.languageToggle.addEventListener("click", toggleLanguage);

updateStaticText();
updateTimerText();
