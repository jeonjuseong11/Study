import React from "react";
const Today = () => {
  const todayTime = () => {
    let now = new Date();
    let todayMonth = now.getMonth() + 1;
    let todayDate = now.getDate();
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    let dayOfWeek = week[now.getDay()];
    return `${todayMonth}월 ${todayDate}일 ${dayOfWeek}요일`;
  };
  return <div>{todayTime()}</div>;
};
export default Today;
