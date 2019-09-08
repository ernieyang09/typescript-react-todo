import * as React from 'react';
import { useSelector } from 'react-redux';
import {
  Pane,
  Text,
  TextInput,
} from 'evergreen-ui';



const TodoForm = React.forwardRef((props, ref: any) => {
  const { useState } = React;
  const [form, setForm] = useState(ref.current);
  const handleChange = (e) => {
    const newValue = { [e.target.name]: e.target.value };
    setForm(f => ({ ...f, ...newValue }))
  }

  React.useImperativeHandle(ref, () => {
    return form
  });

  return (
    <Pane>
      <Text>Title: </Text>
      <TextInput name='title'
        value={form.title}
        onChange={handleChange}
      />
    </Pane>
  )
});

export default TodoForm;
