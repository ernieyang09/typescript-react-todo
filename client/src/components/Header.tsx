import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

import {
  Pane,
  Heading,
  Button,
} from 'evergreen-ui';



const Header = (props) => {
  // console.log(props);
  return (
    <Pane
      display='flex'
      alignItems='center'
      padding='0.2rem'
      borderBottom='1px solid #c7c7c7'
    >
      <Pane flex={1}>
        {
          props.location.pathname === '/' ?
            <Link to='/add'>
              <Button
                appearance='minimal'
                iconBefore='plus'
              >
                Add
              </Button>
            </Link>
          :
            <Link to='/'>
              <Button
                appearance='minimal'
                iconBefore='arrow-left'
              >
                View
              </Button>
            </Link>
        }
        
      </Pane>
      <Pane flex={1} textAlign='center'>
        <Heading size={800}>TodoList</Heading>
      </Pane>
      <Pane flex={1}></Pane>
    </Pane>
  )
}

export default withRouter(Header);
