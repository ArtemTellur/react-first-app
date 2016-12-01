import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {green300, green200} from 'material-ui/styles/colors';
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add';

const styles = {
  underlineStyle: {
    borderBottomColor: green200
  },
  underlineFocusStyle: {
    borderBottomColor: green300
  }
};

export default class CreateTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: this.props.todoList,
      newTask: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event) {
    this.props.createTask(this.state.newTask);
    this.setState({
      newTask: ''
    });
    event.preventDefault();
  }

  onChange(event) {
    this.setState({
      newTask: event.target.value
    });
  }

  render() {
    return (
      <form method="GET" className="create-todo-container" onSubmit={this.onSubmit}>
        <TextField id="create-todo-input"
                   className={"input-create"}
                   hintText="Enter the new task"
                   underlineFocusStyle={styles.underlineFocusStyle}
                   underlineStyle={styles.underlineStyle}
                   value={this.state.newTask}
                   onChange={this.onChange}
        />

        <FlatButton icon={<ActionNoteAdd />}
                    backgroundColor={green300}
                    hoverColor={green200}
                    className={"btn btn-add"}
                    type="submit"
        />
      </form>
    );
  }
}