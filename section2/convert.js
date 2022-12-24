let inch = parseFloat(prompt("인치를 입력해주세요")); //화면에 사용자에게 인치를 입력받는 창을 띄움
let cm;

cm = (inch * 2.54).toFixed(1); //toFixed(1) 소수점 첫쨰자리까지만 출력하겠다
alert(`${inch}인치는 ${cm}센티미터입니다.`);
