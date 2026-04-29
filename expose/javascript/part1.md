# Part 1

1. values added:  20

2. final result:  20

3. var has function scope and ignores {} block boundaries. A variable declared inside a block (if/for/while/etc.) is accessible throughout the entire enclosing function, which can lead to unintended naming conflicts with other code.

4. values added:  20

5. ReferenceError: result is not defined
   let is block-scoped, so once execution leaves the if block, result no longer exists.

6. TypeError: Assignment to constant variable.
   Reassigning a const variable throws a TypeError at line 7, so execution stops before reaching line 9.

7. Same as Q6. The TypeError at line 7 halts function execution, so line 13's console.log is never reached.
