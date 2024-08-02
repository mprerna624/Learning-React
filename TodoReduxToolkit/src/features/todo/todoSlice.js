import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: nanoid(),
        task: "Hello World",
        completed: false
    }]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                completed: false
            }
            state.todos.push(newTodo)
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter( (eachTodo) => eachTodo.id !== action.payload);
        },

        updateTodo: (state, action) => {
            state.todos = state.todos.map( (eachTodo) => eachTodo.id === action.payload.id ? {...eachTodo, task : action.payload.task} : eachTodo )
        },
        
        toggleChecked: (state, action) => {
            state.todos = state.todos.map( (eachTodo) => eachTodo.id === action.payload ? {...eachTodo, completed: !eachTodo.completed} : eachTodo )
        }
    }
})

export const {addTodo, deleteTodo, updateTodo, toggleChecked} = todoSlice.actions;
export default todoSlice.reducer;