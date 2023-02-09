import { useState, useRef } from "react";
const DiaryItem = ({
  onRemove,
  onEdit,
  author,
  content,
  created_date,
  emotion,
  id,
}) => {
  const handleRemove = () => {
    //삭제 기능 따로 빼기
    console.log(id);
    if (window.confirm(`${id}번쨰 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };
  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };
  //수정하기를 누르고 원본 데이터를 고쳐도 다시 수정하기를 취소하구 누르면 원래대로 돌아온다
  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`${id}번쨰 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };
  const [isEdit, setIsEdit] = useState(false);
  //수정중인 상태면 true 아니면 false인 상태 정의
  const toggleIsEdit = () => setIsEdit(!isEdit);
  //not 연산자를 활용하여 반대 상태로 만들어주는 기능 생성
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">
          작성일자 :{" "}
          {
            new Date(created_date) /*인자이 ms를 넣어주면 ms를 기준으로 생성*/
              .toLocaleString() /*인간이 알아보기 좋은 숫자로 변환*/
          }
        </span>
      </div>
      <div className="content">
        {isEdit ? (
          <textarea
            value={localContent}
            ref={localContentInput}
            onChange={(e) => setLocalContent(e.target.value)}
          />
        ) : (
          <>{content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};
export default DiaryItem;
