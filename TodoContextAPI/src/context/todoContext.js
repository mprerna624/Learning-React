import React from "react";
import { useContext } from "react";

export const TodoContext = React.createContext({
    todos: [
        {
            id: 1,
            task: "Learn React.js",
            completed: false 
        }
    ],
    addTodo: (todoObj) => {},
    updateTodo: (id, todoMsg) => {},
    deleteTodo: (id) => {},
    toggleChecked: (id) => {}
});

export const TodoContextProvider = TodoContext.Provider;

const useTodoContext = () => {
    return useContext(TodoContext);
}

export default useTodoContext;