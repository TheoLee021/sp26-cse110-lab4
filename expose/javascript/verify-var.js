// Verification for Part 1 Q1, Q2 (var declaration)
function sumValues(num1, num2, add) {
  if (add) {
    var result = 0;
    result = num1 + num2;
    console.log('values added: ', result);
  } else return;
  console.log('final result: ', result);
}

sumValues(10, 10, true);
