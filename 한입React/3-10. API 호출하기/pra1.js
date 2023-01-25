let response = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => {
    console.log(res);
  }
);
//await 활용
async function getData() {
  let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  let jsonResponse = await rawResponse.json();
  console.log(jsonResponse);
}
getData();
//API안에 데이터를 가져올 수 있음
