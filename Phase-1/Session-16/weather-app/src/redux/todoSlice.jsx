// todoSlice.js
export const initialState = {
    tasks: [],
  };
  
  export const actionTypes = {
    ADD_TASK: 'ADD_TASK',
    TOGGLE_TASK: 'TOGGLE_TASK',
    DELETE_TASK: 'DELETE_TASK',
  };
  
  export const todoReducer = (state, action) => {
    switch (action.type) {
      case actionTypes.ADD_TASK:
        return {
          ...state,
          tasks: [...state.tasks, { text: action.payload, completed: false }],
        };
      case actionTypes.TOGGLE_TASK:
        return {
          ...state,
          tasks: state.tasks.map((task, index) =>
            index === action.payload
              ? { ...task, completed: !task.completed }
              : task
          ),
        };
      case actionTypes.DELETE_TASK:
        return {
          ...state,
          tasks: state.tasks.filter((_, index) => index !== action.payload),
        };
      default:
        return state;
    }
  };
  