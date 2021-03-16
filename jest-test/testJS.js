// function* generator(i) {
//   const x = yield i;
//   console.log(x);
//   yield i + 10;
// }

// var gen = generator(10);

// console.log(gen.next(1).value); // 10
 
//call函数实现 不能用箭头函数，因为箭头函数当外面没有function包裹时 this为window
// Function.prototype.mycall=function(context,...args){
//   if(typeof this !== 'function')
//     throw Error('!')
//   context = context || window
//   context.fn = this
//   let res
//   if(!!args)
//     res = context.fn(...args)
//   else
//     res = context.fn()
//   delete context.fn
//   return res
// }
// function testMycall(a,b){
//   console.log(this,a,b);
// }
// testMycall.mycall([2])

//apply实现
// Function.prototype.myapply = function(context,args){
//   if(typeof this !== 'function')
//     throw Error('!')
//   context = context || window
//   context.fn = this
//   let res
//   if(!!args)
//     res =context.fn(...args)
//   else 
//     res = context.fn()
//   delete context.fn
//   return res
// }
// function testMyapply(a,b){
//   console.log(this,a,b);
// }
// testMyapply.myapply([1])

//bind实现
// Function.prototype.mybind = function(context){
//   if(typeof this !== 'function')
//     throw Error('!')
//   context = context || {}
//   let fn = this
//   let arg=[...arguments].slice(1)
//   return function F(){
//     if(this instanceof F ){
//       return new fn(...arg,...arguments)
//     }
//     return fn.call(context,...arg,...arguments)
//   }
// }
// function testMybind(a,b,c){
//   console.log(this);
//   console.log(a,b,c);
//   return a+b+c
// }
// let mybind = testMybind.mybind([1],2)
// console.log(mybind(3,4)); 