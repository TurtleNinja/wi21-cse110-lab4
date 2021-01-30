1. The length of `prices` will be printed out. The `for` loop stops when `i` equals the length of `prices`, and variable `i` was declared with `var` which has the functional-scope. Therefore after the loop, the value of `i` will be printed.
2. The value of `discountedPrice` will be printed. Same with `i`, `discountedPrice` was declared with `var`, so it will be available for printed after the loop.
3. The last value assigned to `finalPrice` will be printed. Again, `finalPrice` was declared with `var`, thus the value is available everywhere inside the function.
4. The function will return `[50, 100, 150]`. The function calculates and returns the price in `prices` after 50% discount.
5. `ReferenceError`. `i` was declared with keyword `let` inside the for loop, so it is not available for reference outside of the loop.
6. `ReferenceError`. `discountedPrice` was declared with keyword `let` inside the for loop, so it is not available for reference outside of the loop.
7. The last value assigned to `finalPrice` will be printed. Because `finalPrice` was declared with `let` outside the for loop, it is available in the scope of the whole function.
8. `[50, 100, 150]`. The function calculates and returns the price in `prices` after 50% discount.
9. `ReferenceError`. `i` was declared with keyword `let` inside the for loop, so it is not available for reference outside of the loop.
10. `ReferenceError`. `discountedPrice` was declared with keyword `const` inside the for loop and is not available for reference outside of the loop.
11. `0` will be printed. Because `finalPrice` is a `const` variable, it cannot be changed once assigned at line 3.
12. `[0,0,0]`. The `finalPrice` is `0` and cannot be changed, so everytime the value `0` is pushed to `discounted` inside the for loop. Note that `discounted` is an object, even though the reference cannot be changed, the value can be changed, meaning we can push values to the list.

13. 
    a. `student.name` 
    b. `student['Grad Year']` 
    c. `student.greeting()` 
    d. `student['Favorite Teacher'].name` 
    e. `student.courseLoad[0]` 

14. 
    a. `32`. `3` is specified as string, so `+` is converted to string concatenation
    b. `1`. `-` is a mathematical operations, so both sides are converted to numeric values.
    c. `3`. `null` is converted to numeric value `0`, and then added to `3`.
    d. `3null`. `'3'` is explicitedly specified as string, so `null` is automatically converted to string and appended to `3`.
    e. `4`. `true` is converted to numeric value `1`, and then added to `3`.
    f. `0`. This case `false` and `null` are autoconverted to numerical values which are both zeros. Adding together resulting in 0.
    g. `3undefined`. `'3'` is explicitedly specified as string, so `undefined` is automatically converted to string and appended to `3`.
    h. `NaN`. Because of `-`, JS expected values that can be converted to numbers, and `undefined` is `NaN` in numeric conversion.
15. 
    a. `true`. The numeric conversion of `'2'` is 2 which is greater than 1.
    b. `false`. Both sides are strings, so this is a string comparison. Since '2' is greater than '1' in lexicographical order, '2' is greater than '12'.
    c. `true`. `'2'` is converted to numerica value 2, and this equal to 2.
    d. `false`. The data types on both sides does not match.
    e. `false`. The boolean value `true` is converted to numeric value `0` which is not equal to 2
    f. `true`. `Boolean(2)` converts to the boolean value of `true` and thus match the left hand side.
16. `==` is a comparison with auto type conversion. This can causes some confusion. For example, `false == ""` returns `true` because both `false` and `""` are converted to numeric value `0`. 
`===` is a strict comparison which check for equality without type conversion.
17. `How are you?` gets printed. The first comparison `2 == true` evaluates to `false` because the numeric value of `true` after type conversion is `0` which is not equal to `2`. In the `else if`, the value `2` is converted to the Boolean value `true`, and thus the code inside this block is executed.
18.
19. `[6, 8, 10]`. In `modifyArray`, for each value of `array`, append a new value that is obtained from the operations of the callback funtion `doSomething`. The function `doSomething` increases the value by 2, and then passing that value to another callback function specified as the second parameter. In this case, the second parameter is an anonymous function that doubles the value. In short, each value `x` will become `(x + 2) * 2`.
20.
21. 
```
1
2
3
4
```
