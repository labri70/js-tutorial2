import _ from 'lodash';   // From 'node_modules


// ----------------------------------------------------------------------------------------
// 자바스크립트에서는 가져오기와 내보내기를 할 수 있으며, 이를 모듈이란 개념으로 사용합니다.
// ----------------------------------------------------------------------------------------

// Export : 아래 두가지 통로롤 통해 다른 파일에서 사용할 수 있도록 내보내기를 할 수 있습니다.
// 1) default export    ex) export default function(){};
// -  내보내기를 할 수 있는 기본 통로, 기본통로로 내보내기 할 경우 하나의 데이터만 보낼 수 있음! 즉, default export는 한번만 사용가능!  
// 2) named export      ex) export default function 함수명(){};
// - 이름을 설정해서 내보내기를 할 수 있는 통로, 이름을 설정해서 내보낼 경우는 여러개의 데이터를 보낼 수 있음!   


// -----------------------------------------------------------------------------------------
// Import : 다른 파일에서 사용할 수 있도록 내보내기 한 것을 가져와서 사용할 수 있습니다.

// 1) default 로 내보내기 한 것을 임포트한 경우:
// import checkType from './getType';    // getType.js에서 가져온 모듈은 사용할 때 사용할 이름(getType)은 변경할 수 있습니다!
// import random from './getRandom';    

// console.log(_.camelCase('the hello world'));
// console.log(checkType([1,2,3]));
// console.log(random(), random());

// 2) 이름을 지정해서 내보내기 한 것을 임포트한 경우:
import checkType from './getType';    
// import {random, user} from './getRandom';    // <= 객체 구조분해 한 것처럼 가져와서 사용
// import {random, user as person} from './getRandom';    // <= 객체 구조분해에서 처럼 변수명 변경 가능
import * as person from './getRandom';          // <= 객체 구조분해에서 처럼 변수명은 원하는 이름으로 사용 가능

console.log(_.camelCase('the hello world'));
console.log(checkType([1,2,3]));
// console.log(random());
// console.log(user);

console.log(person);
// console.log(person.default);
// console.log(person.random());
// console.log(person.user);



// *************************** Lodash 사용법 ***************************
const usersA = [
  {userId: '1', name: 'John'},
  {userId: '2', name: 'Kai'}
]

const usersB = [
  {userId: '1', name: 'John'},
  {userId: '3', name: 'Owen'}
]

const usersC = usersA.concat(usersB);
console.log('concat', usersC);

// _.uniqBy() : 하나의 배열데이터 안에서 특정한 하나의 속성 이름으로 고유한 값만 반환하는 메서드
console.log('uniqBy', _.uniqBy(usersC, 'userId'));     


// _.unionBy() : 여러개의 배열데이터 안에서 특정한 하나의 속성 이름으로 고유한 값만 반환하는 메서드
const usersD = _.unionBy(usersA, usersB, 'userId');   
console.log('unionBy', usersD);


const users = [
  {userId: '1', name: 'John'},
  {userId: '2', name: 'Kai'},
  {userId: '3', name: 'Blake'},
  {userId: '4', name: 'Finlay'},
  {userId: '5', name: 'Owen'}
];


// _.find() : 조건을 만족하는 컬렉션에서의 요소를 찾는 메소드
const foundUser = _.find(users, {name: 'Blake'});
const foundUserIndex = _.findIndex(users, {name: 'Blake'});

console.log(foundUser);
console.log(foundUserIndex);


// _.remove() : 조건을 만족하는 컬렉션에서의 요소를 찾은 다음 제거하는 메소드
_.remove(users, {name: 'John'})
console.log(users);


// _.forEach() : 배열 전체를 돌며 해당 배열의 요소에 직접적인 작업을 하는 메소드
_.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(`${key}: '${value}'`);
});

_.each([1, 2, 3], (value, index) => {
  console.log(`${index}: '${value}'`);
})


// _.includes() : 콜렉션에 해당 요소를 갖고 있는지를 확인한다.
const primes = [2,3,5,7,11,13,17];
console.log(_.includes(primes, 2));   // true
console.log(primes.includes(79));     // false




// *************************** JSON 사용법 ***************************
// JSON(제이슨, JavaScript Object Notation)은 속성-값 쌍(attribute–value pairs), 배열 자료형(array data types) 또는 기타 모든 시리얼화 가능한 값(serializable value) 또는 키-값 쌍으로 이루어진 데이터 오브젝트를 전달하기 위해 인간이 읽을 수 있는 텍스트를 사용하는 개방형 표준 포맷이다.

const users1 = {
  name: 'John',
  age: 28,
  emails: [
    'kai@gmail.com',
    'John@gmail.com'
  ]
}

console.log('users1', users1);

//  JSON.stringify(arg)는 객체를 문자열로 변환합니다.
const str = JSON.stringify(users1);
console.log('str', str);
console.log(typeof str);  // string

// JSON.parse(arg)는 문자열을 객체로 변환합니다.
const obj = JSON.parse(str);
console.log('obj', obj);
console.log(typeof obj);  // object


import myData from './myData.json' // JSON 파일의 경우 확장자까지 정확히 작성해 주어야 됩니다!

console.log(myData);



// *************************** Storage 사용법 ***************************
/* 브라우저 저장소 분류 : 
  웹스토리지는 쿠키와 달리 서버에 전송되지 않고 명시적으로만 전송 가능하기 때문에 서버에 부담이 가지 않습니다. 또한, 필요한 경우에만 꺼내 쓰는 것임으로 자동 전송의 위험성이 없으며, 다른 오리진이 요청할 때에는 꺼내쓰고 싶어도 오리진 단위로 접근이 제한되는 특성 덕분에 값을 꺼내 쓸수 없습니다.(CSRF) 웹스토리지는 쿠키에 비해 용량이 넉넉합니다.

  1) 웹 스토리지(Web Storage) : 사이트에 종속됨!
    웹 데이터를 클라이언트에 저장하기 위해 만들어진 키-밸류 형식의 저장소.
    웹 스토리지는 HTML5에 추가된 클라이언트 기반 키-밸류 저장소 이며, 웹 스토리지는 로컬 스토리지 ( Local Storage ) 와 세션 스토리지 ( Session Storage ) 로 나눌 수 있습니다. 로컬 스토리지와 세션 스토리지의 차이점은 영구성과 범위에 있어서 크게 차이가 납니다. 먼저, 로컬 스토리지 ( Local Storage ) 는 브라우저를 종료해도 데이터를 보관(영구성)합니다. 또한, 도메인만 같으면 전역적으로 데이터가 공유되는 특성을 가지고 있습니다. 하지만, 세션 스토리지 ( Session Storage ) 는 브라우저가 종료되면 데이터가 삭제(비영구성)됩니다. 


  2) 쿠키(Cookie) : 
    서버와 클라이언트 간의 지속적인 데이터 교환을 위해 만들어진 키-밸류 형식의 저장소.
    쿠키는 애초에 서버와 클라이언트가 지속적으로 데이터 교환을 하기 위해 만들어 졌습니다. 예를 들어 우리가 HTTP 요청을 보낼때 서버에 특정 요청을 보내면 서버는 요청 자체만으로는 이 요청이 누가 보낸 것인지 알 수 없습니다. 이 때 우리는 쿠키에 정보를 담아서 서버에 보내면 서버는 쿠키를 읽어서 요청자를 파악합니다. 쿠키는 4KB의 용량 제한을 가지고 있으며 한 사이트당 20개의 쿠키를 가질 수 있습니다. 또한 쿠키는 만료기한을 지정할 수 있습니다. 쿠키는 서버와의 통신을 목적으로 만들어 졌기 때문에 더 주의해야 됩니다. 쿠키에 쓸데없는 값이 많다면 그만큼 네트워크 트래픽이 증가하게 됩니다.

    - 쿠키의 목적
    세션 관리 : 서버가 알아야될 정보 ( 로그인 및 사용자 정보 , 접속시간 )
    개인화 : 사용자에 맞는 페이지 제공
    트래킹 : 사용자 행동 및 패턴 분석
*/


const users2 = {
  name: 'Kai',
  age: 33,
  emails: [
    'kai@gmail.com',
    'abc@gmail.com'
  ]
}

// localStorage.setItem('users2', JSON.stringify(users2));   // 문자 데이터로 변환해서 로컬스토리지에 저장
// console.log(localStorage.getItem('users2'));  // 로컬스토리지에 있는 문자데이터 가져오기
// console.log(JSON.parse(localStorage.getItem('users2')));  // 로컬스토리지엔 문자데이터를 객체데이터로 변환하기
// localStorage.removeItem('users2');    // 로컬스토리지의 데이터 삭제하기

localStorage.setItem('users2', JSON.stringify(users2));

const str1 = localStorage.getItem('users2');
const obj1 = JSON.parse(str1);

// 로컬스토리지 데이터 수정하기
obj1.age = 22;
console.log(obj1);
localStorage.setItem('users2', JSON.stringify(obj1));  // 문자데이터로 변환 후 저장


/* lowdb
    - https://github.com/typicode/lowdb
    - https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=pjok1122&logNo=221569697267
    - lowdb는 브라우저나, Nodejs에서 이러한 JSON 파일을 생성, 삭제, 삽입, 조회 등을 손쉽게 할 수 있도록 도와주는 'lodash' 기반한 패키지입니다.
*/




// *************************** OMDb API 사용법 ***************************

/* OMDb(The Open Movie Database) API
  - https://www.omdbapi.com/
  - 공개 영화 데이터베이스로 OMDb API는 영화 정보를 얻기 위한 RESTful 웹 서비스이며, 사이트의 모든 콘텐츠와 이미지는 사용자가 제공하고 유지 관리합니다.

  - 사용법 : 샘플키를 복사한 다음 주소줄에 붙여주세요!  
    ex) 샘플키 - http://www.omdbapi.com/?apikey=7035c60c&s=frozen

    모든 데이터 요청을 다음 주소로 보내세요:  http://www.omdbapi.com/?apikey=[yourkey]&
    포스터 API 요청:  http://img.omdbapi.com/?apikey=[키]&

  - API 키 발급받기 
    http://www.omdbapi.com/?&apikey=7e27a3fe&s=frozen
    http://www.omdbapi.com/apikey.aspx?VERIFYKEY=d58ab612-f4ea-466e-abaa-d3ae703eb308
*/


// Query String : 문자데이터를 가지고 검색하는 문자
// 웹사이트주소?속성=값&속성=값&속성=값
// 웹사이트주소?apiKey=값&s=검색할영화제목


// *************************** Axios API 사용법 ***************************
// Axios?
// Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리 아다.

import axios from 'axios';

function fatchMovies(){
  // ID로 사용자 요청
  axios.get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')  // 요청시 'https://' 로 요청할 것!
  // 응답(성공)
  .then(res => {
    console.log(res);  // status: 200 (정상서버 응답코드)

    const h1El = document.querySelector('h1');
    const imgEl = document.querySelector('img');

    h1El.textContent = res.data.Search[0].Title;
    imgEl.src = res.data.Search[0].Poster;
  })
  // 응답(실패)
  .catch(error => {
    console.log(error);
  });
}

fatchMovies();




