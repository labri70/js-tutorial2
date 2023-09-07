import _ from 'lodash';

// JS Data


// *************************** 문자 ***************************
// String() 객체 :  일련의 문자를 표현하고 조작하는데 사용됩니다.

// String: "", '', ``
// Number
// Boolean :  true, false
// nudefined
// null
// Array :  []
// Object :  {}

// String.prototype.indexOf()
// const result = 'Hello World'.indexOf("World");    //  <=  String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환합니다. 
const result = 'Hello World'.indexOf("Javascript");        //  <=  일치하는 값이 없으면 -1을 반환합니다.

console.log(result);

const str = '0123';
console.log(str);
console.log(str.length);                              // 문자열 길이 확인 :  length

const str1 = 'Hello World!';
console.log(str1.indexOf("World!"));                   // index 기준 0에서 시작 6번째 문자
console.log(str1.indexOf("Test!") !== -1);            // false

// slice() 메소드는 문자열의 일부를 추출하면서 새로운 문자열을 반환합니다.
// String.slice(beginIndex[, endIndex])     <= 0(beginIndex)부터 시작하는 추출 종료점 인덱스(endIndex)로 그 직전까지 추출됩니다.
console.log(str1.slice(0, 3));                        


// String.replace    <=  일부 또는 전부가 대체된 String 새 문자열을 반환합니다.
console.log(str1.replace('World!', 'Javascript!'));
console.log(str1.replace(' World!', ''));


// String.match()    <=  match() 메서드는 match()이 문자열을 정규식 String 과 비교한 결과를 검색합니다 .
const str2 = 'abc@gmail.com';
console.log(str2.match(/.+(?=@)/)[0]);


// String.trim()      <= trim()는 String이 문자열의 양쪽 끝에서 공백을 제거하고 원래 문자열을 수정하지 않고 새 문자열을 반환합니다.
const str3 = '  Hello World  ';
console.log(str3.trim());



// *************************** 숫자와 수학 ***************************

// Math() 객체 : 네임 Math스페이스 개체에는 수학 상수 및 함수에 대한 정적 속성과 메서드가 포함되어 있습니다.

const pi= 3.14159265358979;
console.log(pi);

const res1 = pi.toFixed(2);
console.log(res1);
console.log(typeof res1);     // string


const integer = parseInt(res1);     // 숫자로 들어 있는 문자일 경우 숫자만 반환해서 정수로 추출
const float = parseFloat(res1)      // 숫자로 들어 있는 문자일 경우 소숫점까지 포함, 유지해서 숫자로 반환해서 추출
console.log(integer);
console.log(float);
console.log(typeof integer, typeof float);    // number,  number


// Math.abs() - 메서드는 숫자의 절대값을 반환합니다.
console.log('abs: ', Math.abs(-12));              // 12
console.log('min: ', Math.min(2, 7));             // 2
console.log('max: ', Math.max(2, 7));             // 7
console.log('ceil: ', Math.ceil(3.14));           // 4
console.log('floor: ', Math.floor(3.14));         // 3    <=  내림처리
console.log('round: ', Math.round(3.14));         // 3
console.log('random: ', Math.random());           // 0 ~ 1 사이 난수를 랜덤하게 반환
console.log('random: ', Math.floor(Math.random() * 10));           // 0 ~ 10 사이 난수를 랜덤하게 반환



// *************************** 배열 데이터 ***************************

const numbers = [1, 2, 3, 4, 5];
const fruits = ['Apple', 'Banana', 'Cherry'];

console.log(numbers[1]);
console.log(fruits[2]);


// Array.length :  배열의 길이 체크해주는 속성
console.log(numbers.length);
console.log(fruits.length);
console.log([1, 2].length);
console.log([].length);


// Array.concat() : 배열의 데이터 병합해서 새로운 배열 데이터로 반환됨, 이때 기존의 원본 데이터는 손상되지 않고 그대로 유지가 됩니다!
console.log(numbers.concat(fruits));
console.log(numbers);
console.log(fruits);


// forEach() :  반복문
// fruits.forEach(function(element, index, array){
//   console.log(element, index, array);
// });
// fruits.forEach(function(fruit, index){
//   console.log(fruit, index);
// });

// const a = fruits.forEach(function(fruit, index){
//   console.log(`${fruit}, ${index}`);
// });
const a = fruits.forEach((fruit, index) => {
  console.log(`${fruit}, ${index}`);
});

console.log(a);    // 특별한 반환값이 없으므로 'undefined' 출력


// map() 메서드는 내부에 콜백함수에서 반환(return)된 특정한 데이터를 새로운 배열로 반환 해줍니다!
// const b = fruits.map(function(fruit, index){
//   return `${fruit}-${index}`;
// });
// const b = fruits.map(function(fruit, index){
//   return {
//     id: index,
//     name: fruit
//   }
// });
const b = fruits.map((fruit, index) => ({
  id: index,
  name: fruit
}));

console.log(b);   


// Array.filter()
// const c = numbers.map(number => {           // <= 원본 데이터는 변화가 없고 새로운 배열데이터로 반환됨!
//   return number < 3;
// });
const c = numbers.map(number => number < 3);
console.log(c);

// const d = numbers.filter(number => {        // <= 원본 데이터는 변화가 없고 새로운 배열데이터로 반환됨!
//   return number < 3;
// });
const d = numbers.filter(number => number < 3);
console.log(d);

console.log(numbers);


// Array.find() :  
// find()인스턴스 메서드는 제공된 Array테스트 기능을 충족하는 제공된 배열의 첫 번째 요소를 반환합니다. 
// 테스트 기능을 만족하는 값이 없으면 'undefined' 가 반환됩니다.

const e = fruits.find(fruit => /^B/.test(fruit));          // 찾은 배열 데이터를 반환해 줌
console.log(e);

const f = fruits.findIndex(fruit => /^C/.test(fruit));    // 찾은 배열 데이터의 인덱스 번호를 반환해 줌
console.log(f);


// Array.includes() - 해당 배열에 특정데이터가 들어있는지 없는지를 확인할 때 사용하는 메서드
const g =  numbers.includes(3);
console.log(g);

const h =  fruits.includes('grapes');
console.log(h);


// 아래 메서드들은 원본 데이터가 수정됨에 주의!
// Array.push() vs Array.unshift()   <= 데이터 앞뒤 추가
numbers.push(6);
console.log(numbers);

numbers.unshift(0);
console.log(numbers);


// Array.pop() vs Array.shift()       <= 데이터 앞뒤 제거
numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);


// Array.splice(startIndex, deleteCount(Optional), item1, item2, ...(Optional))
// startIndex : 배열의 변경을 시작할 index, 음수인 경우 배열의 끝에서부터 요소를 센다.
// deleteCount(Optional) : 배열에서 제거할 요소의 수, 0일 경우 삭제가 되지 않는다.
// item1, item2, ...(Optional)) : 배열에 추가할 요소, 생략할 경우 요소를 제거하기만 한다.
numbers.splice(2, 1);
console.log(numbers);

fruits.splice(2, 0, 'orange');
console.log(fruits);


// Array.reverse()
numbers.reverse();
console.log(numbers);

fruits.reverse();
console.log(fruits);



// *************************** 객체 데이터 ***************************

/* Object.assign() : 
  - Object.assign() 메서드는 출처 객체들의 모든 열거 가능한 자체 속성을 복사해 대상 객체에 붙여넣습니다. 그 후 대상 객체를 반환합니다.
  - target : 목표 객체. 출처 객체의 속성을 복사해 반영한 후 반환할 객체입니다.
  - sources : 출처 객체. 목표 객체에 반영하고자 하는 속성들을 갖고 있는 객체들입니다.
*/

const userAge = {
  // key:value 
  name: 'John',
  age: 25
}
const userEmail = {
  name: 'John',
  email: 'abc@gmail.com'
}

// const target = Object.assign(userAge, userEmail);
// console.log(target);
// console.log(userAge);
// console.log(target === userAge);   // 같은 메모리의 위치를 참조하고 있어서 True가 반환

// 원본의 데이터는 손상하지 않고, 여러개의 객체를 통합하고 싶을 때 사용방법
// => 합치고 싶은 객체들('userAge, userEmail' 등)을 출처객체로 만들어 주고, 그런 다음 빈객체 데이터('{}')에 병합시켜줌!
const target = Object.assign({}, userAge, userEmail);       
console.log(target);
console.log(userAge);
console.log(target === userAge);   // 다른 메모리의 위치를 참조하고 있어서 True가 반환


// 참조형 데이터 : {} , [] , function(){}    <= 메모리에 저장되고, 저장된 데이터를 참조만 하는 데이터라고해서 참조형데이터라 불린다.
const num1 = {k: 123}
const num2 = {k: 123}
console.log(num1 === num2);         // 다른 메모리의 위치를 참조하고 있어서 False가 반환


const person1 = {
  name: 'Kai',
  age: 35,
  email: 'abc@abc.com'
}

// Key 값 추출
const keys = Object.keys(person1);
console.log(keys);      // ['name', 'age', 'email']

console.log(person1.name + ', ' + person1['age']);

// Value 값 추출
const values = keys.map(key => person1[key]);
console.log(values);    // ['Kai', 35, 'abc@abc.com']



// *************************** 구조 분해 할당 ***************************
const person2 = {
  name: 'Ellis',
  age: 29,
  email: 'abc@gamil.com',
  address: 'USA'
}

// 객체 데이터에서 내용을 구조를 분해해서 필요한 속성들만 꺼내서 변수에 담아 바로 사용이 가능!
// const {name, age, email, address} = person2;   // ex) user.name

// 기존에 선언되어 있지 않은 데이터 변수에 기본값 설정 가능! - 단, 선언이 될 경우는 기본값은 무시됨!
const {name, age, email, address = "korea"} = person2;   // ex) user.name

// 참고) 변수의 이름을 변경해서 사용하고 싶을 경우 설정방법 - const {name: "변수명", age, email, address = "korea"} = person2;

console.log(name);
console.log(`사용자의 이름은 ${name}입니다.`);
console.log(`${name}의 나이는 ${age}세입니다.`);
console.log(`${name}의 이메일 주소는 ${email}입니다.`);
console.log(address);


// 배열 구조분해 할당 - 순서대로 추출
const person3 = ['Blake', 'Jack', 'Owen'];
const [man1, man2, man3] = person3;
console.log(`${man1}, ${man2}, ${man3}`);

// 원하는 속성 하나만 추출시 아래처럼 사용이 가능합니다. 순서대로 추출하므로 ',' 는 남겨두셔야 되며, 이런 형식이 이상하게 보이겠지만 엄연히 자바스크립트에서 허용하는 문법입니다!
const [, p2, ] = person3;    
console.log(p2);



// *************************** 전개 연산자 (Spread) ***************************
const arr = ['Apple', 'Banana', 'Cherry'];
// console.log(arr);

// 전개 연산자는 배열데이터에 들어있는 ','로 구분되어 있는 각각의 아이템을 전개되서 출력하게 해 줌!
console.log(...arr);  // <= console.log('Apple', 'Banana', 'Cherry'); 와 동일하게 출력 됨.

function toObject(n1, n2, n3){
  return {
    n1: n1,
    n2: n2,
    n3: n3
  }
}
console.log(toObject(...arr));  // <= console.log(arr[0], arr[1], arr[2]);  처럼 수동으로 넣는 수고를 들어 줌!


// 전사연산자의 효용성은 데이터 추가나 삭제처럼, 데이터의 변동이 있을 경우 유용함
const arr1 = ['Apple', 'Banana', 'Cherry', 'Orange'];
console.log(...arr1);

// function toObject1(n1, n2, ...n3){     // rest parameter (나머지 매개변수:나머지 인수를 모두 받는 변수가 됨!)
//   return {
//     n1: n1,
//     n2: n2,
//     n3: n3
//   }
// }

// 변수명과 변수값이 같을 경우 축약형으로 작성 가능!
// function toObject1(n1, n2, ...n3){   
//   return {
//     n1,
//     n2,
//     n3
//   }
// }

// function toObject1(n1, n2, ...n3){   
//   return { n1, n2, n3 }
// }

// 객체 데이터 반환시 반드시 소괄호 '()'안에서 객체데이터를 정의 주어야만 함수밖으로 반환(return) 처리가 됨니다!
const toObject1 = (n1, n2, ...n3) => ({ n1, n2, n3 });  

console.log(toObject1(...arr1));



// *************************** 불변성 ***************************
// 데이터 불변성(Immutability)
// 원시데이터 : String, Number, Boolean, nudefined, null
// 참조데이터 : Object, Array, Function

// 아래는 원시 데이터 메모리 주소 참고 샘플 :
// ----------------------------------------------
// |1:   1     |2:   4     |3:   7     4:
// ----------------------------------------------


let num01 = 1;
let num02 = 4;

console.log(num01, num02, num01 === num02);   // 1, 4, false(같은 메모리 주소를 바라보고 있지 않음!)

num02 = num01;  // 재할당   
console.log(num01, num02, num01 === num02);   // 1, 1, true(같은 메모리 주소를 바라보고 있음!)

num02 = 7;
console.log(num01, num02, num01 === num02);

// 새로운 원시 데이터를 사용했을 때 그 원시 데이터가 기존의 메모리에 같은 값이 들어 있다면, 그 원시 데이터를 새로운 메모리에 새로운 데이터로 담는 것이 아니라 기존에 존재하는 메모리 주소를 바라보도록 하는데, 이것을 불변한다라고 해서 '자바스크립트 데이터의 불변성'이라 부릅니다. 
// 즉, 원시형 데이터는 생긴것(값)이 다르면 서로 다른 데이터다라고 이해하면 됩니다. 그래서 원시데이터들은 이러한 불변성을 가지고 있다고 보면 됩니다!
let num03 = 1;      
console.log(num02, num03, num02 === num03);   // 1, 1, true


// 참조형 데이터 불변성이 없으며, 새로운 원시 데이터를 사용했을 때 새로운 메모리에 새로운 데이터로 담는다. 이를 가변성이라 한다.
// 아래는 참고형 데이터 메모리 주소 참고 샘플 :
// ----------------------------------------------
// |1: {k: 2}   |2: {k: 2}   |3:        4:
// ----------------------------------------------

let data1 = { k: 1 }
let data2 = { k: 1 }

console.log(data1, data2, data1 === data2);     // {k: 1} {k: 1} false (같은 메모리 주소를 바라보고 있지 않음!)

data1.k = 7;  
data2 = data1;  // 재할당  (data1, data2 는 같은 메모리 주소를 바라보고 있음!)
console.log(data1, data2, data1 === data2);     // {k: 7} {k: 7} true


// 참조 데이터를 사용시 주의할 점 :
// 같은 메모리를 바라보고 있을 때 값을 수정하게 되면, 같은 곳을 바라보고 있는 다른 데이터도 같이 수정이 된다.
// 참조형 데이터는 할당 연산자를 사용할 때 복사가 되서 새로운 객체 데이터가 만들어 지는게 아니고, 참조 주소만 옮겨 간다고 보면되는데 결국, 주소만 같은 곳을 바라보도록 만들어 주는게 됩니다. 그래서 어느 한쪽을 수정하면 다른 쪽도 같이 수정되게 됩니다.
data1.k = 2;
console.log(data1, data2, data1 === data2);     // {k: 2} {k: 2} true (같은 메모리 주소를 바라보고 있어서 data2도 같이 바뀜!)

let data3 = data2;   // 재할당  (data2, data3 는 같은 메모리 주소를 바라보고 있음!)
console.log(data1, data2, data1 === data2);     // {k: 2} {k: 2} true

data1.k = 9;
console.log(data1, data2, data3, data1 === data3);     // {k: 9} {k: 9} {k: 9} true




// *************************** 얕은 복사(Shallow Copy), 깊은 복사(Deep Copy) ***************************


// 아래는 데이터 메모리 주소 참고 샘플 :
// ----------------------------------------------
// |1:        |2:        |3:        4:
// ----------------------------------------------

const myUser = {
  name: 'Tom',
  age: 25,
  emails: ['abc@abc.com']
}
// const copyUser = myUser;
// console.log(copyUser === myUser);       // true (같은 메모리 주소를 바라보고 있음!)

// myUser.age = 22;                        // 데이터를 변경하면 같이 바뀜!
// console.log('myUser', myUser);          // {name: 'Tom', age: 22, emails: Array(1)}
// console.log('copyUser', copyUser);      // {name: 'Tom', age: 22, emails: Array(1)}

console.log('-------');
console.log('-------');


// *************************** 얕은 복사(Shallow Copy)
 

// 의도치 않게 같이 바뀌는 부분을 보완하기 위해 '복사'라는 개념을 사용할 수 있습니다!
// 복사 방법(1) : Object.assign(대상객체, 출처객체) 사용
const copyUser1 = Object.assign({}, myUser);
console.log(copyUser1 === myUser);         // false (다른 메모리 주소를 바라보고 있음!)

myUser.age = 22;                        // 데이터를 변경하면 바뀌지만 기존원본 데이터는 그대로 유지!
console.log('myUser', myUser);          // {name: 'Tom', age: 22, emails: Array(1)}
console.log('copyUser', copyUser1);     // {name: 'Tom', age: 25, emails: Array(1)}


// 복사 방법(2) : 전개연산자(...) 사용도 가능!
const copyUser2 = {...myUser};
console.log(copyUser2 === myUser);      // false


myUser.age = 33;                        // 데이터를 변경하면 바뀌지만 기존원본 데이터는 그대로 유지!
console.log('myUser', myUser);          // {name: 'Tom', age: 33, emails: Array(1)}
console.log('copyUser', copyUser2);     // {name: 'Tom', age: 25, emails: Array(1)}


myUser.emails.push('neo#abc.com');
const copyUser3 = myUser;
console.log(myUser.emails === copyUser3.emails);
console.log('myUser', myUser);          // {name: 'Tom', age: 33, emails: Array(2)}
console.log('copyUser', copyUser3);     // {name: 'Tom', age: 33, emails: Array(2)}



// *************************** 깊은 복사(Deep Copy)
const myUser1 = {
  name: 'Tom',
  age: 25,
  emails: ['abc@abc.com']
}

// _.cloneDeep(value) - _.clone이 방법은 value를 재귀적(반복적)으로 복제한다는 점을 제외하면 비슷합니다.
const copyUser4 = _.cloneDeep(myUser1);   //  <= 'lodash' 를 이용한 깊은 복사!
console.log(copyUser4 === myUser1);      // false  (복제된 데이터는 새로운 메모리로 할당해서 바라보는 메모리가 다르므로 'false'를 반환함!)


// 정리 :
// 참조형 데이터를 복사해야 할 경우 내부에 또다른 참조 데이터가 없다는 전제하에는 얕은 복사를 사용하고, 'emails: ['abc@abc.com']' 처럼 내부에 또다른 참조 데이터가 있다면 깊은 복사를 고려해야 합니다. 깊은 복사는 '_.cloneDeep(value)' 도움을 받아 개발하는 것이 좋을 것같습니다.

