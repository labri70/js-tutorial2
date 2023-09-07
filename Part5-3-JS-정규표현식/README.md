# 정규표현식(RegExp)

정규식, Reqular Expression

## 정규표현식은 크게 다음과 같은 역할을 수행합니다.

- 문자 검색(search)
- 문자 대체(replace)
- 문자 추출(extract)

## 테스트 사이트

https://regexr.com/


## 자바스크립트 정규식 생성

```js
// 생성자 방식
new RegExp('표현', '옵션')
new RegExp('[a-z]', 'gi')

// 리터럴 방식 (권장)
/표현/옵션
/[a-z]/gi
```


## 예제 문자 

```js
const str1 = `
010-1234-5678
test@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen 
Lorem ipsum Sit dolor sit amet, consectetuer sit adipiscing elit.
aabbccddee
`;
   
const str2 = `
010-1234-5678
abc@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen 
Integer vitae libero ac risus egestas placerat.
aabbccddee
`;
```

## 메소드

메소드 | 문법 | 설명
--|--|--
match | `문자열.match(정규식)` | 일치하는 문자열의 배열(Array) 반환
test() | `정규식.test(문자열)` | 일치 여부(Boolean) 반환
replace() | `문자열.replace(정규식,대체문자)` | 일치하는 문자열을 대체하고 대체된 문자열(String) 반환


## 플래그(옵션) 

플래그 | 옵션 
--|--
g | 모든 문자 일치(globa)
i | 영어 대소문자를 구분 않고 일치(ignore case)
m | 여러 줄 일치(multi line)


## 패턴(표현) 

패턴 | 설명 
--|--
^ab | 줄(Line) 시작에 있는 ab와 일치
ab$ | 줄(Line) 끝에 있는 ab와 일치
. |  임의의 한 문자와 일치   
a &verbar; b |  a 또는 b 와 일치   
ab? | b가 없거나 b와 일치
/a{2}/ | a가 2개 연속 일치
/a{2,}/ | a가 2개 이상 연속 일치
/a{2,5}/ | a가 2개 이상 5개 이하(2~5개) 연속 일치
[abc] | a 또는 b 또는 c
[a-z] | a 또는 z 사이의 문자 구간이 일치(영어소문자)
[A-Z] | A 또는 Z 사이의 문자 구간이 일치(영어대문자)
[0-9] | 0부터 9 사이의 문자 구간이 일치(숫자)
[가-힣] | 가부터 힣 사이의 문자 구간이 일치(문자)
\w | 63개 문자(Word, 대소영문52개 + 숫자10개 + _)에 일치
\b | 63개 문자에 일치하지 않는 문자 경계(Boundary)
\d | 숫자(Digit)에 일치
\s | 공백(Space, Tab 등)에 일치
(?=) | 앞쪽 일치(Lookahead)
(?<=) | 뒤쪽 일치(Lookbehind)