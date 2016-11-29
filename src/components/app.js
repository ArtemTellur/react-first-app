import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import _ from 'lodash';

import Header from 'components/header';
import CreateTodo from 'components/create-todo';
import TodoList from 'components/todo-list';

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

injectTapEventPlugin();

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
        <MuiThemeProvider>
          <div>
            <Header />
            <div className={"todo-list-container"}>
              <CreateTodo />
            </div>
            <TodoList />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}