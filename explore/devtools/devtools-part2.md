1. The .value of input fields returns strings, not numbers. When calculateSum runs num1 + num2, the + operator concatenates them as strings instead of adding ("2" + "3" = "23").

2. Convert the inputs to numbers with Number() before passing them to calculateSum:

   let num1 = Number(document.getElementById("num1").value);
   let num2 = Number(document.getElementById("num2").value);

   See fix.png.
