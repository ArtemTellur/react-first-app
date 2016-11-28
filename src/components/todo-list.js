import React from 'react';
import TodoListHeader from 'components/todo-list-header';
import _ from 'lodash';
import TodoListItem from 'components/todo-list-item';

export default class TodoList extends React.Component {
  renderItems() {
    const props = _.omit(this.props, 'todoList');

    return _.map(this.props.todoList, (todo, index) => <TodoListItem key={index} {...todo} {...props}/>)
  };

  render() {
    return (
      <table>
        <TodoListHeader />
        <tbody>
          { this.renderItems() }
        </tbody>
      </table>
    );
  }
};