import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({ text: '' });
  };

  onChangeHandle = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className={style.TodoForm}>
        <label className={style.label}>Add task:</label>
        <input
          className={style.input}
          type='text'
          placeholder='task...'
          onChange={this.onChangeHandle}
          value={this.state.text}
        />
        <input className={style.submit} type='submit' value='Add' />
      </form>
    );
  }
}

export default TodoForm;
