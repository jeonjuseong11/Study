const reducer = (state, action) => {
  switch (action.type) {
    case 1:
      return state + 1;
    case 10:
      return state + 10;
    case 100:
      return state + 100;
    default:
      return state;
  }
};
