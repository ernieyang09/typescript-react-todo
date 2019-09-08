import * as React from 'react';
import {
  Pane,
} from 'evergreen-ui';



const Page = (props) => {
  return (
    <Pane
      padding='1em'
      flex={1}
      overflow='auto'
    >
      {props.children}
    </Pane>
  )
};

export default Page;
