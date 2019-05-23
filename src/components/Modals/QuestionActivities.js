import React from 'react'
import { QuestionActivitiesStyle, OptionStyle } from '../../styled-components/QuestionActvities/style'

export default class QuestionActivities extends React.Component{
  
  handleAnswer = (event) => {
    this.props.GetAnswer(event.currentTarget.getAttribute('value'))
  }

  render() {
    return(
      <QuestionActivitiesStyle>
        {
          this.props.Options.map((option, index) =>
            <div 
              key = {index} 
              style = {{paddingRight: '.5rem'}}
              value = {option}
              onClick = {this.handleAnswer}
            >
              <OptionStyle OptionLength = {option.length}>{option}
              </OptionStyle>
            </div>
          )
        }
      </QuestionActivitiesStyle>
    )
  }
}
