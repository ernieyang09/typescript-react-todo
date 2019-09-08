import * as React from 'react';
import { useSelector } from 'react-redux';
import {
  SearchInput,
} from 'evergreen-ui';

import {
  Page,
  Todo,
} from '@components';

import {
  TodoSelector,
} from '@modules/todo';

const View = () => {
  const todos = useSelector(TodoSelector);
  return (
    <Page>
      <SearchInput width="100%" />
      {
        todos.map((t) => <Todo key={t.id} {...t} />)
      }
    </Page>
  )
};

export default View;
