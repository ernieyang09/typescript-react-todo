import * as React from 'react';
import { useSelector } from 'react-redux';
import {
  Pane,
  Text,
  TextInput,
} from 'evergreen-ui';



const TodoForm = (props) => {

  const handleChange = (e) => {
    const newValue = { [e.target.name]: e.target.value };
    props.setForm(f => ({ ...f, ...newValue }))
  }


  return (
    <Pane>
      <Text>Title: </Text>
      <TextInput name='title'
        value={props.form.title}
        onChange={handleChange}
      />
    </Pane>
  )
};

export default TodoForm;
