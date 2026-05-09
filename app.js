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

const TOTAL_SECONDS = 60 * 60;

const state = {
  started: false,
  submitted: false,
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
  introStartBtn: document.querySelector("#introStartBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  levelPreview: document.querySelector("#levelPreview"),
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
  reportTitle: document.querySelector("#reportTitle"),
  finalScore: document.querySelector("#finalScore"),
  recommendedLevel: document.querySelector("#recommendedLevel"),
  completionRate: document.querySelector("#completionRate"),
  skillBars: document.querySelector("#skillBars"),
  diagnosisList: document.querySelector("#diagnosisList"),
  codeReviewList: document.querySelector("#codeReviewList"),
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
  els.startBtn.textContent = "测评进行中 / In Progress";
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
  state.currentIndex = 0;
  state.answers = {};
  state.secondsLeft = TOTAL_SECONDS;
  state.timerId = null;
  els.startBtn.textContent = "开始测评 / Start";
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
  const english = questionEnglish[question.id] || {};
  els.questionKicker.textContent = `Question ${state.currentIndex + 1} / ${questions.length}`;
  els.questionTitle.textContent = bilingual(question.title, english.title);
  els.questionType.textContent = getTypeLabel(question.type);
  els.questionBadge.textContent = `${bilingual(question.level, english.level)} · ${bilingual(question.skill, english.skill)}`;
  els.questionPoints.textContent = `${question.points} 分 / pts`;
  els.questionPrompt.textContent = bilingual(question.prompt, english.prompt);
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

  const problemEn = questionEnglish[question.id]?.problem || {};
  els.problemBlock.hidden = false;
  els.problemBlock.innerHTML = `
    <dl>
      <div><dt>输入 / Input</dt><dd>${escapeHtml(bilingual(question.problem.input, problemEn.input))}</dd></div>
      <div><dt>输出 / Output</dt><dd>${escapeHtml(bilingual(question.problem.output, problemEn.output))}</dd></div>
    </dl>
    <div class="samples">
      <div><span>样例输入 / Sample Input</span><pre>${escapeHtml(question.problem.sampleIn)}</pre></div>
      <div><span>样例输出 / Sample Output</span><pre>${escapeHtml(question.problem.sampleOut)}</pre></div>
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
    text.textContent = bilingual(option, questionEnglish[question.id]?.options?.[index]);
    label.append(radio, text);
    options.append(label);
  });
  els.answerArea.append(options);
}

function renderShortAnswer(question) {
  const wrapper = document.createElement("div");
  wrapper.className = "written-answer";
  wrapper.innerHTML = `
    <textarea id="currentAnswer" rows="8" placeholder="写下你的思路 / Explain your reasoning.">${escapeHtml(state.answers[question.id] || "")}</textarea>
    <p>${escapeHtml(bilingual(question.rubric, questionEnglish[question.id]?.rubric))}</p>
  `;
  els.answerArea.append(wrapper);
}

function renderCodeAnswer(question) {
  const wrapper = document.createElement("div");
  wrapper.className = "code-answer";
  wrapper.innerHTML = `
    <textarea id="currentAnswer" rows="18" spellcheck="false" placeholder="在这里写代码 / Write code here. Include complexity.">${escapeHtml(state.answers[question.id] || "")}</textarea>
    <div class="rubric">
      <strong>自动初评关注点 / Auto-scoring Focus</strong>
      <ul>${question.checks.map((check, index) => `<li>${escapeHtml(bilingual(check.label, questionEnglish[question.id]?.checks?.[index]))}</li>`).join("")}</ul>
      <p>${escapeHtml(bilingual(question.rubric, questionEnglish[question.id]?.rubric))}</p>
    </div>
  `;
  els.answerArea.append(wrapper);
}

function saveCurrentAnswer() {
  const question = questions[state.currentIndex];
  if (question.type !== "choice") {
    const input = document.querySelector("#currentAnswer");
    state.answers[question.id] = input ? input.value.trim() : "";
  }
  showSavedFeedback(question);
  updateProgress();
}

function showSavedFeedback(question) {
  const result = scoreQuestion(question);
  els.feedback.hidden = false;
  els.feedback.className = `feedback ${result.earned >= question.points * 0.7 ? "good" : "warn"}`;
  if (question.type === "choice") {
    els.feedback.textContent = "已保存。提交后会计入诊断结果。 / Saved. It will be included after submission.";
    return;
  }
  els.feedback.textContent = `已保存，自动初评 ${result.earned} / ${question.points} 分。${result.note} / Saved. Initial score: ${result.earned} / ${question.points} pts. ${result.noteEn}`;
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
  els.progressText.textContent = `${answered} / ${questions.length} 已完成 / completed`;

  if (!state.started && !state.submitted) {
    els.levelPreview.textContent = "等待开始 / Waiting";
  } else {
    const report = calculateReport();
    els.levelPreview.textContent = `当前估计 / Estimate: ${report.level}`;
  }
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
    const english = questionEnglish[question.id] || {};
    button.title = `${bilingual(question.level, english.level)} · ${getTypeLabel(question.type)} · ${bilingual(question.skill, english.skill)}`;
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

  let level = "Bronze 预备班 / Bronze Prep";
  if (score >= 78 && levelScores.gold >= 0.58 && typeScores.code >= 0.55) {
    level = "Gold 强化班 / Gold Intensive";
  } else if (score >= 62 && levelScores.silver >= 0.58 && typeScores.code >= 0.4) {
    level = "Silver 提升班 / Silver Builder";
  } else if (score >= 42 && levelScores.bronze >= 0.5) {
    level = "Bronze 冲刺班 / Bronze Accelerator";
  }

  return {
    score,
    level,
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
  window.clearInterval(state.timerId);
  state.timerId = null;
  els.startBtn.textContent = "测评已提交 / Submitted";
  els.questionStage.hidden = true;
  els.intro.hidden = true;
  renderReport(timeExpired);
  updateProgress();
}

function renderReport(timeExpired = false) {
  const report = calculateReport();
  const name = els.studentName.value.trim() || "新学员 / New Student";
  els.report.hidden = false;
  els.reportTitle.textContent = `${name} 的测评报告 / Assessment Report${timeExpired ? "（时间到 / Time Expired）" : ""}`;
  els.finalScore.textContent = String(report.score);
  els.recommendedLevel.textContent = report.level;
  els.completionRate.textContent = `${Math.round((report.completed / questions.length) * 100)}%`;

  els.skillBars.innerHTML = "";
  report.skills
    .sort((a, b) => a.percent - b.percent)
    .forEach((item) => {
      const row = document.createElement("div");
      row.className = "skill-row";
      row.innerHTML = `
        <div class="skill-label"><span>${escapeHtml(bilingual(item.skill, getSkillEnglish(item.skill)))}</span><span>${item.percent}%</span></div>
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

  items.push(`推荐从「${report.level}」开始；当前目标为「${els.studentGoal.value}」，主要语言为 ${els.studentLanguage.value}。 / Recommended starting point: ${report.level}. Current goal: ${els.studentGoal.value}. Main language: ${els.studentLanguage.value}.`);
  items.push(`代码题自动初评得分率约为 ${Math.round((report.typeScores.code || 0) * 100)}%，该项最能反映真实上机能力。 / Coding-task initial score is about ${Math.round((report.typeScores.code || 0) * 100)}%, which best reflects practical implementation ability.`);
  if (strong.length) items.push(`优势能力：${formatSkillList(strong)}。 / Strengths: ${formatSkillList(strong, true)}.`);
  if (weak.length) items.push(`优先补强：${formatSkillList(weak)}。 / Priority skills to improve: ${formatSkillList(weak, true)}.`);
  if ((report.typeScores.short || 0) < 0.55) items.push("算法表达偏弱，建议要求学员每题先写思路、复杂度和边界样例。 / Algorithm explanation is relatively weak. Ask the student to write the idea, complexity, and edge-case samples before coding.");
  if ((report.typeScores.code || 0) < 0.45) items.push("代码实现稳定性不足，建议暂缓高阶专题，先补输入输出、数据结构和调试流程。 / Code implementation is not yet stable. Delay advanced topics and first strengthen input/output, data structures, and debugging workflow.");

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
    const preview = answer.trim() ? answer.trim().slice(0, 420) : "未作答 / No answer";
    article.innerHTML = `
      <div>
        <strong>${escapeHtml(bilingual(question.title, questionEnglish[question.id]?.title))}</strong>
        <span>${result.earned} / ${question.points} 分 / pts · ${escapeHtml(bilingual(question.level, questionEnglish[question.id]?.level))}</span>
      </div>
      <p>${escapeHtml(bilingual(result.note, result.noteEn))}</p>
      <pre>${escapeHtml(preview)}</pre>
    `;
    els.codeReviewList.append(article);
  });
}

function renderStudyPlan(report) {
  els.studyPlan.innerHTML = "";
  const weakSkills = report.skills.filter((item) => item.percent < 65).map((item) => item.skill);
  const plan = [];

  if (report.level.includes("预备")) {
    plan.push("第 1 周：变量、循环、数组、字符串与输入输出，每次课后完成 3 道短代码题。 / Week 1: variables, loops, arrays, strings, and input/output. Complete 3 short coding tasks after each class.");
    plan.push("第 2 周：Bronze 模拟与枚举，训练手写状态表和边界样例。 / Week 2: Bronze simulation and enumeration. Practice writing state tables and edge-case samples.");
  } else if (report.level.includes("Bronze")) {
    plan.push("第 1 周：排序、频次统计、双重枚举与模拟题混合训练。 / Week 1: mixed practice on sorting, frequency counting, double loops, and simulation.");
    plan.push("第 2 周：加入前缀和、简单贪心和短代码限时练习。 / Week 2: add prefix sums, simple greedy, and timed short coding drills.");
  } else if (report.level.includes("Silver")) {
    plan.push("第 1 周：二分答案、前缀和、双指针，每个专题完成 5 到 8 道题。 / Week 1: binary search on answer, prefix sums, and two pointers. Finish 5 to 8 problems per topic.");
    plan.push("第 2 周：DFS/BFS、并查集、Dijkstra 入门，并安排 90 分钟限时套题。 / Week 2: DFS/BFS, DSU, and introductory Dijkstra, plus a 90-minute timed set.");
  } else {
    plan.push("第 1 周：树状数组、线段树、树形 DP 和最短路变形题。 / Week 1: Fenwick trees, segment trees, tree DP, and shortest-path variations.");
    plan.push("第 2 周：Gold 套题复盘，要求写出状态定义、复杂度证明和错因总结。 / Week 2: review Gold sets with state definitions, complexity proofs, and error summaries.");
  }

  if (weakSkills.length) {
    plan.push(`重点回炉「${weakSkills.slice(0, 4).join("、")}」，直到单项得分率超过 70%。 / Rebuild priority skills: ${weakSkills.slice(0, 4).map(getSkillEnglish).join(", ")} until each exceeds 70%.`);
  }
  plan.push("代码题建议由老师复核一次，尤其检查边界、复杂度、变量初始化和样例外小数据。 / Have a teacher review coding answers, especially edge cases, complexity, variable initialization, and tests beyond the sample.");

  plan.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    els.studyPlan.append(li);
  });
}

function getTypeLabel(type) {
  return {
    choice: "选择题 / Multiple Choice",
    short: "简答题 / Short Answer",
    code: "代码题 / Coding"
  }[type];
}

function bilingual(chinese, english) {
  return english ? `${chinese} / ${english}` : chinese;
}

function getSkillEnglish(skill) {
  const entry = Object.values(questionEnglish).find((item) => {
    const question = questions.find((candidate) => candidate.skill === skill && questionEnglish[candidate.id] === item);
    return Boolean(question);
  });
  return entry?.skill || skill;
}

function formatSkillList(items, englishOnly = false) {
  return items.map((item) => englishOnly ? getSkillEnglish(item.skill) : item.skill).join(englishOnly ? ", " : "、");
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
els.introStartBtn.addEventListener("click", startAssessment);
els.resetBtn.addEventListener("click", resetAssessment);
els.saveBtn.addEventListener("click", saveCurrentAnswer);
els.prevBtn.addEventListener("click", () => goToQuestion(state.currentIndex - 1));
els.nextBtn.addEventListener("click", () => goToQuestion(state.currentIndex + 1));
els.submitBtn.addEventListener("click", () => submitAssessment(false));
els.printBtn.addEventListener("click", () => window.print());

renderQuestionMap();
updateProgress();
updateTimerText();
