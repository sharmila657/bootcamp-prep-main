// Test One Restrictions: Do not declare any new variable with the let keyword
let testOneMessage = 'test succeeding';

function testOne() {
  return testOneMessage;
}


// Test Two Restrictions: Do not change any code in the body of testTwo
// (you can edit helperFunc though)
let testTwoMessage = 'test succeeding';

function testTwo() {
  helperFunc();
  return testTwoMessage;
}

function helperFunc(a) {
  a = 'test succeeding';
  return a;
}


// Test Three Restrictions: Type only a single character in either testThree or getMessage
let testThreeMessage = 'test succeeding';

function testThree(testThreeMessage) {
  if (testThreeMessage) {
    testThreeMessage = 'test succeeding';
  }

  let msg = getMessage();
  return msg;

  function getMessage(value) {
    if (value) {
      return testThreeMessage;
    }

    return testThreeMessage;
  }

}


// Test Four Restrictions: Delete only a single character from any function.
let testFourMessage = 'test succeeding';

function testFour(msg) {
  function innerFunc(msg) {
    msg = msg

    function doubleInner(msg) {
      testFourMessage = msg;
      return testFourMessage;
    }

    testFourMessage = doubleInner('test succeeding')
  }

  innerFunc(testFourMessage);

  msg = testFourMessage;
  return testFourMessage;
}
