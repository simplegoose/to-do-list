import { useState } from 'react';
import './input.css';

export default function Input(props) {
    const [input, setInput] = useState('')
    
    return (
        <article className="inputareacontainer">
            <span onClick={ () => {props.handleDisplay()}}>+</span>
            <form action="" method="post" onSubmit={(e) => {e.preventDefault(); props.handleSubmit(input)}}>
                <input type="text" name="todoitem" id="todoitem" onChange={(e) => setInput(e.target.value)}
                  placeholder="enter your items here..."/>
                <input type="submit" value="Submit" />
            </form>
        </article>
    );

}