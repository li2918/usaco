const allQuestions = [
  {
    id: "q1",
    slot: "f1",
    type: "choice",
    group: "foundation",
    skill: "loop-bounds",
    points: 6,
    answer: 1,
    i18n: {
      zh: {
        level: "基础",
        skill: "读题与边界",
        title: "循环边界与输入数量",
        prompt: "题目给定 N，接下来有 N 行牛的编号。哪种写法最不容易多读或少读？",
        options: [
          "for (int i = 0; i <= N; i++) 读入",
          "for (int i = 0; i < N; i++) 读入",
          "while (N--) 后再额外读一次",
          "从 1 循环到 N - 1"
        ]
      },
      en: {
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
      }
    }
  },
  {
    id: "q2",
    slot: "f2",
    type: "choice",
    group: "foundation",
    skill: "complexity",
    points: 7,
    answer: 2,
    i18n: {
      zh: {
        level: "基础",
        skill: "复杂度分析",
        title: "约束与复杂度判断",
        prompt: "如果 N 最大为 100000，通常哪类复杂度最适合作为第一选择？",
        options: ["O(N^2)", "O(N!)", "O(N log N)", "O(2^N)"]
      },
      en: {
        level: "Foundation",
        skill: "Complexity Analysis",
        title: "Constraints and Complexity",
        prompt: "If N can be as large as 100000, which time complexity is usually the best first choice?",
        options: ["O(N^2)", "O(N!)", "O(N log N)", "O(2^N)"]
      }
    }
  },
  {
    id: "q3",
    slot: "b1",
    type: "short",
    group: "bronze",
    skill: "simulation",
    points: 10,
    minLength: 35,
    keywords: {
      zh: ["状态", "顺序", "边界", "样例", "变量", "更新"],
      en: ["state", "order", "edge", "case", "sample", "variable", "update"]
    },
    i18n: {
      zh: {
        level: "Bronze",
        skill: "模拟实现",
        title: "描述模拟状态",
        prompt: "用 2 到 4 句话说明：写 USACO Bronze 模拟题时，你会如何确定状态变量、更新顺序和边界条件？",
        rubric: "优秀答案应提到状态变量、按题意顺序更新、处理边界，并用样例或小数据验证。"
      },
      en: {
        level: "Bronze",
        skill: "Simulation Implementation",
        title: "Describing Simulation State",
        prompt: "In 2 to 4 sentences, explain how you choose state variables, update order, and edge cases when solving a USACO Bronze simulation problem.",
        rubric: "A strong answer mentions state variables, updating in problem order, handling edge cases, and checking with samples or small tests."
      }
    }
  },
  {
    id: "q4",
    slot: "b2",
    type: "code",
    group: "bronze",
    skill: "enumeration",
    points: 14,
    checks: [
      { points: 3, patterns: ["cin", "input", "scanner", "read"], labels: { zh: "读入 N 和数组", en: "Reads N and the array" } },
      { points: 3, patterns: ["i < j", "j = i + 1", "second", "两个", "different"], labels: { zh: "保证选择两个不同位置", en: "Ensures two different positions are selected" } },
      { points: 5, patterns: ["sort", "max1", "max2", "first", "second"], labels: { zh: "使用排序或一次扫描维护最大两个数", en: "Uses sorting or one scan to track the two largest values" } },
      { points: 3, patterns: ["o(n)", "o(n log n)", "复杂度", "complexity"], labels: { zh: "写出复杂度", en: "States the time complexity" } }
    ],
    i18n: {
      zh: {
        level: "Bronze",
        skill: "枚举与实现",
        title: "Bronze 代码题：最佳双牛组合",
        prompt: "给定 N 个正整数，选出两个不同位置的数，使它们的和最大。请写出完整函数或完整程序，并说明复杂度。",
        problem: {
          input: "第一行 N，第二行 N 个整数。2 <= N <= 1000。",
          output: "输出两个不同数的最大和。",
          sampleIn: "5\n3 9 1 7 9",
          sampleOut: "18"
        },
        rubric: "可以排序取最大两个，也可以一次扫描维护最大和次大。暴力 O(N^2) 在 N=1000 可接受，但不是最优表达。"
      },
      en: {
        level: "Bronze",
        skill: "Enumeration and Implementation",
        title: "Bronze Coding: Best Pair of Cows",
        prompt: "Given N positive integers, choose two values from different positions so their sum is maximized. Write a complete function or program and state the complexity.",
        problem: {
          input: "The first line contains N. The second line contains N integers. 2 <= N <= 1000.",
          output: "Print the maximum sum of two values from different positions.",
          sampleIn: "5\n3 9 1 7 9",
          sampleOut: "18"
        },
        rubric: "You may sort and take the largest two values, or scan once to track the largest and second largest. Brute force O(N^2) works for N=1000, but it is not the best expression."
      }
    }
  },
  {
    id: "q5",
    slot: "s1",
    type: "choice",
    group: "silver",
    skill: "prefix-sum",
    points: 9,
    answer: 0,
    i18n: {
      zh: {
        level: "Silver",
        skill: "前缀和",
        title: "区间和预处理",
        prompt: "多次询问数组 [l, r] 的和，最常用的预处理是？",
        options: ["前缀和", "DFS 树", "并查集", "快速幂"]
      },
      en: {
        level: "Silver",
        skill: "Prefix Sums",
        title: "Preprocessing Range Sums",
        prompt: "For many queries asking for the sum of array interval [l, r], what preprocessing is most commonly used?",
        options: ["Prefix sums", "DFS tree", "Disjoint set union", "Fast exponentiation"]
      }
    }
  },
  {
    id: "q6",
    slot: "s2",
    type: "short",
    group: "silver",
    skill: "binary-answer",
    points: 12,
    minLength: 45,
    keywords: {
      zh: ["单调", "可行", "不可行", "二分", "最大", "最小"],
      en: ["monotonic", "feasible", "infeasible", "binary", "search", "maximum", "minimum"]
    },
    i18n: {
      zh: {
        level: "Silver",
        skill: "二分答案",
        title: "二分答案的适用条件",
        prompt: "请解释什么叫“答案具有单调性”，并举一个适合二分答案的 USACO 风格场景。",
        rubric: "优秀答案应说明阈值变化导致可行性一边成立一边不成立，并能举最大最小化或最小最大化场景。"
      },
      en: {
        level: "Silver",
        skill: "Binary Search on Answer",
        title: "When Binary Search on Answer Applies",
        prompt: "Explain what it means for an answer to be monotonic, and give one USACO-style scenario where binary search on the answer is appropriate.",
        rubric: "A strong answer explains that feasibility changes on one side of a threshold and gives a max-min or min-max type scenario."
      }
    }
  },
  {
    id: "q7",
    slot: "s3",
    type: "code",
    group: "silver",
    skill: "graph-basics",
    points: 18,
    checks: [
      { points: 5, patterns: ["vector", "adj", "parent", "union", "find", "arraylist"], labels: { zh: "使用邻接表或并查集", en: "Uses an adjacency list or disjoint set union" } },
      { points: 3, patterns: ["for", "range", "1", "n"], labels: { zh: "遍历所有节点", en: "Visits all nodes" } },
      { points: 6, patterns: ["dfs", "bfs", "queue", "stack", "union", "find"], labels: { zh: "DFS/BFS 或 union-find 逻辑完整", en: "Implements DFS/BFS or union-find correctly" } },
      { points: 4, patterns: ["o(n+m)", "o(m", "复杂度", "complexity"], labels: { zh: "考虑大数据复杂度", en: "Considers complexity for large inputs" } }
    ],
    i18n: {
      zh: {
        level: "Silver",
        skill: "图论基础",
        title: "Silver 代码题：统计连通块",
        prompt: "给定一个 N 个点 M 条边的无向图，输出连通块数量。请写出完整程序或核心代码。",
        problem: {
          input: "第一行 N M，接下来 M 行每行 a b。1 <= N <= 100000，0 <= M <= 200000。",
          output: "输出连通块个数。",
          sampleIn: "5 3\n1 2\n2 3\n4 5",
          sampleOut: "2"
        },
        rubric: "N 和 M 很大，应使用邻接表 DFS/BFS 或并查集，不能用邻接矩阵。"
      },
      en: {
        level: "Silver",
        skill: "Graph Basics",
        title: "Silver Coding: Count Connected Components",
        prompt: "Given an undirected graph with N nodes and M edges, output the number of connected components. Write a complete program or the core code.",
        problem: {
          input: "The first line contains N M. The next M lines each contain a b. 1 <= N <= 100000, 0 <= M <= 200000.",
          output: "Print the number of connected components.",
          sampleIn: "5 3\n1 2\n2 3\n4 5",
          sampleOut: "2"
        },
        rubric: "Because N and M are large, use an adjacency-list DFS/BFS or DSU. Do not use an adjacency matrix."
      }
    }
  },
  {
    id: "q8",
    slot: "s4",
    type: "choice",
    group: "silver",
    skill: "two-pointers",
    points: 9,
    answer: 0,
    i18n: {
      zh: {
        level: "Silver",
        skill: "双指针",
        title: "滑动窗口条件",
        prompt: "正数数组中寻找和不超过 K 的最长连续区间，常见做法是？",
        options: ["双指针维护窗口", "枚举所有排列", "Floyd 最短路", "高精度乘法"]
      },
      en: {
        level: "Silver",
        skill: "Two Pointers",
        title: "Sliding Window Condition",
        prompt: "In an array of positive numbers, you need the longest contiguous interval whose sum is at most K. What is the common approach?",
        options: ["Maintain a window with two pointers", "Enumerate all permutations", "Floyd shortest paths", "High-precision multiplication"]
      }
    }
  },
  {
    id: "q9",
    slot: "g1",
    type: "short",
    group: "gold",
    skill: "dp",
    points: 14,
    minLength: 55,
    keywords: {
      zh: ["状态", "转移", "初值", "边界", "答案", "复杂度"],
      en: ["state", "transition", "initial", "base", "edge", "answer", "complexity"]
    },
    i18n: {
      zh: {
        level: "Gold",
        skill: "动态规划",
        title: "DP 状态设计",
        prompt: "给你一个序列题，要求最优值。请说明你设计 DP 时会如何定义状态、转移、初值和答案位置。",
        rubric: "优秀答案应清楚区分 dp[i] 的含义、从哪里转移、如何初始化以及最终答案在哪里。"
      },
      en: {
        level: "Gold",
        skill: "Dynamic Programming",
        title: "Designing DP States",
        prompt: "For a sequence problem asking for an optimal value, explain how you define the DP state, transition, initial values, and final answer position.",
        rubric: "A strong answer clearly defines what dp[i] means, where transitions come from, how initialization works, and where the final answer is stored."
      }
    }
  },
  {
    id: "q10",
    slot: "g2",
    type: "code",
    group: "gold",
    skill: "advanced-ds",
    points: 22,
    checks: [
      { points: 5, patterns: ["bit", "fenwick", "tree", "segment", "lowbit"], labels: { zh: "选择树状数组或线段树", en: "Chooses a Fenwick tree or segment tree" } },
      { points: 5, patterns: ["update", "add", "+=", "lowbit"], labels: { zh: "实现 update/add", en: "Implements update/add" } },
      { points: 5, patterns: ["query", "sum", "prefix", "lowbit"], labels: { zh: "实现 prefix/query", en: "Implements prefix/query" } },
      { points: 4, patterns: ["r", "l - 1", "left", "right"], labels: { zh: "区间和由两个前缀相减或线段树查询得到", en: "Gets a range sum from two prefixes or a segment-tree query" } },
      { points: 3, patterns: ["o(log n)", "log"], labels: { zh: "复杂度达到 O(log N)", en: "Reaches O(log N) complexity" } }
    ],
    i18n: {
      zh: {
        level: "Gold",
        skill: "数据结构进阶",
        title: "Gold 代码题：动态区间和",
        prompt: "维护长度为 N 的数组，支持单点加值与区间求和。请写出树状数组或线段树核心代码。",
        problem: {
          input: "N Q，随后 N 个初始值。操作 add i x 表示 a[i]+=x，sum l r 表示查询区间和。",
          output: "对每个 sum 操作输出答案。N,Q <= 200000。",
          sampleIn: "5 4\n1 2 3 4 5\nsum 2 4\nadd 3 10\nsum 2 4\nsum 1 5",
          sampleOut: "9\n19\n25"
        },
        rubric: "N,Q 到 200000，普通数组每次重算会超时。注意 long long。"
      },
      en: {
        level: "Gold",
        skill: "Advanced Data Structures",
        title: "Gold Coding: Dynamic Range Sum",
        prompt: "Maintain an array of length N with point additions and range-sum queries. Write the core code for a Fenwick tree or segment tree.",
        problem: {
          input: "N Q, followed by N initial values. Operation add i x means a[i] += x, and sum l r asks for the range sum.",
          output: "For each sum operation, print the answer. N,Q <= 200000.",
          sampleIn: "5 4\n1 2 3 4 5\nsum 2 4\nadd 3 10\nsum 2 4\nsum 1 5",
          sampleOut: "9\n19\n25"
        },
        rubric: "With N,Q up to 200000, recomputing sums with a plain array will time out. Remember long long."
      }
    }
  },
  {
    id: "q11",
    slot: "g3",
    type: "choice",
    group: "gold",
    skill: "shortest-paths",
    points: 10,
    answer: 1,
    i18n: {
      zh: {
        level: "Gold",
        skill: "最短路",
        title: "非负边权最短路",
        prompt: "带非负边权图的单源最短路，典型算法是？",
        options: ["KMP", "Dijkstra", "快速排序", "欧几里得算法"]
      },
      en: {
        level: "Gold",
        skill: "Shortest Paths",
        title: "Shortest Paths with Nonnegative Edge Weights",
        prompt: "For single-source shortest paths in a graph with nonnegative edge weights, what is the classic algorithm?",
        options: ["KMP", "Dijkstra", "Quicksort", "Euclidean algorithm"]
      }
    }
  },
  {
    id: "q12",
    slot: "g4",
    type: "code",
    group: "gold",
    skill: "modeling",
    points: 24,
    checks: [
      { points: 5, patterns: ["two", "双指针", "left", "right", "l", "r"], labels: { zh: "识别正数数组可用双指针", en: "Recognizes that positive arrays allow two pointers" } },
      { points: 5, patterns: ["sum", "cur", "window"], labels: { zh: "维护窗口和", en: "Maintains the window sum" } },
      { points: 6, patterns: ["while", "> t", ">t", "left++", "l++"], labels: { zh: "超出 T 时移动左端点", en: "Moves the left endpoint when the sum exceeds T" } },
      { points: 5, patterns: ["max", "ans", "right - left + 1", "r-l+1"], labels: { zh: "更新最大长度", en: "Updates the maximum length" } },
      { points: 3, patterns: ["o(n)", "复杂度", "complexity"], labels: { zh: "复杂度说明", en: "States the complexity" } }
    ],
    i18n: {
      zh: {
        level: "Gold",
        skill: "综合建模",
        title: "Gold 代码题：最长可行前缀",
        prompt: "给定 N 个任务耗时和总时间 T，求最长连续区间，使区间总耗时不超过 T。所有耗时为正数。请写出 O(N) 或 O(N log N) 解法。",
        problem: {
          input: "第一行 N T，第二行 N 个正整数。N <= 200000。",
          output: "输出最长连续区间长度。",
          sampleIn: "7 8\n2 1 3 4 2 1 5",
          sampleOut: "4"
        },
        rubric: "因为所有耗时为正数，窗口右端扩展后若超时，左端单调右移即可。"
      },
      en: {
        level: "Gold",
        skill: "Integrated Modeling",
        title: "Gold Coding: Longest Feasible Prefix",
        prompt: "Given N task durations and total time T, find the longest contiguous interval with total duration at most T. All durations are positive. Write an O(N) or O(N log N) solution.",
        problem: {
          input: "The first line contains N T. The second line contains N positive integers. N <= 200000.",
          output: "Print the length of the longest contiguous interval.",
          sampleIn: "7 8\n2 1 3 4 2 1 5",
          sampleOut: "4"
        },
        rubric: "Because all durations are positive, after expanding the right endpoint, if the window exceeds T, the left endpoint can move monotonically right."
      }
    }
  },
  {
    id: "q1b",
    slot: "f1",
    type: "choice",
    group: "foundation",
    skill: "loop-bounds",
    points: 6,
    answer: 1,
    i18n: {
      zh: {
        level: "基础",
        skill: "读题与边界",
        title: "数组下标的合法范围",
        prompt: "声明一个长度为 N 的数组 a（如 C++ 的 vector<int> a(N) 或 Python 的 a = [0]*N），合法下标范围是？",
        options: [
          "1 <= i <= N",
          "0 <= i <= N - 1",
          "0 <= i <= N",
          "1 <= i <= N + 1"
        ]
      },
      en: {
        level: "Foundation",
        skill: "Reading and Edge Cases",
        title: "Valid Array Indices",
        prompt: "If you declare an array of length N (e.g., vector<int> a(N) in C++ or a = [0]*N in Python), what is the valid range of indices?",
        options: [
          "1 <= i <= N",
          "0 <= i <= N - 1",
          "0 <= i <= N",
          "1 <= i <= N + 1"
        ]
      }
    }
  },
  {
    id: "q2b",
    slot: "f2",
    type: "choice",
    group: "foundation",
    skill: "complexity",
    points: 7,
    answer: 2,
    i18n: {
      zh: {
        level: "基础",
        skill: "复杂度分析",
        title: "数据规模与复杂度",
        prompt: "一秒内大约能完成 1e8 次基础运算。当 N = 1e6 时，下列哪种复杂度通常会超时？",
        options: ["O(N)", "O(N log N)", "O(N^2)", "O(sqrt(N))"]
      },
      en: {
        level: "Foundation",
        skill: "Complexity Analysis",
        title: "Input Size vs. Complexity",
        prompt: "About 1e8 basic operations fit in one second. When N = 1e6, which complexity is usually too slow?",
        options: ["O(N)", "O(N log N)", "O(N^2)", "O(sqrt(N))"]
      }
    }
  },
  {
    id: "q3b",
    slot: "b1",
    type: "short",
    group: "bronze",
    skill: "simulation",
    points: 10,
    minLength: 35,
    keywords: {
      zh: ["样例", "状态", "打印", "对拍", "缩小", "暴力"],
      en: ["sample", "state", "print", "small", "compare", "brute"]
    },
    i18n: {
      zh: {
        level: "Bronze",
        skill: "模拟实现",
        title: "调试模拟题的策略",
        prompt: "用 2 到 4 句话说明：当你的 USACO Bronze 模拟题在大样例上输出错误时，你会用哪几步定位 bug？",
        rubric: "优秀答案应包含：缩小输入到能手算的规模、打印每一步的状态、与暴力解法对拍、定位第一处分歧。"
      },
      en: {
        level: "Bronze",
        skill: "Simulation Implementation",
        title: "Strategies for Debugging Simulations",
        prompt: "In 2 to 4 sentences, explain what steps you take when your USACO Bronze simulation produces a wrong answer on a large input.",
        rubric: "A strong answer covers: shrinking the input to a hand-traceable size, printing intermediate state, diffing against a brute-force baseline, and locating the first divergence."
      }
    }
  },
  {
    id: "q4b",
    slot: "b2",
    type: "code",
    group: "bronze",
    skill: "enumeration",
    points: 14,
    checks: [
      { points: 3, patterns: ["cin", "input", "scanner", "read"], labels: { zh: "读入 N 和数组", en: "Reads N and the array" } },
      { points: 4, patterns: ["sort"], labels: { zh: "对数组排序", en: "Sorts the array" } },
      { points: 4, patterns: ["a[i+1]", "a[i + 1]", "next", "abs", "diff"], labels: { zh: "扫描相邻元素差值", en: "Scans adjacent differences" } },
      { points: 3, patterns: ["o(n log n)", "o(n)", "复杂度", "complexity"], labels: { zh: "写出复杂度", en: "States the time complexity" } }
    ],
    i18n: {
      zh: {
        level: "Bronze",
        skill: "枚举与实现",
        title: "Bronze 代码题：最接近的两头牛",
        prompt: "给定 N 个互不相同的正整数，找出绝对差最小的两个数，输出这个差值。请写出完整函数或完整程序，并说明复杂度。",
        problem: {
          input: "第一行 N，第二行 N 个互不相同的正整数。2 <= N <= 100000。",
          output: "输出最小绝对差。",
          sampleIn: "5\n12 4 9 1 7",
          sampleOut: "2"
        },
        rubric: "排序后比较相邻元素，复杂度 O(N log N)。N 较大时不能用暴力 O(N^2)。"
      },
      en: {
        level: "Bronze",
        skill: "Enumeration and Implementation",
        title: "Bronze Coding: Closest Pair of Cows",
        prompt: "Given N distinct positive integers, find the two values with the smallest absolute difference and print that difference. Write a complete function or program and state the complexity.",
        problem: {
          input: "The first line contains N. The second line contains N distinct positive integers. 2 <= N <= 100000.",
          output: "Print the smallest absolute difference.",
          sampleIn: "5\n12 4 9 1 7",
          sampleOut: "2"
        },
        rubric: "Sort and compare adjacent elements; the complexity is O(N log N). With N this large, brute O(N^2) is not acceptable."
      }
    }
  },
  {
    id: "q5b",
    slot: "s1",
    type: "choice",
    group: "silver",
    skill: "prefix-sum",
    points: 9,
    answer: 0,
    i18n: {
      zh: {
        level: "Silver",
        skill: "前缀和",
        title: "二维矩形和的预处理",
        prompt: "对一个 N×M 的矩阵反复询问任意子矩形的元素和，最常用的预处理是？",
        options: ["二维前缀和", "拓扑排序", "高斯消元", "字符串哈希"]
      },
      en: {
        level: "Silver",
        skill: "Prefix Sums",
        title: "Preprocessing 2D Rectangle Sums",
        prompt: "When you repeatedly need the sum of arbitrary sub-rectangles in an N×M grid, what preprocessing do you usually use?",
        options: ["2D prefix sums", "Topological sort", "Gaussian elimination", "String hashing"]
      }
    }
  },
  {
    id: "q6b",
    slot: "s2",
    type: "short",
    group: "silver",
    skill: "binary-answer",
    points: 12,
    minLength: 45,
    keywords: {
      zh: ["判定", "check", "单调", "可行", "阈值", "二分"],
      en: ["check", "predicate", "monotonic", "feasible", "threshold", "binary"]
    },
    i18n: {
      zh: {
        level: "Silver",
        skill: "二分答案",
        title: "判定函数的设计",
        prompt: "对“最大化最小间距”这类问题做二分答案时，请描述你会如何写判定函数 check(x)，并说明它的单调性。",
        rubric: "优秀答案应说明：check(x) 判定能否在间距至少为 x 的条件下满足要求，且 x 越大越难成立——即 check 的真值随 x 单调下降。"
      },
      en: {
        level: "Silver",
        skill: "Binary Search on Answer",
        title: "Designing the Predicate Function",
        prompt: "For a 'maximize the minimum spacing' problem solved by binary search on the answer, describe how you write the predicate check(x) and explain its monotonicity.",
        rubric: "A strong answer explains: check(x) tests whether the goal is achievable with spacing at least x, and that larger x is strictly harder — so check is monotonically false as x grows."
      }
    }
  },
  {
    id: "q7b",
    slot: "s3",
    type: "code",
    group: "silver",
    skill: "graph-basics",
    points: 18,
    checks: [
      { points: 5, patterns: ["vector", "adj", "parent", "union", "find", "arraylist"], labels: { zh: "使用邻接表或并查集", en: "Uses an adjacency list or disjoint set union" } },
      { points: 4, patterns: ["dfs", "bfs", "queue", "visited", "vis", "find"], labels: { zh: "实现遍历或路径压缩", en: "Implements traversal or path compression" } },
      { points: 5, patterns: ["cycle", "环", "back", "merge", "same"], labels: { zh: "检测环或合并失败", en: "Detects a cycle or a failed merge" } },
      { points: 4, patterns: ["o(n+m)", "o(m", "复杂度", "complexity", "log"], labels: { zh: "考虑大数据复杂度", en: "Considers complexity for large inputs" } }
    ],
    i18n: {
      zh: {
        level: "Silver",
        skill: "图论基础",
        title: "Silver 代码题：判定无向图是否有环",
        prompt: "给定一个 N 个点 M 条边的无向简单图，判断它是否包含环。请写出完整程序或核心代码。",
        problem: {
          input: "第一行 N M，接下来 M 行每行 a b。1 <= N <= 100000，0 <= M <= 200000。",
          output: "若存在环输出 YES，否则输出 NO。",
          sampleIn: "4 4\n1 2\n2 3\n3 1\n3 4",
          sampleOut: "YES"
        },
        rubric: "并查集做法：合并 a-b 时若 a、b 已经同根则有环。DFS 做法：访问到非父亲的已访问邻居即有环。"
      },
      en: {
        level: "Silver",
        skill: "Graph Basics",
        title: "Silver Coding: Detect a Cycle in an Undirected Graph",
        prompt: "Given an undirected simple graph with N nodes and M edges, decide whether it contains a cycle. Write a complete program or the core code.",
        problem: {
          input: "The first line contains N M. The next M lines each contain a b. 1 <= N <= 100000, 0 <= M <= 200000.",
          output: "Print YES if a cycle exists, otherwise NO.",
          sampleIn: "4 4\n1 2\n2 3\n3 1\n3 4",
          sampleOut: "YES"
        },
        rubric: "DSU approach: when uniting a-b, if a and b are already in the same set, there is a cycle. DFS approach: a visited non-parent neighbor implies a cycle."
      }
    }
  },
  {
    id: "q8b",
    slot: "s4",
    type: "choice",
    group: "silver",
    skill: "two-pointers",
    points: 9,
    answer: 0,
    i18n: {
      zh: {
        level: "Silver",
        skill: "双指针",
        title: "有序数组配对计数",
        prompt: "已排序的整数数组中，统计有多少对 (i, j)（i < j）满足 a[i] + a[j] = K，最高效做法是？",
        options: ["双指针线性扫描", "Bellman-Ford 最短路", "KMP 字符串匹配", "高斯消元"]
      },
      en: {
        level: "Silver",
        skill: "Two Pointers",
        title: "Counting Pairs in a Sorted Array",
        prompt: "In a sorted integer array, you want to count the number of pairs (i, j) with i < j and a[i] + a[j] = K. Which approach is most efficient?",
        options: ["Linear two-pointer scan", "Bellman-Ford shortest path", "KMP string matching", "Gaussian elimination"]
      }
    }
  },
  {
    id: "q9b",
    slot: "g1",
    type: "short",
    group: "gold",
    skill: "dp",
    points: 14,
    minLength: 55,
    keywords: {
      zh: ["状态", "转移", "容量", "物品", "初值", "答案"],
      en: ["state", "transition", "capacity", "item", "initial", "answer"]
    },
    i18n: {
      zh: {
        level: "Gold",
        skill: "动态规划",
        title: "0/1 背包的状态设计",
        prompt: "给定 N 个物品，每个物品有重量 w 和价值 v，背包容量为 W。请描述你会如何设计状态、转移、初值，以及最终答案的位置。",
        rubric: "优秀答案应说明 dp[i][w] 或 dp[w] 的含义、选/不选的转移、初值与答案位置，并提到滚动数组优化。"
      },
      en: {
        level: "Gold",
        skill: "Dynamic Programming",
        title: "Designing the 0/1 Knapsack State",
        prompt: "Given N items with weight w and value v, and a knapsack capacity W, describe how you define the DP state, transition, initial values, and where the final answer is stored.",
        rubric: "A strong answer defines dp[i][w] or dp[w], the take-or-skip transition, initialization, and the answer location, and mentions the rolling-array optimization."
      }
    }
  },
  {
    id: "q10b",
    slot: "g2",
    type: "code",
    group: "gold",
    skill: "advanced-ds",
    points: 22,
    checks: [
      { points: 5, patterns: ["bit", "fenwick", "tree", "lowbit", "diff"], labels: { zh: "选择树状数组并配合差分", en: "Chooses a Fenwick tree with a difference array" } },
      { points: 5, patterns: ["update", "add", "+=", "-="], labels: { zh: "区间更新转化为两次单点更新", en: "Turns a range update into two point updates" } },
      { points: 5, patterns: ["query", "sum", "prefix", "lowbit"], labels: { zh: "前缀和查询得到单点值", en: "Recovers a point value from a prefix sum" } },
      { points: 4, patterns: ["r + 1", "r+1", "boundary"], labels: { zh: "正确处理 r+1 边界", en: "Correctly handles the r+1 boundary" } },
      { points: 3, patterns: ["o(log n)", "log"], labels: { zh: "复杂度达到 O(log N)", en: "Reaches O(log N) complexity" } }
    ],
    i18n: {
      zh: {
        level: "Gold",
        skill: "数据结构进阶",
        title: "Gold 代码题：区间加 / 单点查",
        prompt: "维护长度为 N 的数组（初值全 0），支持区间加值与单点查询。请写出基于树状数组 + 差分的核心代码，并说明复杂度。",
        problem: {
          input: "N Q，操作 add l r v 表示 [l,r] 每个元素加 v；get i 表示查询当前 a[i]。",
          output: "对每个 get 操作输出当前 a[i]。N,Q <= 200000。",
          sampleIn: "5 4\nadd 1 3 2\nget 2\nadd 2 5 3\nget 4",
          sampleOut: "2\n3"
        },
        rubric: "对差分数组 d 维护 BIT：区间加 [l,r] 等价于 d[l]+=v、d[r+1]-=v；查询 a[i] 等于 d 的前缀和。注意 long long。"
      },
      en: {
        level: "Gold",
        skill: "Advanced Data Structures",
        title: "Gold Coding: Range Add / Point Query",
        prompt: "Maintain an array of length N (initially all zeros) supporting range additions and point queries. Write the core code using a Fenwick tree on a difference array, and state the complexity.",
        problem: {
          input: "N Q. Operation add l r v means [l,r] each += v; get i asks for the current a[i].",
          output: "For each get operation, print the current a[i]. N,Q <= 200000.",
          sampleIn: "5 4\nadd 1 3 2\nget 2\nadd 2 5 3\nget 4",
          sampleOut: "2\n3"
        },
        rubric: "Maintain a BIT over the difference array d: a range add [l,r] becomes d[l]+=v and d[r+1]-=v; querying a[i] equals the prefix sum of d. Use long long."
      }
    }
  },
  {
    id: "q11b",
    slot: "g3",
    type: "choice",
    group: "gold",
    skill: "shortest-paths",
    points: 10,
    answer: 2,
    i18n: {
      zh: {
        level: "Gold",
        skill: "最短路",
        title: "全源最短路",
        prompt: "在 N <= 500 的稠密带权图上，求所有点对之间的最短路，最经典的做法是？",
        options: ["KMP", "单次 Dijkstra", "Floyd-Warshall", "Trie 字典树"]
      },
      en: {
        level: "Gold",
        skill: "Shortest Paths",
        title: "All-Pairs Shortest Paths",
        prompt: "On a dense weighted graph with N <= 500, what is the classic algorithm for shortest paths between all pairs?",
        options: ["KMP", "A single Dijkstra run", "Floyd-Warshall", "Trie"]
      }
    }
  },
  {
    id: "q12b",
    slot: "g4",
    type: "code",
    group: "gold",
    skill: "modeling",
    points: 24,
    checks: [
      { points: 5, patterns: ["two", "双指针", "left", "right", "l", "r"], labels: { zh: "识别正数数组可用双指针", en: "Recognizes that positive arrays allow two pointers" } },
      { points: 5, patterns: ["sum", "cur", "window"], labels: { zh: "维护窗口和", en: "Maintains the window sum" } },
      { points: 6, patterns: ["while", ">= t", ">=t", "left++", "l++"], labels: { zh: "达到 T 时尝试收缩左端", en: "Shrinks the left endpoint once the sum reaches T" } },
      { points: 5, patterns: ["min", "ans", "right - left + 1", "r-l+1"], labels: { zh: "更新最小长度", en: "Updates the minimum length" } },
      { points: 3, patterns: ["o(n)", "复杂度", "complexity"], labels: { zh: "复杂度说明", en: "States the complexity" } }
    ],
    i18n: {
      zh: {
        level: "Gold",
        skill: "综合建模",
        title: "Gold 代码题：最短覆盖区间",
        prompt: "给定 N 个任务耗时（均为正数）和阈值 T，求最短的连续区间使其总耗时不少于 T。请写出 O(N) 解法；若不存在则输出 -1。",
        problem: {
          input: "第一行 N T，第二行 N 个正整数。N <= 200000。",
          output: "输出最短长度，若不存在则输出 -1。",
          sampleIn: "7 8\n2 1 3 4 2 1 5",
          sampleOut: "2"
        },
        rubric: "正数数组可用双指针：右端扩展直到窗口和 >= T，再尽可能收缩左端，每次更新最短长度；扫描完后若答案未更新则输出 -1。"
      },
      en: {
        level: "Gold",
        skill: "Integrated Modeling",
        title: "Gold Coding: Shortest Covering Interval",
        prompt: "Given N task durations (all positive) and threshold T, find the shortest contiguous interval whose total duration is at least T. Write an O(N) solution and print -1 if none exists.",
        problem: {
          input: "The first line contains N T. The second line contains N positive integers. N <= 200000.",
          output: "Print the shortest length, or -1 if no such interval exists.",
          sampleIn: "7 8\n2 1 3 4 2 1 5",
          sampleOut: "2"
        },
        rubric: "Positive arrays allow two pointers: expand the right until the window sum reaches T, then shrink the left as far as possible while still satisfying the condition, updating the shortest length each time; print -1 if no interval ever qualifies."
      }
    }
  }
];

const uiText = {
  zh: {
    htmlLang: "zh-CN",
    pageTitle: "USACO 新学员能力评估",
    switchLanguage: "English",
    brandTitle: "USACO 能力评估",
    brandTagline: "分层诊断 · 单题作答 · 代码题复核",
    sidebarAriaLabel: "测评控制台",
    stageActionsAriaLabel: "题目操作",
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
    confirmReset: "确定重新开始吗？已保存的答题进度会全部清空。",
    confirmSubmit: "确认提交测评？提交后无法继续修改答案。",
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
    brandTitle: "USACO Assessment",
    brandTagline: "Level diagnosis · One question at a time · Code review",
    sidebarAriaLabel: "Assessment Console",
    stageActionsAriaLabel: "Question Actions",
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
    confirmReset: "Restart? All saved answers will be cleared.",
    confirmSubmit: "Submit the assessment? Answers cannot be edited afterwards.",
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
const STORAGE_KEY = "usaco-assessment-v2";
const SAVE_DEBOUNCE_MS = 250;
const TIMER_PERSIST_INTERVAL = 5;

const questionPool = (() => {
  const order = [];
  const groups = new Map();
  for (const q of allQuestions) {
    if (!groups.has(q.slot)) {
      groups.set(q.slot, []);
      order.push(q.slot);
    }
    groups.get(q.slot).push(q);
  }
  return order.map((slot) => ({ slot, alternates: groups.get(slot) }));
})();

const questionsById = new Map(allQuestions.map((q) => [q.id, q]));

let questions = sampleQuestionSet();

function sampleQuestionSet() {
  return questionPool.map((entry) => {
    const pick = Math.floor(Math.random() * entry.alternates.length);
    return entry.alternates[pick];
  });
}

function buildQuestionsFromIds(ids) {
  if (!Array.isArray(ids) || ids.length !== questionPool.length) return null;
  const built = [];
  for (let i = 0; i < questionPool.length; i++) {
    const id = ids[i];
    const q = questionsById.get(id);
    if (!q || q.slot !== questionPool[i].slot) return null;
    built.push(q);
  }
  return built;
}

const skillLabels = {
  zh: Object.fromEntries(allQuestions.map((q) => [q.skill, q.i18n.zh.skill])),
  en: Object.fromEntries(allQuestions.map((q) => [q.skill, q.i18n.en.skill]))
};

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

let saveTimer = null;
function persistState() {
  if (saveTimer) window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(writeStorage, SAVE_DEBOUNCE_MS);
}

function writeStorage() {
  saveTimer = null;
  try {
    const payload = {
      v: 2,
      language: state.language,
      started: state.started,
      submitted: state.submitted,
      timeExpired: state.timeExpired,
      currentIndex: state.currentIndex,
      answers: state.answers,
      secondsLeft: state.secondsLeft,
      questionIds: questions.map((q) => q.id),
      student: {
        name: els.studentName.value,
        language: els.studentLanguage.value,
        goal: els.studentGoal.value
      }
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (err) {
    /* localStorage unavailable / quota exceeded — silently ignore */
  }
}

function loadPersisted() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    return null;
  }
}

function clearPersisted() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    /* ignore */
  }
}

function t(key) {
  return uiText[state.language][key];
}

function localizedText(zh, en) {
  return state.language === "zh" ? zh : en;
}

function applyI18n() {
  const ui = uiText[state.language];
  document.documentElement.lang = ui.htmlLang;
  document.title = ui.pageTitle;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = ui[key];
    if (typeof value === "string") el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const value = ui[el.dataset.i18nPlaceholder];
    if (typeof value === "string") el.placeholder = value;
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const value = ui[el.dataset.i18nAriaLabel];
    if (typeof value === "string") el.setAttribute("aria-label", value);
  });
}

function getStartButtonText() {
  if (state.submitted) return t("submitted");
  if (state.started) return t("inProgress");
  return t("start");
}

function updateStaticText() {
  applyI18n();
  els.startBtn.textContent = getStartButtonText();
  els.startBtn.disabled = state.started || state.submitted;
  if (!state.started && !state.submitted) {
    els.reportTitle.textContent = t("reportTitle");
    els.recommendedLevel.textContent = t("pending");
  }
  updateGoalOptions();
  updateProgress();
  if (state.started) renderCurrentQuestion();
  if (state.submitted) renderReport(state.timeExpired);
}

function updateGoalOptions() {
  Array.from(els.studentGoal.options).forEach((option) => {
    option.textContent = getGoalLabel(option.value);
  });
  Array.from(els.studentLanguage.options).forEach((option) => {
    if (option.value === "undecided") option.textContent = t("undecided");
  });
}

function getQuestionView(question) {
  return question.i18n[state.language];
}

function getSkillLabel(slug) {
  return skillLabels[state.language][slug] || slug;
}

function getCheckLabel(check) {
  return check.labels[state.language] || check.labels.zh;
}

function getTypeLabel(type) {
  return t("types")[type];
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

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeText(value) {
  return String(value || "").toLowerCase().replace(/\s+/g, " ");
}

function hasAnswer(question) {
  const value = state.answers[question.id];
  if (question.type === "choice") return Number.isInteger(value);
  return typeof value === "string" && value.trim().length > 0;
}

function startAssessment() {
  if (state.started || state.submitted) return;
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
  focusAnswer();
  persistState();
}

function resetAssessment() {
  const hasProgress = state.started || state.submitted || Object.keys(state.answers).length > 0;
  if (hasProgress && !window.confirm(t("confirmReset"))) return;
  if (state.timerId) window.clearInterval(state.timerId);
  state.started = false;
  state.submitted = false;
  state.timeExpired = false;
  state.currentIndex = 0;
  state.answers = {};
  state.secondsLeft = TOTAL_SECONDS;
  state.timerId = null;
  questions = sampleQuestionSet();
  els.startBtn.textContent = t("start");
  els.startBtn.disabled = false;
  els.intro.hidden = false;
  els.questionStage.hidden = true;
  els.report.hidden = true;
  els.feedback.hidden = true;
  updateTimerText();
  updateProgress();
  renderQuestionMap();
  clearPersisted();
}

function tickTimer() {
  updateTimerText();
  if (state.secondsLeft <= 0) {
    submitAssessment(true);
    return;
  }
  state.secondsLeft -= 1;
  if (state.secondsLeft % TIMER_PERSIST_INTERVAL === 0) persistState();
}

function updateTimerText() {
  const minutes = Math.floor(state.secondsLeft / 60);
  const seconds = state.secondsLeft % 60;
  els.timeLeft.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function submitAssessment(timeExpired = false) {
  if (state.submitted) return;
  if (!timeExpired && !window.confirm(t("confirmSubmit"))) return;
  saveCurrentAnswer({ silent: true });
  state.started = false;
  state.submitted = true;
  state.timeExpired = timeExpired;
  if (state.timerId) window.clearInterval(state.timerId);
  state.timerId = null;
  els.startBtn.textContent = t("submitted");
  els.startBtn.disabled = true;
  els.questionStage.hidden = true;
  els.intro.hidden = true;
  renderReport(timeExpired);
  updateProgress();
  persistState();
}

function renderCurrentQuestion() {
  const question = questions[state.currentIndex];
  const view = getQuestionView(question);
  els.questionKicker.textContent = `Question ${state.currentIndex + 1} / ${questions.length}`;
  els.questionTitle.textContent = view.title;
  els.questionType.textContent = getTypeLabel(question.type);
  els.questionBadge.textContent = `${view.level} · ${getSkillLabel(question.skill)}`;
  els.questionPoints.textContent = `${question.points} ${t("points")}`;
  els.questionPrompt.textContent = view.prompt;
  els.answerArea.innerHTML = "";
  els.feedback.hidden = true;

  renderProblemBlock(question);
  if (question.type === "choice") renderChoice(question);
  else if (question.type === "short") renderShortAnswer(question);
  else if (question.type === "code") renderCodeAnswer(question);

  els.prevBtn.disabled = state.currentIndex === 0;
  els.nextBtn.disabled = state.currentIndex === questions.length - 1;
  els.submitBtn.hidden = state.currentIndex !== questions.length - 1;
  renderQuestionMap();
}

function focusAnswer() {
  const focusable = els.answerArea.querySelector("textarea, input[type='radio']");
  if (focusable) focusable.focus({ preventScroll: true });
}

function renderProblemBlock(question) {
  const view = getQuestionView(question);
  if (!view.problem) {
    els.problemBlock.hidden = true;
    els.problemBlock.innerHTML = "";
    return;
  }
  const problem = view.problem;
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
  const view = getQuestionView(question);
  const wrapper = document.createElement("div");
  wrapper.className = "options";
  view.options.forEach((optionText, index) => {
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
      persistState();
    });
    const text = document.createElement("span");
    text.textContent = optionText;
    label.append(radio, text);
    wrapper.append(label);
  });
  els.answerArea.append(wrapper);
}

function renderShortAnswer(question) {
  const view = getQuestionView(question);
  const wrapper = document.createElement("div");
  wrapper.className = "written-answer";
  const textarea = document.createElement("textarea");
  textarea.id = "currentAnswer";
  textarea.rows = 8;
  textarea.placeholder = t("shortPlaceholder");
  textarea.value = state.answers[question.id] || "";
  textarea.addEventListener("input", () => {
    state.answers[question.id] = textarea.value;
    updateProgress();
    persistState();
  });
  const note = document.createElement("p");
  note.textContent = view.rubric;
  wrapper.append(textarea, note);
  els.answerArea.append(wrapper);
}

function renderCodeAnswer(question) {
  const view = getQuestionView(question);
  const wrapper = document.createElement("div");
  wrapper.className = "code-answer";
  const textarea = document.createElement("textarea");
  textarea.id = "currentAnswer";
  textarea.rows = 18;
  textarea.spellcheck = false;
  textarea.placeholder = t("codePlaceholder");
  textarea.value = state.answers[question.id] || "";
  textarea.addEventListener("input", () => {
    state.answers[question.id] = textarea.value;
    updateProgress();
    persistState();
  });
  const rubric = document.createElement("div");
  rubric.className = "rubric";
  const checkItems = question.checks
    .map((check) => `<li>${escapeHtml(getCheckLabel(check))}</li>`)
    .join("");
  rubric.innerHTML = `
    <strong>${escapeHtml(t("autoFocus"))}</strong>
    <ul>${checkItems}</ul>
    <p>${escapeHtml(view.rubric)}</p>
  `;
  wrapper.append(textarea, rubric);
  els.answerArea.append(wrapper);
}

function persistCurrentAnswer(question = questions[state.currentIndex]) {
  if (!question || question.type === "choice") return;
  const input = document.querySelector("#currentAnswer");
  if (input) state.answers[question.id] = input.value;
}

function saveCurrentAnswer({ silent = false } = {}) {
  const question = questions[state.currentIndex];
  persistCurrentAnswer(question);
  if (!silent) showSavedFeedback(question);
  updateProgress();
  persistState();
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
  saveCurrentAnswer({ silent: true });
  state.currentIndex = Math.max(0, Math.min(index, questions.length - 1));
  renderCurrentQuestion();
  focusAnswer();
  persistState();
}

function updateProgress() {
  const answered = questions.filter(hasAnswer).length;
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
    button.textContent = String(index + 1);
    button.className = "map-dot";
    button.dataset.level = question.group;
    const isActive = index === state.currentIndex && state.started;
    button.classList.toggle("active", isActive);
    button.classList.toggle("done", hasAnswer(question));
    if (isActive) button.setAttribute("aria-current", "step");
    const view = getQuestionView(question);
    button.title = `${view.level} · ${getTypeLabel(question.type)} · ${getSkillLabel(question.skill)}`;
    button.addEventListener("click", () => {
      if (!state.started || state.submitted) return;
      goToQuestion(index);
    });
    els.questionMap.append(button);
  });
}

function scoreQuestion(question) {
  const value = state.answers[question.id];
  if (question.type === "choice") {
    const correct = value === question.answer;
    return {
      earned: correct ? question.points : 0,
      possible: question.points,
      needsReview: false,
      note: correct ? "客观题正确。" : "客观题错误。",
      noteEn: correct ? "The objective question is correct." : "The objective question is incorrect."
    };
  }
  if (question.type === "short") {
    const text = normalizeText(value || "");
    const allKeywords = [...question.keywords.zh, ...question.keywords.en];
    const hits = allKeywords.filter((keyword) => text.includes(keyword.toLowerCase())).length;
    const lengthScore = text.length >= question.minLength
      ? 0.35
      : Math.min(0.35, (text.length / question.minLength) * 0.35);
    const target = Math.max(1, question.keywords.zh.length - 1);
    const keywordScore = Math.min(0.65, (hits / target) * 0.65);
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
  const matchedZh = [];
  const matchedEn = [];
  question.checks.forEach((check) => {
    const ok = check.patterns.some((pattern) => text.includes(pattern.toLowerCase()));
    if (ok) {
      earned += check.points;
      matchedZh.push(check.labels.zh);
      matchedEn.push(check.labels.en);
    }
  });
  return {
    earned,
    possible: question.points,
    needsReview: true,
    note: matchedZh.length ? `命中：${matchedZh.join("、")}。` : "未命中关键实现线索。",
    noteEn: matchedEn.length ? `Matched: ${matchedEn.join(", ")}.` : "No key implementation clues were detected."
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
  if (score >= 78 && (levelScores.gold || 0) >= 0.58 && (typeScores.code || 0) >= 0.55) {
    levelKey = "gold";
  } else if (score >= 62 && (levelScores.silver || 0) >= 0.58 && (typeScores.code || 0) >= 0.4) {
    levelKey = "silver";
  } else if (score >= 42 && (levelScores.bronze || 0) >= 0.5) {
    levelKey = "bronze";
  }

  return {
    score,
    levelKey,
    levelScores,
    typeScores,
    reviewItems,
    completed: questions.filter(hasAnswer).length,
    skills: Array.from(skillMap.entries()).map(([skill, value]) => ({
      skill,
      percent: value.possible ? Math.round((value.earned / value.possible) * 100) : 0
    }))
  };
}

function addBucket(map, key, earned, possible) {
  if (!map.has(key)) map.set(key, { earned: 0, possible: 0 });
  const bucket = map.get(key);
  bucket.earned += earned;
  bucket.possible += possible;
}

function toPercentMap(map) {
  return Object.fromEntries(
    Array.from(map.entries()).map(([key, value]) => [key, value.possible ? value.earned / value.possible : 0])
  );
}

function getResultNote(result) {
  return state.language === "zh" ? result.note : result.noteEn;
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
    .slice()
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
    const view = getQuestionView(question);
    article.innerHTML = `
      <div>
        <strong>${escapeHtml(view.title)}</strong>
        <span>${result.earned} / ${question.points} ${t("points")} · ${escapeHtml(view.level)}</span>
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

function toggleLanguage() {
  if (state.started) persistCurrentAnswer();
  state.language = state.language === "zh" ? "en" : "zh";
  updateStaticText();
  persistState();
}

function restoreFromPersisted(saved) {
  if (!saved) return;
  if (saved.language === "zh" || saved.language === "en") state.language = saved.language;

  const restored = buildQuestionsFromIds(saved.questionIds);
  if (restored) {
    questions = restored;
  } else if (saved.started || saved.submitted) {
    // Legacy or corrupted session — fresh sample, drop stale answers.
    questions = sampleQuestionSet();
    state.answers = {};
    saved = { ...saved, started: false, submitted: false, currentIndex: 0, secondsLeft: TOTAL_SECONDS, timeExpired: false, answers: {} };
  }

  if (saved.answers && typeof saved.answers === "object") state.answers = saved.answers;
  if (Number.isInteger(saved.currentIndex)) {
    state.currentIndex = Math.max(0, Math.min(saved.currentIndex, questions.length - 1));
  }
  if (typeof saved.secondsLeft === "number" && saved.secondsLeft >= 0 && saved.secondsLeft <= TOTAL_SECONDS) {
    state.secondsLeft = saved.secondsLeft;
  }
  state.timeExpired = !!saved.timeExpired;
  if (saved.student) {
    if (typeof saved.student.name === "string") els.studentName.value = saved.student.name;
    if (saved.student.language) {
      const opt = Array.from(els.studentLanguage.options).find((o) => o.value === saved.student.language);
      if (opt) els.studentLanguage.value = saved.student.language;
    }
    if (saved.student.goal) {
      const opt = Array.from(els.studentGoal.options).find((o) => o.value === saved.student.goal);
      if (opt) els.studentGoal.value = saved.student.goal;
    }
  }
  if (saved.submitted) {
    state.started = false;
    state.submitted = true;
    els.intro.hidden = true;
    els.questionStage.hidden = true;
  } else if (saved.started) {
    state.started = true;
    state.submitted = false;
    els.intro.hidden = true;
    els.report.hidden = true;
    els.questionStage.hidden = false;
    els.startBtn.disabled = true;
    state.timerId = window.setInterval(tickTimer, 1000);
  }
}

function attachEvents() {
  els.startBtn.addEventListener("click", startAssessment);
  els.resetBtn.addEventListener("click", resetAssessment);
  els.saveBtn.addEventListener("click", () => saveCurrentAnswer());
  els.prevBtn.addEventListener("click", () => goToQuestion(state.currentIndex - 1));
  els.nextBtn.addEventListener("click", () => goToQuestion(state.currentIndex + 1));
  els.submitBtn.addEventListener("click", () => submitAssessment(false));
  els.printBtn.addEventListener("click", () => window.print());
  els.languageToggle.addEventListener("click", toggleLanguage);
  els.studentName.addEventListener("input", persistState);
  els.studentLanguage.addEventListener("change", persistState);
  els.studentGoal.addEventListener("change", persistState);
}

function init() {
  attachEvents();
  restoreFromPersisted(loadPersisted());
  updateStaticText();
  updateTimerText();
}

init();
