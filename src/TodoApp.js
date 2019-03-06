import React, {Component} from 'react';
import TodoBody from "./TodoBody";
import TodoHeader from "./TodoHeader";
import TodoFooter from "./TodoFooter";
import * as filters from './type'
import './index.less'

export default class TodoApp extends Component {
    ChangeFilters = (filter) => {
        this.setState({filter})
    };

    constructor(props) {
        super(props);
        this.state = {
            filter: filters.ALL
        }
    }

    render() {
        let {todos, removeChecked, filterRemove, addTodo, checkedAll, findByIdChecked} = this.props.model;
        let {ChangeFilters} = this;
        let {filter} = this.state;
        let todoFiller = todos.filter(item => {
            switch (filter) {
                case filters.ACTIVE:
                    return !item.isChecked;
                    break;
                case filters.TOACTIVATE:
                    return item.isChecked;
                    break;
                default:
                    return true
            }
        });
        let countActive = todos.reduce((count, b) => {
            count += b.isChecked ? 0 : 1;
            return count
        }, 0);
        return (
            <div className='container'>
                <TodoHeader addTodo={addTodo} ChangeFilters={ChangeFilters}/>
                <TodoBody todos={todoFiller}
                          checkedAll={checkedAll}
                          findByIdChecked={findByIdChecked}
                          removeChecked={removeChecked}
                          countActive={countActive}
                          ChangeFilters={ChangeFilters}
                />
                <TodoFooter ChangeFilters={ChangeFilters}
                            countActive={countActive}
                            filterRemove={filterRemove}
                />
            </div>
        )
    }
}