const DiaryItem = ({ author, content, created_date, emotion, id }) => {
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
      <div className="content">{content}</div>
    </div>
  );
};
export default DiaryItem;
