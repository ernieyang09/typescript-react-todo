import * as React from 'react';
import {
  Pane,
} from 'evergreen-ui';



const Page = (props) => {
  return (
    <Pane
      padding='1em'
    >
      {props.children}
    </Pane>
  )
};

export default Page;
