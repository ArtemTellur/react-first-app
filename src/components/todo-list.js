import React from 'react';
import {List} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import TodoListItem from 'components/todo-list-item'

const todoList = [
  {
    task: "Create Material Design",
    isComplered: "true"
  },
  {
    task: "Go home",
    isComplered: "true"
  },
  {
    task: "PMC!!!",
    isComplered: "true"
  },
  {
    task: "Learn JavaScript",
    isComplered: "true"
  },
  {
    task: "Buy new stickers for office",
    isComplered: "true"
  },
  {
    task: "Read react documentation",
    isComplered: "true"
  }
];

export default class TodoList extends React.Component {

  render() {
    return (
      <List>
        {todoList.map(function(elem, index) {
          return <TodoListItem key={index} {...elem}/>
        })}
      </List>
    );
  }
}