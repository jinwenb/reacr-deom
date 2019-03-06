import React, {Component} from 'react';
import {ALL} from './type'

export default class TodoItem extends Component {
    handleChange = () => {

    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let {todo, ChangeFilters} = this.props;
        return (
            <li>
                <span>
                      <input type="checkbox"
                             checked={todo.isChecked}
                             onChange={
                                 (ev) => {
                                     this.props.findByIdChecked(ev, todo.id);
                                     ChangeFilters(ALL)
                                 }

                             }
                      /> {todo.content}
                </span>

                <button onClick={() => {
                    this.props.removeChecked(todo.id)
                }
                }>删除
                </button>
            </li>
        )
    }
}