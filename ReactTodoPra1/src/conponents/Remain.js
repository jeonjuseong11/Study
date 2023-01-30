import React from "react";
const Remain = () => {
  const localList = localStorage.getItem("todos");
  const remainsCounter = JSON.parse(localList).length;
  return <div>할 일이 {remainsCounter}개 남았습니다</div>;
};
export default Remain;
