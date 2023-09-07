const str1 = `
010-1234-5678
test@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen 
Lorem ipsum Sit dolor sit amet, consectetuer sit adipiscing elit.
aabbccddee
`;

// 생성자
// new RegExp('표현', '옵션') <= '옵션 : g(모두찾기) / i(대소문자 상관없이 찾기)
// const regexp = new RegExp('sit', 'g');
// const regexp = new RegExp('sit', 'gi');

// 리터럴 (권장)
const regexp1 = /sit/gi;
const regexp2 = /amet/g;

// match - 문자열.match(정규식)	/ 일치하는 문자열의 배열(Array) 반환
console.log(str1.match(regexp1));


// test() - 정규식.test(문자열) / 일치 여부(Boolean) 반환
console.log(regexp2.test(str1));


// replace() - 문자열.replace(정규식,대체문자) / 일치하는 문자열을 대체하고 대체된 문자열(String) 반환
console.log(str1.replace(regexp2, 'AAA'));
console.log(str1); // 원본 데이터는 변화가 없음!

const str2 = str1.replace(regexp2, 'AAA')  // 재할당하면 원본데이터 변경가능!
console.log(str2);  

const str3 = `
010-1234-5678
ABC@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen 
Integer vitae libero ac risus egestas placerat.
abbcccdddd
http://localhost:1234/
동해물과_백두산이 마르고 닳도록
d`;  //  <=  여기도 하나의 라인으로 처리됨!

// const regexp3 = /libero/;
// console.log(str3.match(regexp3));
console.log(str3.match(/libero/));

// '.' 특정한 문자를 검색하는 패턴인데 하나의 명령으로 동작할 수 있는데 일반적인 문자로 동작하도록 '\'를 앞에 붙이면, 이스케이프 문자로 동작하게 된다. 이때 이스케이프(Escape Character) 문자란 \(백슬래시) 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자인데, 즉, 특수한 기능으로 동작하는 것을 탈출해서 [문자로 해석]되라고 '\'를 앞에 붙여준다고 보면됩니다. 정규표현식에만 사용되는 패턴임. 정규표현식에 있어서 기능으로 동작되는 특수문자 앞에는 '\'붙여서 문자로 읽히도록 만들어 주어야 합니다.
console.log(str3.match(/\./g));

// '$' 싸인은 반드시 '.'(마침표) 뒤에다가 붙여야 되는데 $ 싸인은   엔터를 쳐서 끝나는 부분 라인의 끝부분을 의미하는데 끝을 찾아서 끝나는 부분이 앞에 붙은 '.' 같은 문자가 있으면 일치시킨다는 의미입니다.
console.log(str3.match(/\.$/g)); // null

// 여러줄인 경우의 상태에서는 일치하는 내용의 끝나는 부분을 찾지 못할 경우 'null'이 출력됩니다. 이때 여러 줄 일치(multi line)를 지정하는 옵션으로 'm'을 추가하면, 정상적인 처리가 가능합니다. 결국, 'm'을 추가하면, 줄(Line)별로 각각 시작과 끝으로 보겠다는 선언이라고 생각하시면 됩니다!
console.log(str3.match(/\.$/gm));  // ['.']

console.log(
  str3.match(/d$/gm)
);

console.log(
  str3.match(/^a/gm)
);

console.log(
  str3.match(/^a/gim)
);

console.log(
  str3.match(/^A/gm)
);

console.log(
  str3.match(/./g)
);

console.log(
  // str3.match(/http/g)
  str3.match(/h..p/g)
);

console.log(
  str3.match(/vitae|risus/g)
);

console.log(
  // str3.match(/https/g)
  str3.match(/https?/g)
);

console.log(
  // str3.match(/d/g)
  // str3.match(/d{2}/)
  str3.match(/d{2,5}/g)
);

// '\w'는 숫자를 포함한 영어 알파벳을 의미하고 2이상, 3번이하 반복인 문자열 추출
console.log(
  // str3.match(/\w{2,3}/g)

  // 숫자를 포함한 영어 알파벳 앞뒤로 숫자를 포함한 영어 알파벳 아닌 부분을 경계로 분리됨  ex) 010-1234-5678 / http://www. 이때 010이나 www처럼  앞뒤로 숫자나 영어가 아닌 문자가 오면 분리의 경계가 됩니다.
  // 추출 결과 : ['010', 'ABC', 'com', 'www', 'com', 'ac']
  str3.match(/\b\w{2,3}\b/g)  
);


console.log(
  // str3.match(/[vitae]/g)
  // str3.match(/[0-9]/g)
  // str3.match(/[0-9]{1,}/g)
  str3.match(/[가-힣]{1,}/g)
);


// 예시) 동해물과_백두산이 마르고 닳도록
console.log(
  str3.match(/\w/g)
);

console.log(
  // str3.match(/\b/g)
  str3.match(/\bf\w{1,}\b/g)
);

console.log(
  str3.match(/\d{1,}/g)
);


const h = `  the hello  world   !

`;

console.log(
  // h.match(/\s/g)
  h.replace(/\s/g, '')
);


const str4 = `
010-1234-5678
test@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen 
Lorem ipsum Sit dolor sit amet, consectetuer sit adipiscing elit.
aabbccddee
`;


console.log(
  str4.match(/.{1,}(?=@)/g)
);

console.log(
  str4.match(/(?<=@).{1,}/g)   // 패턴의 위치를 뒤에 출력
);




