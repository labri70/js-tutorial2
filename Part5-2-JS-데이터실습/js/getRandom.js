/* 
  1) Math.random()
  - 0 ~ 1사이의 난수를 무작위로 생성합니다. 
  - Math.random() * 최대값
    초기 범위인 0 ~ 1이 아닌 최대 범위를 조절하려면 어떻게 해야할까요?
    곱하기 * 기호를 사용하면 됩니다. 왜냐하면 난수의 범위 시작이 0이므로 0에는 어떤 수를 곱해도 0이기 때문입니다. 
    따라서 최대값인 1에만 원하는 최대 범위를 곱하면 됩니다.

  2) Math.floor()
  - 소숫점을 절삭하고 정수로 난수를 추출하는 방법은 Math.floor() 객체를 같이 사용하면 됩니다. 
*/

// export default function(){
//   return Math.floor(Math.random() * 10);
// }

export function random(){
  return Math.floor(Math.random() * 10);
}

export const user = {
  name: 'John',
  age: 25
}

export default 123;