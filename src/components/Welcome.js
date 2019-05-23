import React from 'react';
import { Welcome } from '../styled-components/Welcome/style'

const WelcomePage = (props) => 
  <Welcome>
    {
        
          // <>
          //   <div>Congraduation! You have finished Modern Health Programs</div>
          //   <button className = 'button-start' onClick = {()=>{props.StartProgram(0)}}>
          //     <span>ReStart</span>
          //   </button>
          // </>
        
          <>
            <div>Welcome to Well-Being Programs</div>
            <button className = 'button-start' onClick = {()=>{props.StartProgram(0)}}>
              <span>Start</span>
            </button>
          </>
    }
  </Welcome>

export default WelcomePage