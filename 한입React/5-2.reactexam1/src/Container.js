const Container = ({ children }) => {
  console.log(children);
  return (
    /*조건부 렌더링 : 조건에 따라 다르게 렌더링*/
    <div style={{ margin: 20, padding: 20, border: "1px solid gray" }}>
      {children}
    </div>
  );
};
export default Container;
