import React, {Component} from 'react';
import TodoItem from "./TodoItem";
import {ALL} from './type'

export default class TodoBody extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let {todos, removeChecked, countActive, checkedAll, ChangeFilters} = this.props;

        return (
            <ul>
                {
                    todos.length > 0 ? <li>
                  <span>
                        <input type="checkbox"
                               checked={countActive === 0 ? true : false}
                               onChange={
                                   (ev) => {
                                       checkedAll(ev);
                                       ChangeFilters(ALL)
                                   }

                               }
                        />
                      {countActive === 0 ? '全部取消' : '全部选中'}
                  </span>
                    </li> : null
                }
                {
                    todos.map((todo, index) => (
                        <TodoItem
                            todo={todo} key={index}
                            findByIdChecked={this.props.findByIdChecked}
                            index={index}
                            removeChecked={removeChecked}
                            ChangeFilters={ChangeFilters}
                        />
                    ))
                }
            </ul>
        )
    }
}