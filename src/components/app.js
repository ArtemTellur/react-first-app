import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import _ from 'lodash';

import Header from 'components/header';
import CreateTodo from 'components/create-todo';
import TodoList from 'components/todo-list';

const todoList = [
  {
    task: "Create Material Design",
    isCompleted: false
  },
  {
    task: "Go home",
    isCompleted: true
  },
  {
    task: "PMC!!!",
    isCompleted: false
  },
  {
    task: "Learn JavaScript",
    isCompleted: true
  },
  {
    task: "Buy new stickers for office",
    isCompleted: true
  },
  {
    task: "Read react documentation",
    isCompleted: false
  }
];

injectTapEventPlugin();

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList
    }

    this.createTask = this.createTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  deleteTask(list) {
    this.setState({
      todoList: list
    });
  }

  toggleTask(list) {
    this.setState({
      todoList: list
    });
  }

  createTask(task) {
    this.state.todoList.unshift({
      task,
      isCompleted: false
    });
    this.setState({
      todoList: this.state.todoList
    });
  }

  editTask(list) {
    this.setState({
      todoList: list
    });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <Header />
            <div className={"todo-list-container"}>
              <CreateTodo todoList={todoList} createTask={this.createTask}/>
            </div>
            <TodoList todoList={todoList}
                      deleteTask={this.deleteTask}
                      toggleTask={this.toggleTask}
                      editTask={this.editTask}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}