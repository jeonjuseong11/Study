var value = 0;
var obj = {
  value: 1,
  setValue: function () {
    this.value = 2; //this:obj -> obj.vlaue =2
    (function () {
      this.value = 3; //this : window - > window.value =3
      //전역 value = 3
    })();
  },
};
obj, setValue();
console.log(value); //3
console.log(obj.value); //2

//스코프안에서 this를 동일하게 쓸 때
//함수스코프와는 전역객체를 사용해야하지만

var value = 0;
var obj = {
  value: 1,
  setValue: function () {
    this.value = 2;
    var a = function () {
      this.value = 3;
    };
    a.call(this); //함수안에 this를 넘겨주는 방법 하지만 번거로움
  },
};
obj, setValue();
console.log(value); //0
console.log(obj.value); //3

//내부의 this를 바로 쓰고싶을 때 스코프 안에서 this는 동일하게 쓰고 싶을 때 블록스코프 사용
//내부에서만 쓰고자하는 어떤 변수가 있지만 this는 동일하게 쓰고 싶을 때
//블록스코프는 this의 영향을 받지 않는다

var value = 0;
var obj = {
  value: 1,
  setValue: function () {
    let a = 20;
    this.value = 2;
    {
      let a = 10;
      this.value = 3;
    }
  },
};
obj, setValue();
console.log(value); //0
console.log(obj.value); //3
