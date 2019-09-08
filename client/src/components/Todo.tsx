import * as React from 'react';
import {
  Pane,
  Text,
} from 'evergreen-ui';

const Todo = (props) => {
  // console.log(props)
  return (
    <Pane
      border='default'
      marginY='10px'
      paddingY='10px'
      display='flex'
    >
      <Pane
        flex={1}
      >{props.title}</Pane>
      <Pane>{props.create_at}</Pane>
    </Pane>
  )
}

export default Todo;
