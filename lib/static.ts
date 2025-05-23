export const easy = [
    "console.log('Hello, world!');",
    "let x = 10;",
    "const name = 'Luffy';",
    "let isAlive = true;",
    "let sum = 5 + 3;",
    "let fruits = ['apple', 'banana', 'mango'];",
    "let age = 20;",
    "const pi = 3.14;",
    "let message = 'Straw Hat Coders';",
    "console.error('Something went wrong');",
    "let isCool = false;",
    "let score = 100;",
    "const hero = 'Zoro';",
    "let temperature = 36.6;",
    "console.warn('Warning message');"
]

export const medium = [
    "for(let i = 0; i < 5; i++)  {\n console.log(i);\n }",
    "function greet(name) { \n return `Hello, ${name}`; \n }",
    "let nums = [1, 2, 3].map(n => n * 2);",
    "let total = [10, 20, 30].reduce((a, b) => a + b);",
    "const isEven = num => num % 2 === 0;",
    "let user = { name: 'Luffy', age: 19 };",
    "function add(a, b) { \n return a + b; \n }",
    "let capital = 'india'.toUpperCase();",
    "let items = new Array(5).fill(0);",
    "let found = [1, 2, 3].includes(2);",
    "let reversed = [1, 2, 3].reverse();",
    "let doubled = [1, 2, 3].map(x => x * 2);",
    "let date = new Date();",
    "let status = x > 10 ? 'big' : 'small';",
    "function sayHi() { \n console.log('Hi'); \n }"
]

export const hard = [
    `function factorial(n)  { \n return n <= 1 ? 1 : n * factorial(n - 1); \n }`,
    "const debounce = (fn, delay) => { \n let timeout; return (...args) => { \n clearTimeout(timeout); timeout = setTimeout(() => fn(...args), delay); \n}; \n };",
    "let unique = [...new Set([1,2,2,3,4])];",
    "let nested = [[1,2],[3,4]].flat();",
    "let obj = {a:1,b:2}; let keys = Object.keys(obj);",
    "let clone = JSON.parse(JSON.stringify(obj));",
    "function fibonacci(n) { \n return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2); \n }",
    "let promise = new Promise((res) => res('done'));",
    "function throttle(fn, limit) { \n let inThrottle; \n return function() { \n if (!inThrottle) { \n fn(); inThrottle = true; setTimeout(() => inThrottle = false, limit); \n}\n }\n }",
    "async function fetchData() { const res = await fetch('https://api.example.com'); return res.json(); }",
    "const delay = ms => new Promise(res => setTimeout(res, ms));",
    "function curry(f) { return function(a) { return function(b) { return f(a, b); }; }; }",
    "function compose(f, g) { return function(x) { return f(g(x)); }; }",
    "function memoize(fn) { const cache = {}; return (...args) => { let n = args[0]; if (n in cache) return cache[n]; else { let result = fn(n); cache[n] = result; return result; } }; }",
    "let merged = {...{a:1}, ...{b:2}};"
]

export const hacker = [
    "function quickSort(arr) { if (arr.length <= 1) return arr; let pivot = arr[0]; let left = arr.slice(1).filter(x => x < pivot); let right = arr.slice(1).filter(x => x >= pivot); return [...quickSort(left), pivot, ...quickSort(right)]; }",
    "class Node { constructor(data) { this.data = data; this.next = null; } }",
    "class LinkedList { constructor() { this.head = null; } add(data) { const newNode = new Node(data); if (!this.head) this.head = newNode; else { let curr = this.head; while (curr.next) curr = curr.next; curr.next = newNode; } } }",
    "const binarySearch = (arr, target) => { let l = 0, r = arr.length - 1; while (l <= r) { let m = Math.floor((l + r) / 2); if (arr[m] === target) return m; else if (arr[m] < target) l = m + 1; else r = m - 1; } return -1; };",
    "const permutations = str => { if (str.length <= 1) return [str]; let result = []; for (let i = 0; i < str.length; i++) { const char = str[i]; const remaining = str.slice(0, i) + str.slice(i + 1); for (let sub of permutations(remaining)) { result.push(char + sub); } } return result; };",
    "function knapsack(weights, values, capacity) { const n = weights.length; const dp = Array(n+1).fill().map(() => Array(capacity+1).fill(0)); for(let i=1;i<=n;i++) { for(let w=0;w<=capacity;w++) { if(weights[i-1]<=w) dp[i][w]=Math.max(dp[i-1][w], values[i-1]+dp[i-1][w-weights[i-1]]); else dp[i][w]=dp[i-1][w]; } } return dp[n][capacity]; }",
    "function dijkstra(graph, start) { const dist = {}; const visited = new Set(); Object.keys(graph).forEach(v => dist[v] = Infinity); dist[start] = 0; while (visited.size !== Object.keys(graph).length) { let u = Object.keys(dist).reduce((a, b) => (!visited.has(a) && (dist[a] < dist[b] || visited.has(b))) ? a : b); visited.add(u); for (let v in graph[u]) { let alt = dist[u] + graph[u][v]; if (alt < dist[v]) dist[v] = alt; } } return dist; }",
    "function mergeSort(arr) { if (arr.length < 2) return arr; const mid = Math.floor(arr.length / 2); const left = mergeSort(arr.slice(0, mid)); const right = mergeSort(arr.slice(mid)); return merge(left, right); } function merge(left, right) { const result = []; while (left.length && right.length) { result.push(left[0] < right[0] ? left.shift() : right.shift()); } return result.concat(left, right); }",
    "function isPalindrome(str) { let i = 0, j = str.length - 1; while (i < j) { if (str[i++] !== str[j--]) return false; } return true; }",
    "function power(a, b) { if (b === 0) return 1; if (b % 2 === 0) return power(a * a, Math.floor(b / 2)); else return a * power(a, b - 1); }",
    "function isPrime(n) { if (n <= 1) return false; for (let i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; }",
    "function longestCommonSubsequence(a, b) { const dp = Array(a.length+1).fill().map(()=>Array(b.length+1).fill(0)); for(let i=1;i<=a.length;i++) for(let j=1;j<=b.length;j++) dp[i][j] = a[i-1] === b[j-1] ? 1+dp[i-1][j-1] : Math.max(dp[i-1][j], dp[i][j-1]); return dp[a.length][b.length]; }",
    "function countWays(n) { if (n <= 1) return 1; return countWays(n - 1) + countWays(n - 2); }",
    "function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }"
]
