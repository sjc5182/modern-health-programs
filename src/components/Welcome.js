import React from 'react';
import { Welcome } from '../styled-components/Welcome/style'

const WelcomePage = (props) => 
  <Welcome>
    <div>Welcome to Well-Being Programs</div>
    <button className = 'button-start' onClick = {props.StartProgram}>
      <span>Start</span>
    </button>
  </Welcome>

export default WelcomePage