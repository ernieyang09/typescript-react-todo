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
} from '@modules/todo';

import { ITodo } from '@modules/type';


const search$ = new Subject();



const View = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    search$.next(e.target.value);
  }

  useEffect(()=> {
    fetch('/api/todo').then(
      r => r.json()
    ).then((todos) => {
      dispatch(loadTodos(todos));
      setIsLoading(false);
    })
  }, [])

  useEffect(() => {
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

    return () => {
      obs$.unsubscribe();
    }
  }, []);

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
          todos.map((t) => <Todo key={t.id} {...t} />)
      }
    </Page>
  )
};

export default View;
