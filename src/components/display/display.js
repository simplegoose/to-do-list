import React from "react";
import './display.css';
import Input from '../input/input'

class Display extends React.Component {
    state = {
        items : [],
        inputState : false,
    }

    handleClick() {
        this.setState( (state) => {
            return {
                inputState : !state.inputState,
            }
        })
    }

    handleSubmit(value) {
        let existing = this.state.items;

        function generate() {
            let id = 12;
            let randomId = (Math.random()*100*0.2 + Math.random()*100/0.8).toFixed(0);
            existing.forEach( (item) =>  {
                item._id === randomId ? generate() : id = randomId;
            })

            return id;
        }

        this.setState( (state) => {
            return {
                items : [...state.items, {
                    _id: generate(),
                    text: value,
                }],
            }
        })
    }

    handleFilter(value) {
        this.setState({
            items : this.state.items.filter( item => item._id !== value)
        })
    }

    render() {
        const removeNull = this.state.items.filter( item => item.text !== '')

        return (
            <section className="display">
                <article className="rendereditems">
                    <ul>
                        {
                            removeNull.map( (item) => {
                                return ( 
                                <div className='rendered__items'>
                                    <li key={item._id}>{item.text}</li>
                                    {item._id}
                                    <input type="checkbox" name="check" id="check" />
                                    <button className='delete' onClick={() => this.handleFilter(item._id)}>Delete</button>
                                </div>
                                )
                            })
                        }
                    </ul>
                </article>
                    {this.state.inputState && 
                       <Input handleDisplay={this.handleClick.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/> }
                <button className="additem" onClick={this.handleClick.bind(this)}>Add to-do item</button>
            </section>
        );
    }
}

export default Display;