import React from 'react';
import {green100, blue100} from 'material-ui/styles/colors';
import {ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import NavigationCancel from 'material-ui/svg-icons/navigation/cancel';
import ContentSave from 'material-ui/svg-icons/content/save';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField'
import _ from 'lodash';

const listItemStyles = {
  complete: {
    backgroundColor: green100
  },
  incomplete: {
    backgroundColor: blue100
  }
};

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
    this.onEditingClick = this.onEditingClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
    this.onSave = this.onSave.bind(this);

    this.state = {
      todoList: this.props.todoList,
      isEditing: false,
      task: this.props.task
    }
  }
  
  onDelete(event) {
    let task = this.props.task;
    _.remove(this.state.todoList, function(elem) {
      return elem.task === task;
    });
    this.props.deleteTask(this.state.todoList);
    event.stopPropagation();
    event.preventDefault();
  }

  toggleTask(event) {
    let task = this.props.task;
    var foundTask = _.find(this.state.todoList, todo => todo.task === task);
    foundTask.isCompleted = !foundTask.isCompleted;
    this.props.toggleTask(this.state.todoList);
    event.stopPropagation();
    event.preventDefault();
  }

  onSave(event) {
    let task = this.state.task;
    let oldTask = this.props.task;
    let foundTask = _.find(this.state.todoList, todo => todo.task === oldTask);
    foundTask.task = task;
    this.setState({
      isEditing: false
    });
    this.props.editTask(this.state.todoList);
  }

  renderControlButtons() {
    return (
      <div>
        <IconButton tooltip="Edit" tooltipPosition="top-left" onClick={this.onEditingClick}>
          <EditorModeEdit />
        </IconButton>
        <IconButton tooltip="Delete" tooltipPosition="top-left" onClick={this.onDelete}>
          <ActionDelete />
        </IconButton>
      </div>
    );
  }

  renderEditingModeButtons() {
    return (
      <div>
        <IconButton tooltip="Save" tooltipPosition="top-left" onClick={this.onSave}>
          <ContentSave />
        </IconButton>
        <IconButton tooltip="Cancel" tooltipPosition="top-left" onClick={this.onCancelClick}>
          <NavigationCancel />
        </IconButton>
      </div>
    );
  }

  onEditingClick(event) {
    this.setState({
      isEditing: true,
      task: this.props.task
    });

    event.stopPropagation();
    event.preventDefault();
  }

  onChange(event) {
    this.setState({
      task: event.target.value
    })
  }

  onCancelClick() {
    this.setState({
      isEditing: false,
      task: ''
    });
  }

  renderEditing() {
    return (
      <Paper zDepth={2}>
        <ListItem style={this.props.isCompleted ? listItemStyles.complete : listItemStyles.incomplete}
                  className={"todo-list-item"}
                  rightIconButton={this.renderEditingModeButtons()}>
          <TextField value={this.state.task} onChange={this.onChange} id="editing-input"/>
        </ListItem>
      </Paper>
    );
  }

  renderDisplaying() {
    return (
      <Paper zDepth={2}>
        <ListItem primaryText={this.props.task}
                  style={this.props.isCompleted ? listItemStyles.complete : listItemStyles.incomplete}
                  leftCheckbox={<Checkbox checked={this.props.isCompleted}/>}
                  className={"todo-list-item"}
                  rightIconButton={this.renderControlButtons()}
                  onClick={this.toggleTask}>
        </ListItem>
      </Paper>
    );
  }

  render() {
    if (!this.state.isEditing) {
      return this.renderDisplaying();
    }
    else {
      return this.renderEditing();
    }
  }
}