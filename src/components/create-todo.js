import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {green300, green200} from 'material-ui/styles/colors'

const styles = {
  underlineStyle: {
    borderBottomColor: green200
  },
  underlineFocusStyle: {
    borderBottomColor: green300
  }
};

export default class CreateTodo extends React.Component {

  render() {
    return (
      <form method="GET" className="create-todo-container">
        <TextField id="create-todo-input"
                   className={"input-create"}
                   hintText="Enter the new task"
                   underlineFocusStyle={styles.underlineFocusStyle}
                   underlineStyle={styles.underlineStyle}
        />

        <FlatButton label="Add"
                    backgroundColor={green300}
                    hoverColor={green200}
                    className={"btn btn-add"}
                    type="submit"
        />
      </form>
    );
  }
}