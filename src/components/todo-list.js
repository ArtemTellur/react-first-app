import React from 'react';
import {List} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import TodoListItem from 'components/todo-list-item'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: this.props.todoList
    };
  }

  render() {
    let self = this;
    return (
      <List>
        {this.state.todoList.map(function(elem, index) {
          return <TodoListItem key={index} todoList={self.state.todoList} 
                               deleteTask={self.props.deleteTask}
                               toggleTask={self.props.toggleTask}
                               editTask={self.props.editTask}
            {...elem}/>
        })}
      </List>
    );
  }
}