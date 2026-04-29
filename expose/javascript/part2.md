# Part 2

1. 3. var i has function scope, so it survives outside the for loop. The loop exits once i < prices.length is false, leaving i at 3.

2. 150. var discountedPrice also has function scope. The last iteration's value (300 * 0.5 = 150) is still accessible at line 13.

3. 150. var finalPrice is declared at the top of the function and reassigned each iteration. After the last iteration its value is 150.

4. [50, 100, 150]. The discounted array collects each finalPrice pushed during the loop: 50, 100, 150.

5. ReferenceError: i is not defined. let i is block-scoped to the for loop, so it is not accessible at line 12.

6. ReferenceError: discountedPrice is not defined. let discountedPrice is also block-scoped (declared inside the for block), so it dies once the loop exits.

7. 150. let finalPrice is declared at the top of the function (outside any block), so it remains accessible. Its final reassigned value is 150.

8. [50, 100, 150]. The discounted array, populated during the loop, is returned as is.

9. ReferenceError: i is not defined. The for-loop counter cannot be const (because i++ would be a reassignment), so the code uses let i. let i is block-scoped, so it does not exist at line 11.

10. 3. const length = prices.length is declared at the top of the function and is accessible at line 12. prices.length is 3.

11. [50, 100, 150]. Without Math.round, prices[i] * (1 - discount) is pushed directly: 50, 100, 150 (the inputs happen to produce integers).

12. 
	A. student.name
	B. student['Grad Year']
	C. student.greeting()
	D. student['Favorite Teacher'].name
	E. student.courseLoad[0]

13. 
	A. '32'. With one string operand, + performs concatenation.
	
	B. 1. The - operator converts both sides to numbers. 3 - 2 = 1.
	
	C. 3. null converts to 0. 3 + 0 = 3.
	
	D. '3null'. With one string operand, + concatenates. null becomes the string 'null'.
	
	E. 4. true converts to 1. 1 + 3 = 4.
	
	F. 0. false converts to 0, null converts to 0.
	
	G. '3undefined'. With one string operand, + concatenates. undefined becomes the string 'undefined'.
	
	H. NaN. The - operator converts both sides to numbers. undefined converts to NaN.

14. 
	A. true. With one numeric operand, '2' converts to 2. 2 > 1.
	
	B. false. With both string operands, comparison is lexicographic. '2' (char code 50) > '1' (char code 49), so '2' < '12' is false.
	
	C. true. == performs coercion. '2' converts to 2.
	
	D. false. === does no coercion. number ≠ string.
	
	E. false. == coerces. true becomes 1. 1 ≠ 2.
	
	F. true. Boolean(2) returns true. true === true.

15. == is loose equality. When the operand types differ, it automatically coerces one side (typically to a number) before comparing values. For example, 2 == '2' is true because '2' is converted to 2.

    === is strict equality. It performs no type coercion and requires both type and value to match. For example, 2 === '2' is false because the types (number and string) differ.

16. See part2-question16.js

17. Result: [2, 4, 6]

    When modifyArray([1, 2, 3], doSomething) is called, the callback parameter receives the doSomething function itself as a value (not its return value). Inside the loop, callback(array[i]) is invoked each iteration and the result is pushed to newArr:

    - i=0: doSomething(1) = 2 → newArr = [2]
    - i=1: doSomething(2) = 4 → newArr = [2, 4]
    - i=2: doSomething(3) = 6 → newArr = [2, 4, 6]

18. See part2-question18.js

19. Output order: 1, 4, 3, 2
