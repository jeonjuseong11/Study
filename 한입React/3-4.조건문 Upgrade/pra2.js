const getMeal = (mealType) => {
  if (mealType === "한식") return "불고기";
  if (mealType === "양식") return "파스타";
  if (mealType === "중식") return "멘보샤";
  if (mealType === "일식") return "초밥";
  return "굶기";
};
console.log(getMeal("한식"));
console.log(getMeal());

//괄호 표기법을 이용
const meal = {
  한식 : "불고기"
  양식 : "파스타"
  중식 : "멘보샤"
  일식 : "초밥"
  인도식 : "카례"
}
const getMeal2 = (mealType) =>{
  return meal[mealType] || "굶기"
};
console.log(getMeal2("중식"));//중식의 키를 갖는 멘보샤 리턴
console.log(getMeal2());//굶기
