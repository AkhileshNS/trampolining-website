// Trampoline Function : The core function of this website
const trampoline = fn => (...args) => {
  let result = fn(...args)
  while (typeof result === 'function') {
    result = result()
  }
  return result
}

// Recursive Add Function : Add all numbers from n -> 1
// (5) -> 5+4+3+2+1
const recAdd = (n) => {
  if (n<=1) {
    return 1;
  }
  return n+recAdd(n-1);
}

console.log(recAdd(3));
// console.log(recAdd(32222)); // Causes stack overflow

// Recursive Add Function with trampolining
const _tcoRecAdd = (n, sum = 0) => {
  if (n<=1) {
    return sum+1;
  }
  return () => _tcoRecAdd(n-1, n+sum);
};
const tcoRecAdd = trampoline(_tcoRecAdd);

console.log(tcoRecAdd(32222));