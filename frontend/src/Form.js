import React, {useState} from 'react'
import SecondPage from './SecondPage.js'
import ReactDOM from 'react-dom'

const Form = () =>{
    const [value, setValue] = useState("");
    const handleChange = event => {
        setValue(event.target.value)
    }
    const handleSubmit = async event =>{
        event.preventDefault();
        await fetch(`api/${value}`)
        .then(response => response.json())
        .then(data => {console.log(data)
            ReactDOM.render(
            <React.StrictMode>
              <SecondPage wordJSON = {data}/>
            </React.StrictMode>,
            document.getElementById('root')
          );
        })
        .catch(err => console.log(err))

    }
    const handleKeyDown = event =>{
        if (event.key === "Enter"){
            handleSubmit()
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input className = "form-text-input"
                   type="text" 
                   placeholder="Type your word here..."
                   onChange={handleChange} 
                   value={value}></input>
            <input className = "form-submit-button"
                   type="submit" 
                   onKeyDown = {handleKeyDown}></input>
        </form>
    )
}

export default Form