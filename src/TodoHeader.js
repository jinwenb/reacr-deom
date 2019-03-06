import React, {Component} from 'react';
import {ALL} from './type'

export default class TodoHeader extends Component {
    changeKeyDown = (event) => {

        if (
            event.keyCode === 13 &&
            event.target.value !== null &&
            event.target.value.length !== 0) {
            this.props.addTodo(event.target.value)
            this.props.ChangeFilters(ALL)
        }
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input type="text" className='input-item'
                   onKeyDown={this.changeKeyDown}
                   style={{width: '722px'}}
            />
        )
    }
}