import * as React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import {
  Pane,
  Button,
} from 'evergreen-ui';

import {
  Page,
  TodoForm,
} from '@components';

// import {
//   addTodo
// } from '@modules/todo';


const Add = () => {
  const form: any = useRef();
  form.current = { 'title': '' };

  const dispatch = useDispatch();

  // const t1 = () => {
  //   dispatch(addTodo({...form.current, id: 99, create_at: new Date().getTime(), update_at: null }))
  // }

  return (
    <Page>
      <TodoForm ref={form} />
      <Pane
        marginTop='1em'
        textAlign='right'
      >
        <Button
          // onClick={t1}
        >
          Add
        </Button>
      </Pane>
    </Page>
  )
};

export default Add;
