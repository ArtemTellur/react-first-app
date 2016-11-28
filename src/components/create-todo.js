import React from 'react';

export default class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isValid: null
    };
  }
  
  renderValidation() {
    if (this.state.isValid) {
      return (
        <div style={{color: 'red'}}>{this.state.isValid}</div>
      );
    }
    else return null;
  }
  
  render() {
    return (
      <form onSubmit={ this.handleCreate.bind(this)}>
        <input type="text" ref="createInput"/>
        <button>Create</button>
        {this.renderValidation()}
      </form>
    )
  }

  handleCreate(event) {
    event.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if (validateInput) {
      this.setState({isValid: validateInput});
      return;
    }

    this.setState({isValid: null});
    this.props.createTask(task);
    this.refs.createInput.value = '';
  }

  validateInput(task) {
    if (!task) {
      return 'Please enter the value.'
    }
    else if(_.find(this.props.todoList, (todo) => todo.task === task)) {
      return 'Task already exists.';
    }
    return null;
  }
};