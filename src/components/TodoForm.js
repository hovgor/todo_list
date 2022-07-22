import React, {useEffect, useRef, useState} from 'react'

function TodoForm(props) {
    const [inputText, setInputText] = useState('');
    const [inputDate, setInputDate] = useState('');


    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus()  
    })



    const handleChangeText = (e) => {
        setInputText(e.target.value);
    }
    const handleChangeDate = (e) => {
        setInputDate(e.target.value);
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();


        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: inputText,
             date: inputDate
        })

        setInputText('');
        setInputDate('');
    }



  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text'
               placeholder='Add a todo' 
               value={inputText} 
               name='text' 
               className='todo-input' 
               onChange={handleChangeText}
               ref={inputRef}
        />
        <input type='date'
               placeholder='Add a date' 
               value={inputDate} 
               name='date' 
               className='todo-input' 
               onChange={handleChangeDate}
        />
        <button className='todo-button'>Add todo</button>
    </form>
  )
}

export default TodoForm