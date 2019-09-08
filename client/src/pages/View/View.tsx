import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  SearchInput,
  Pane,
  Spinner,
} from 'evergreen-ui';

import {
  Page,
  Todo,
} from '@components';

import {
  TodoSelector,
  loadTodos,
} from '@modules/todo';

const View = () => {

  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=> {
    fetch('/api/todo').then(
      r => r.json()
    ).then((todos) => {
      dispatch(loadTodos(todos));
      setIsLoading(false);
    })
  })

  const todos = useSelector(TodoSelector);
  return (
    <Page>
      <SearchInput width="100%" />
      {
        isLoading ?
          <Pane>
            <Spinner marginTop='50px' marginX="auto" />
          </Pane>
        :
          todos.map((t) => <Todo key={t.id} {...t} />)
      }
    </Page>
  )
};

export default View;
