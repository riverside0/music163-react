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

//instanceof
// function mytInstanceof(left,right){
//     let leftValue = left._proto_
//     let rightValue = right.prototype
//     while(leftValue !== null){
//         if(leftValue === right.prototype)
//             return true
//         else
//             leftValue = leftValue._proto_
//     }
// }
// console.log( mytInstanceof(new Array(),new Object()) );

//Object.create()
// function mycreacte(obj){
//      let F = function(){}
//      F.prototype = obj._proto_
//      return new F()
// }

//new
// function mynew(fn){
//     return function(){
//         let obj = {}
//         obj._proto_=fn.prototype
//         fn.call(obj,...arguments)
//         return obj
//     }
// }

//深拷贝
// function deepCopy(obj){
//     let copy = obj instanceof Array === 'array' ? [] : {}
//     for(let i in obj){
//         if(obj.hasOwnProperty(i))
//             copy[i]= typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i]
//     }
//     return copy
// }

//settimeout模拟setiterval 
//callee 是 arguments 对象的一个属性。它可以用于引用该函数的函数体内当前正在执行的函数

    // setTimeout(function(){console.log(1);setTimeout(arguments.callee, 500);}, 500);

//继承
// function superType(name){
//     this.name = name
// }

// function subType(name,age){
//     superType.call(this,name)
//     this.age=age
// }
// (function(superType,subType){
//     let prototype = Object.create(superType.prototype)//创建原型
//     prototype.constructor = subType//增强原型
//     subType.prototype = prototype//赋值原型
// })(superType,subType)

// console.log(new subType('a',1) instanceof superType)

//EventEmitter
// class EventEmitter{
//     constructor(){
//         this.events = this.events||new Map()
//     }
//     addListener(type,fn){
//         if(!this.events.has(type))
//             this.events.set(type,fn)
//     }
//     emit(type){
//         let handle = this.events.get(type)
//             handle.apply(this,[...arguments].slice(1))
//     }
// }

// let arr = [1, 2, [3, 4], [5, {b:2}, [{a:1}, 8, 9]]];
// function flat(arr){
//     let res = []
//     for(let item of arr){
//         if(Array.isArray(item))
//             res.push(...flat(item))
//         else
//             res.push(item)
//     }
//     return res
// }
// function flat(arr){
//     let res = []
//     let stack = [].concat(arr)
//     while(stack.length != 0){
//         let item = stack.pop()
//         if(Array.isArray(item))
//             stack.push(...item)
//         else
//             res.unshift(item)
//     }
//     return res
// }
// console.log(flat(arr))