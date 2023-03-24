import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { DiaryStateContext } from "../App";
import { useEffect } from "react";
import { useState } from "react";
import DiaryEditor from "../components/DiaryEditor";
const Edit = () => {
  const [originData, setOriginData] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 = ${id}번의 일기 수정`;
  }, []);
  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) == parseInt(id)
      );
      console.log(targetDiary);

      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate("/", { replace: true }); //뒤로가기를 눌러도 돌아가지 않게하기
      }
    }
  }, [id.diaryList]);

  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
};
export default Edit;
