export default class TodoModel {
    init = (todos) => {
        this.todos = todos;
        localStorage.setItem(this.STORE_KEY, JSON.stringify(this.todos));
        this.emit();
    };
    addTodo = (content) => {
        this.id = Math.random();
        let isChecked = false;
        let obj = {id: this.id, content, isChecked};
        let todos = Object.assign(obj, {...this.todos});
        this.todos.push(todos)
        this.init(this.todos)
    }
    checkedAll = (ev) => {

        let todos = this.todos.map((item) => {
            item.isChecked = ev.target.checked
            return item;
        });
        this.init(todos)
    }
    findByIdChecked = (ev, id) => {
        let todos = this.todos.map(item => {
            if (item.id === id) {
                item.isChecked = ev.target.checked
            }
            return item;
        });
        this.init(todos)
    }
    removeChecked = (id) => {
        let index = this.todos.findIndex(item => item.id === id);
        this.todos.splice(index, 1);
        this.init(this.todos)
    }
    filterRemove = () => {
        let todos = this.todos.filter(item => !item.isChecked);
        this.init(todos)
    }

    constructor() {
        this.STORE_KEY = 'jwb';
        let todos = localStorage.getItem(this.STORE_KEY);
        this.todos = todos ? JSON.parse(todos) : [];
        this.listen = []
    }

    on(callbacks) {
        this.listen.push(callbacks)
    }

    emit() {
        this.listen.forEach(l => l())
    }
}