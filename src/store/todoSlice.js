import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  {
    id: 1,
    title: "Learn HTML and CSS",
    completed: false,
  },
  {
    id: 2,
    title: "Learn JavaScript(ES6+)",
    completed: false,
  },
  {
    id: 3,
    title: "Design with Figma",
    completed: false,
  },
  {
    id: 4,
    title: "Develop applications with 'React' and 'Material-UI'",
    completed: false,
  },
]

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (!action.payload) {
        return state;
      }
      return [...state, {
        id: Date.now(),
        title: action.payload,
        completed: false,
      }]
    },
    deleteTodo: (state, action) => {
      return state.filter(t => t.id !== action.payload)
    },
    completeTodo: (state, action) => {
      return state.map(t => t.id === action.payload ? {...t, completed: !t.completed} : t )
    },
  }
})

const { actions, reducer } = todoSlice
export const { addTodo, deleteTodo, completeTodo } = actions
export default reducer
