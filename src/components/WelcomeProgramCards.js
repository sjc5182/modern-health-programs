import React from 'react';
import { WelcomeProgramCardsStyle } from '../styled-components/WelcomeProgramCards/style'

export default class WelcomeProgramCards extends React.Component{
  state = {
    programIndexValue: ''
  }

  handleOrderValue = (event) => {
    this.setState({
      programIndexValue: event.currentTarget.getAttribute('value')
    })
  }

  handleStart = () =>{
    this.props.StartProgram(this.state.programIndexValue)
  }
  render(){
    return(
      <WelcomeProgramCardsStyle>
        <div className = 'welcome-text'>Welcome to Well-Being Programs</div>
        <div className = 'program-card-deck-wrapper'>
          {
            this.props.ProgramList.map((program, index) => 
            <button key = {index} value = {index} className = 'deck-size ' onClick = {this.handleOrderValue}>
              <h1 className = 'deck-name'>
                {program.name}
              </h1>
              <div className = 'deck-description-wrapper'>
                <p className = 'deck-description'>
                  {program.description}
                </p>
              </div>
            </button>)
          } 
        </div>
        {
          this.state.programIndexValue!=='' 
            ?
              <button className = 'button-start' onClick = {this.handleStart}>
                <span>Start</span>
              </button>
            :
              <button className = 'button-start' >
                <span>Start</span>
             </button>
        }
        
      </WelcomeProgramCardsStyle>
    )
  }
}
