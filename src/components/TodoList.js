import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = props => {
  const list = props.items.map(element => {
    return <Todo key={element.id} remove={props.remove} data={element} />;
  });
  return <div className={style.list}>{list}</div>;
};

export default TodoList;
