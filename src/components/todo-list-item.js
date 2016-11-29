import React from 'react';
import {green300, green200} from 'material-ui/styles/colors';
import {ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

export default class TodoListItem extends React.Component {

  render() {
    return (<ListItem primaryText={this.props.task} />);
  }
}