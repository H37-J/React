//closer

function Counter(){
    var counter=0;

    this.increase=function(){
        return ++counter;
    }

    this.decrease=function(){
        return --counter;
    }
};

const counter=new Counter();

console.log(counter.increase());
console.log(counter.decrease());

var arr=[];

for(var i=0; i<5; i++){
    arr[i]=(function(id){
        return function(){
            return id;
        };
    }(i));
}

for(let i=0; i<5; i++){
    arr[i]=function(){
        return i;
    };
}

const arr=new Array(5).fill();

arr.forEach((v,i,arr)=>arr[i]=()=>i);

arr.forEach(f=>console.log(f()));


//Objct
var obj={};
obj1.name='Lee';

var obj2=new Object();
obj.name='Lee2';

function F(){}
var obj3=new F();
obj.name='Lee';



//ProtoType

function Person(name){
    this.name=name;
}


Person.prototype.setName=function(name){
    this.name=name;
};

Person.prototype.getName=function(){
    return this.name;
}

var me=new Person('h');
var me2=new Person('h2');

console.log(Person.prototype);
// Person { setName: [Function], getName: [Function] }

console.log(me);  // Person { name: 'Lee' }
console.log(you); // Person { name: 'Kim' }
console.log(him); // Person { name: 'choi' }

var Parent=(function(){

    function Parent(name){
        this.name=name;
    }

    Parent.prototype.sayHi=function(){
        console.log('Hi'+this.name);
    }

    return parent;
}());
//
var Child=(function(){
    function Child(name){
        this.name=name;
    }

    Child.prototype=new Parent();

    Child.prototype.sayHi=function(){
        console.log(this.name);
    }
}());

var parent = {
    name: 'parent',
    sayHi: function() {
      console.log('Hi! ' + this.name);
    }
  };
  
  // create 함수의 인자는 객체이다.
  var child = Object.create(parent);
  child.name = 'child';
  
  // var child = Object.create(parent, {name: {value: 'child'}});
  
  parent.sayHi(); // Hi! parent
  child.sayHi();  // Hi! child
  
  console.log(parent.isPrototypeOf(child)); // true
 
  
  // 캡슐화, 많은 모듈에 쓰임

  var person=function(arg){
      var name =arg ? arg: '';

      return{
          getName:function(){
              return name;
          },
          setName:function(arg){
              name=arg;
          }
      }
  }


  var me=Person('lee');

  var name=me.getName();


  var person=function(arg){
      var o=arg;

      return{
          getPersonInfo:function(){
              return o;
          }
      }
  }

//   반환된 객체가 함수 person의 프로토타입에 접근할 수 없다는 것은 person을 부모 객체로 상속할 수 없다는 것을 의미한다.
// 함수 person을 부모 객체로 상속할 수 없다는 것은 함수 person이 반환하는 객체에 모든 메소드를 포함시켜야한다는 것을 의미한다.

// 이 문제를 해결하기 위해서는 객체를 반환하는 것이 아닌 함수를 반환해야 한다.


var Person=function(){
    var name;

    var F=function(arg){name=arg?arg:'';};

    F.prototype={
        getName:function(){
            return name;
        },
        setName:function(arg){
            name=arg;
        }
    };

    return F;
}();

var me = new Person('Lee');

console.log(Person.prototype === me.__proto__);

console.log(me.getName());
me.setName('Kim')
console.log(me.getName());



//정규표현식
const targetStr = 'AA BB Aa Bb';

// 'A'를 대소문자 구분없이 반복 검색
const regexr = /A/ig;

console.log(targetStr.match(regexr)); // [ 'A', 'A', 'A', 'a' ]

const targetStr = 'AA AAA BB Aa Bb';

// 'A'가 한번이상 반복되는 문자열('A', 'AA', 'AAA', ...)을 반복 검색
const regexr = /A+/g;

console.log(targetStr.match(regexr)); // [ 'AA', 'AAA', 'A' ]

const targetStr = 'AA BB Aa Bb 24,000';

// '0' ~ '9'가 한번 이상 반복되는 문자열을 반복 검색
const regexr = /[0-9]+/g;

console.log(targetStr.match(regexr)); // [ '24', '000' ]

const targetStr = 'AA BB Aa Bb 24,000';

// '0' ~ '9' 또는 ','가 한번 이상 반복되는 문자열을 반복 검색
let regexr = /[\d,]+/g;

console.log(targetStr.match(regexr)); // [ '24,000' ]

// '0' ~ '9'가 아닌 문자(숫자가 아닌 문자) 또는 ','가 한번 이상 반복되는 문자열을 반복 검색
regexr = /[\D,]+/g;

console.log(targetStr.match(regexr)); // [ 'AA BB Aa Bb ', ',' ]

const url = 'http://example.com';

// 'http'로 시작하는지 검사
// ^ : 문자열의 처음을 의미한다.
const regexr = /^http/;

console.log(regexr.test(url)); // true



//Array

const arr=[];
arr[1]=1;
console.log(Object.keys(arr));

delete arr[1];
// 요소 값만이 아니라 요소를 완전히 삭제한다
// splice(시작 인덱스, 삭제할 요소수)
numbersArr.splice(2, 1); // (3) ["zero", "one", "three"]

//순회
const arr=[0,1,2,3];
arr.fo=10;

for(const key in arr){
    console.log(key,arr[key]);
}

arr.forEach((item,index)=>console.log(index,item));


//from
const arr1=Array.from('hello');
const arr2=Array.from({length:2,0:'1',1:'b'});

// Array.from의 두번째 매개변수에게 배열의 모든 요소에 대해 호출할 함수를 전달할 수 있다.
// 이 함수는 첫번째 매개변수에게 전달된 인수로 생성된 배열의 모든 요소를 인수로 전달받아 호출된다.
const arr3 = Array.from({ length: 5 }, function (v, i) { return i; });
console.log(arr3); // [ 0, 1, 2, 3, 4 ]

// 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.
const arr1 = Array.of(1);
console.log(arr1); // // [1]

const arr2 = Array.of(1, 2, 3);
console.log(arr2); // [1, 2, 3]

const arr3 = Array.of('string');
console.log(arr3); // 'string'

arr.indexOf(2);
arr.push(3);
arr.includes(3);
arr.concat(arr1);
let result=arr.join(); //기본구문자 ,로 구문후 합치기

const items = ['a', 'b', 'c'];


//slice
// items[0]부터 items[1] 이전(items[1] 미포함)까지 반환
let res = items.slice(0, 1);
console.log(res);  // [ 'a' ]

// items[1]부터 items[2] 이전(items[2] 미포함)까지 반환
res = items.slice(1, 2);
console.log(res);  // [ 'b' ]

// items[1]부터 이후의 모든 요소 반환
res = items.slice(1);
console.log(res);  // [ 'b', 'c' ]

// 인자가 음수인 경우 배열의 끝에서 요소를 반환
res = items.slice(-1);
console.log(res);  // [ 'c' ]

res = items.slice(-2);
console.log(res);  // [ 'b', 'c' ]

// 모든 요소를 반환 (= 복사본(shallow copy) 생성)
res = items.slice();
console.log(res);  // [ 'a', 'b', 'c' ]

// 원본은 변경되지 않는다.
console.log(items); // [ 'a', 'b', 'c' ]

//shallow copy
const todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ];
  
  // shallow copy
  const _todos = todos.slice();
  // const _todos = [...todos];
  console.log(_todos === todos); // false
  
  // 배열의 요소는 같다. 즉, 얕은 복사되었다.
  console.log(_todos[0] === todos[0]); // true


  function sum(){
      const arr=Array.prototype.slice.call(arguments);
      console.log(arr);

      return arr.reduce(function(pre,cur){
          return pre+cur;
      });
  }

  console.log(sum(1,2,3));


  function sum(){
      const arr=[...arguments];

      const arr=Array.from(arguments);
  }


  //slice
  const items1 = [1, 2, 3, 4];

// items[1]부터 2개의 요소를 제거하고 제거된 요소를 배열로 반환
const res1 = items1.splice(1, 2);

// 원본 배열이 변경된다.
console.log(items1); // [ 1, 4 ]
// 제거한 요소가 배열로 반환된다.
console.log(res1);   // [ 2, 3 ]

const items2 = [1, 2, 3, 4];

// items[1]부터 모든 요소를 제거하고 제거된 요소를 배열로 반환
const res2 = items2.splice(1);

// 원본 배열이 변경된다.
console.log(items2); // [ 1 ]
// 제거한 요소가 배열로 반환된다.
console.log(res2);   // [ 2, 3, 4 ]

const items=[1,4];

Array.prototype.splice.apply(items,[1,0].concat([2,3]));

console.log(items);

//Array forEach
const numbers=[1,2,3];
let pows=[];

for(let i=0; i<numbers.length; i++){
    pows.push(numbers[i]**2);
}

numbers.forEach(function(item){
    pows.push(item**2);
})

numbers.forEach(item=>pows.push(item**2));

function Square(){
    this.array=[];
}

Square.prototype.multiply=function(arr){
    arr.forEach(function(item){
        this.array.push(item*item);
    },this);
};

//map
const numbers = [1, 4, 9];

// 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행
const roots = numbers.map(function (item) {
  // 반환값이 새로운 배열의 요소가 된다. 반환값이 없으면 새로운 배열은 비어 있다.
  return Math.sqrt(item);
});

// 위 코드의 축약표현은 아래와 같다.
// const roots = numbers.map(Math.sqrt);

// map 메소드는 새로운 배열을 반환한다
console.log(roots);   // [ 1, 2, 3 ]
// map 메소드는 원본 배열은 변경하지 않는다
console.log(numbers); // [ 1, 4, 9 ]