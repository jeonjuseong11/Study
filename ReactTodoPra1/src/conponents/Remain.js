import React from "react";
const Remain = () => {
  const localList = localStorage.getItem("todos");
  let remains = localList.length;

  return <div>할 일이 {remains}개 남았습니다</div>;
};
export default Remain;
