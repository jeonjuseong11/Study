import { useContext } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "./App";
import DiaryItem from "./DiaryItem";
import { DiaryStateContext } from "./App";
const DiaryList = () => {
  const { onEdit, onRemove } = useContext(DiaryDispatchContext);
  const diaryList = useContext(DiaryStateContext);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = { diaryList: [] };
//오류가 발생해서 diaryList가 안넘어왔을경우 기본값 지정
export default DiaryList;
