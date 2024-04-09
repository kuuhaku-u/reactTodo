import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { todoMapper } from 'src/mapper/todoMapper'

interface TodoState {
    "userId": string,
    "id": string,
    "title": string,
    "completed": boolean,
    timestamp: string
}

const initialState = [{
    "userId": "",
    "id": "",
    "title": "",
    "completed": false,
    timestamp: ""
}]

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action) {
            const newTodo = todoMapper(action.payload.todoText)
            return [...state, newTodo]
        },
        delTodo(state, action) {
            return state.filter((t: any) => t.id !== action.payload.id && t)

        },

        updateTodo(state, action) {
            state =
                state.map((t: any) => t.id === action.payload.id ? { ...t, completed: !t.completed } : t)
            return state
        },
        editTodo(state, action) {
            state = state.map((t: any) => t.id === action.payload.id ? { ...t, title: action.payload.newText } : t)
            return state
        },
    },
})

export const { addTodo, editTodo, delTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer