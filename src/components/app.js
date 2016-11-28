import React from 'react';
import TodoList from 'components/todo-list';
import CreateTodo from 'components/create-todo';
import _ from 'lodash';

const todoList = [
  {
    task: 'create part of app',
    isCompleted: true
  },
  {
    task: 'create design',
    isCompleted: false
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList
    }
  }

  render() {
    return (
      <div>
        <CreateTodo todoList={this.state.todoList} createTask={ this.createTask.bind(this) } >tits</CreateTodo>
        <TodoList 
          todoList={ this.state.todoList } 
          toggleTask={this.toggleTask.bind(this)} 
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    );
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todoList, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({todoList: this.state.todoList});
  }

  createTask(task) {
    this.state.todoList.push({
      task,
      isCompleted: false
    });

    this.setState({ todoList: this.state.todoList })
  }

  saveTask(oldTask, newTask) {
    const foundTask = _.find(this.state.todoList, todo => todo.task === oldTask);
    foundTask.task = newTask;
    this.setState({todoList: this.state.todoList});
  }

  deleteTask(task) {
    _.remove(this.state.todoList, todo => todo.task === task);
    this.setState({todoList: this.state.todoList});
  }
}