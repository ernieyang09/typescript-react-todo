import * as React from 'react';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';

import {
  Pane,
  Button,
  toaster,
} from 'evergreen-ui';

import {
  Page,
  TodoForm,
} from '@components';

const Add = (props) => {

  const [form, setForm ] =  useState({ title: '' });

  const onAdd = () => {
    fetch('/api/todo', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...form, isDone: false })
    })
    .then(r => {
      if (r.status === 200) {
        toaster.success('Add success');
        props.history.push('/');
      }
    });
  }

  return (
    <Page>
      <TodoForm form={form} setForm={setForm} />
      <Pane
        marginTop='1em'
        textAlign='right'
      >
        <Button
          onClick={onAdd}
        >
          Add
        </Button>
      </Pane>
    </Page>
  )
};

export default withRouter(Add);
