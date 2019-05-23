import React from 'react'
import { QuestionActivitiesStyle, OptionStyle } from '../../styled-components/QuestionActvities/style'
const QuestionActivities = (props) => 
  <QuestionActivitiesStyle>
    {
      props.Options.map((option, index) =>
        <div key = {index} style = {{paddingRight: '.5rem'}}><OptionStyle OptionLength = {option.length}>{option}</OptionStyle></div>
      )
    }
  </QuestionActivitiesStyle>

export default QuestionActivities