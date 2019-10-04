let x = 10;
// function is created here (not invoked yet)
function bar() {
  console.log(x);
}
function foo() {
  x = 50;
  bar(); // invocation happens here
}
foo(); // will print 10
