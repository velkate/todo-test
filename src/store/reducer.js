const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (!action.payload) {
        return state;
      }
      if (state.todos.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
          title: action.payload,
          completed: false,
        }]
      };
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.payload)
      };
    case "COMPLETE":
      return {
        ...state,
        todos: state.todos.map(t => t.id === action.payload ? {...t, completed: !t.completed} : t )
      };
    case "THEME":
      return {
        ...state,
        myTheme: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
