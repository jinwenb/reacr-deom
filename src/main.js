import React from 'react';
import ReactDom from 'react-dom';
import TodoApp from './TodoApp';
import TodoModel from "./TodoModel";

let model = new TodoModel();

function render() {
    ReactDom.render(<TodoApp model={model}/>, root);
}

model.on(render)
render();