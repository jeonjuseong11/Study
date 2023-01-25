const num1 = document.querySelector("#number1");
const num2 = document.querySelector("#number2");
const btn = document.querySelector("button");
let result = document.querySelector("#result");
btn.onclick = () => {
  result.innerText = getGCD(num1.value, num2.value);
  console.log(GCD);
};

function getGCD(n, m) {
  //최대공약수는 영어로 greatest commmon divisor
  let max = n > m ? n : m;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (n % i === 0 && m % i === 0) {
      GCD = i; // 최대공약수
    }
  }
  return GCD;
}
