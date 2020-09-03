import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button, TooltipHoverArea } from '@puppet/react-components'

function App() {
  return (
    <div style={{ height: 2500, overflow: 'scroll' }}>
      <TooltipHoverArea tooltip="I'm a happy tooltip!" anchor="bottom">
        <Button>I'm a happy button!</Button>
      </TooltipHoverArea>
    </div>
  );
}

export default App;
