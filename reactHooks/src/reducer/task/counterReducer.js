export const initialState = { count: 0 };

export const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'incrementByInput':
      return { count: state.count + action.payload };
    case 'decrementByInput':
      return { count: state.count - action.payload };
  }
};
