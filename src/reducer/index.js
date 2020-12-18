const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload.text,
          done: false
        }
      ];
    case 'remove':
      return state.filter((i) => i.id !== action.payload.id);
    case 'toggle':
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              done: !item.done
            }
          : item
      );
    default:
      return state;
  }
};

export default reducer;
