const cookie = {
  base: "cookie",
  madeIn: "korea",
};
//spread 연산자 사용
// const chocochipCookie = {
//   base: "cookie",
//   madeIn: "korea",
//   toping: "chocochip",
// };

// const blueberryCookie = {
//   base: "cookie",
//   madeIn: "korea",
//   toping: "blueberry",
// };

// const strawberryCookie = {
//   base: "cookie",
//   madeIn: "korea",
//   toping: "strawberry",
// };

//spread 연산자 사용
const chocochipCookie = {
  ...cookie,
  toping: "chocochip",
};

const blueberryCookie = {
  ...cookie,
  toping: "blueberry",
};

const strawberryCookie = {
  ...cookie,
  toping: "strawberry",
};
console.log(chocochipCookie);
console.log(blueberryCookie);
console.log(strawberryCookie);
