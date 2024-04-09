import { Checkbox, Input } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BUTTON, MODAL } from "src/components";
import { addTodo, delTodo, editTodo, updateTodo } from "src/redux/slices/todoSlice";
import { dateFormatterWithDayName } from "src/utils/util";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function AddPage() {

    const todoState = useSelector((state: any) => state) || [];
    const dispatch = useDispatch()

    const [openModal, setOpenModal] = useState(false)
    const [todoText, setTodoText] = useState("")
    const [newText, setNewText] = useState("")
    const [editId, setEditId] = useState("")

    const handleTodoSubmit = () => {
        dispatch(addTodo({ todoText }))
    }
    
    const handleTodoChange = (todo: string) => {
        setTodoText(todo)
    }

    const handleClose = () => {
        setOpenModal(false)
    }

    const modalOpen = (id: string) => {
        setEditId(id)
        setOpenModal(true)
    }

    const handleTodoEdit = () => {
        dispatch(editTodo({ id: editId, newText }))
        setOpenModal(false)

    }
    const handleTodoDelete = (id: any) => {
        dispatch(delTodo({ id }))
    }

    const handleTodoUpdateChange = (id: any) => {
        dispatch(updateTodo({ id }))
    }
    const handleNewTodoChange = (value: string) => {
        setNewText(value)
    }
    return (
        <>
            <h1>
                Todo Add
            </h1>
            <Input onChange={(e) => handleTodoChange(e.target.value)} defaultValue={todoText} onFocus={(e) => e.target.value = ""} />
            <MODAL open={openModal} handleClose={handleClose} style={style} >
                <Input onChange={(e) => handleNewTodoChange(e.target.value)} defaultValue={newText} onFocus={(e) => e.target.value = ""} />
                <BUTTON text="Submit" cb={handleTodoEdit} />
            </MODAL>
            <BUTTON text="Submit" cb={handleTodoSubmit} />
            <ul>
                {
                    todoState.length > 1 && todoState.map(({ id, title, completed, timestamp }: any) => {

                        if (title === "") {

                            return (
                                <></>
                            )
                        } else {
                            return (
                                <li key={id}>
                                    <Checkbox
                                        checked={completed}
                                        onChange={() => handleTodoUpdateChange(id)}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                    {title}
                                    <p>Created At  - {dateFormatterWithDayName(timestamp)}</p>
                                    <BUTTON text="Delete" cb={() => handleTodoDelete(id)} />
                                    <BUTTON text="Edit" cb={() => modalOpen(id)} />
                                </li>
                            )
                        }
                    })
                }
            </ul>
        </>

    )

} 