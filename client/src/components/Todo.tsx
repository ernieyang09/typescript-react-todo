import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import {
  Pane,
  Text,
  Button,
  toaster,
} from 'evergreen-ui';

import {
  toggleIsDone
} from '@modules/todo';

const Todo = (props) => {

  const dispatch = useDispatch();

  const onDelete = () => {
    fetch(`/api/todo/${props.id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    })
    .then(r => {
      if (r.status === 204) {
        toaster.success('Delete success');
        props.refreshTodo();
      }
    });
  }

  const onDoubleClick = () => {
    dispatch(toggleIsDone(props.id));
    
    fetch(`/api/todo/${props.id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ isDone: !props.isDone })
    })
    .then(r => {
      if (r.status !== 204) {
        // TODO 
      }
    });
  }


  return (
    <Pane
      border='default'
      marginY='10px'
      paddingY='10px'
      display='flex'
      onDoubleClick={onDoubleClick}
    >
      <Pane
        flex={1}
        textDecoration={props.isDone ? 'line-through': 'none'}
      >
        <Pane><Text>{new Date(props.create_at).toLocaleString()}</Text></Pane>
        <Text>{props.title}</Text>
      </Pane>
      <Pane>
        <Link to={`/edit/${props.id}`}>
          <Button marginRight={16}>Edit</Button>
        </Link>
        <Button
          marginRight={16}
          onClick={onDelete}
        >
          Delete
        </Button>
      </Pane>
    </Pane>
  )
}

export default Todo;
