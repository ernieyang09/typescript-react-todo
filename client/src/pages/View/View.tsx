import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Subject } from 'rxjs';

import {
  debounceTime,
  tap,
  switchMap,
  map,
} from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';

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
  initTodos,
} from '@modules/todo';

import { ITodo } from '@modules/type';


const search$ = new Subject();



const View = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(()=> {
    const obs$ = search$.pipe(
      debounceTime(500),
      tap(() => { setIsLoading(true) }),
      switchMap(x =>
        ajax({
          url: `/api/todo${x && `?q=${x}`}`,
          method: 'GET',
        })
        .pipe(
          map(ajax => ajax.response)
        )
      )
    ).subscribe(
      (todos: ITodo[]) => {
        dispatch(loadTodos(todos));
        setIsLoading(false);
      }
    );

    search$.next(search);

    return () => {
      dispatch(initTodos());
      obs$.unsubscribe();
    }
  }, [])

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    search$.next(e.target.value);
  }

  const refreshTodo = () => {
    search$.next(search);
  }

  const todos = useSelector(TodoSelector);

  return (
    <Page>
      <SearchInput
        width="100%"
        onChange={onSearchChange}
        value={search}
      />
      {
        isLoading ?
          <Pane>
            <Spinner marginTop='50px' marginX="auto" />
          </Pane>
        :
          todos.map((t) => <Todo key={t.id} {...t} refreshTodo={refreshTodo} />)
      }
    </Page>
  )
};

export default View;
