import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';

import {
  Pane,
  Button,
  Spinner,
  toaster,
} from 'evergreen-ui';

import {
  Page,
  TodoForm,
} from '@components';


const Edit = (props) => {
  const [loading, setLoading] = useState(true);
  const [form, setForm ] =  useState({ title: '' });

  useEffect(()=> {
    fetch(`/api/todo/${props.match.params.todoId}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
    .then(r => r.json())
    .then(t => {
      setForm({ title: t.title });
      setLoading(false);
    })
  }, []);

  

  const onEdit = () => {
    fetch(`/api/todo/${props.match.params.todoId}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...form })
    })
    .then(r => {
      if (r.status === 204) {
        toaster.success('Update success');
      }
    });
  }

  return (
    <Page>
      {
        loading ?
          <Pane>
            <Spinner marginTop='50px' marginX="auto" />
          </Pane>
        :
          <>
            <TodoForm form={form} setForm={setForm} />
            <Pane
              marginTop='1em'
              textAlign='right'
            >
              <Button
                onClick={onEdit}
              >
                Edit
              </Button>
            </Pane>
          </>
      }
      
    </Page>
  )
};

export default withRouter(Edit);
