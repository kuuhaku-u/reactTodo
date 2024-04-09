import { nanoid } from "nanoid"

export const todoMapper = (todoText:string) => {
    return {
        userId: nanoid(), id: nanoid(), title: todoText, completed: false, timestamp: new Date().toISOString()
    }
}