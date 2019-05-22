import React from 'react'
import { ModalActivityStyle } from '../../styled-components/ModalActivity/style'
import QuestionActivities from './QuestionActivities'

export default class ModalActivity extends React.Component {

  getPartChar = (partChar) => {
    switch(partChar) {
      case 0: 
        return 'One'
      case 1:
        return 'Two'
      case 2: 
        return 'Three'
      case 3:
        return 'Four'
      default: 
        return 'None'
    }
  }

  saveData = () =>{
    console.log('hello');
  }
  render(){
    const singleSection = this.props.Section[this.props.SectionOrder]
    console.log(this.props)
    return (
      <ModalActivityStyle>
        <div className = 'section-title'>{`Part ${this.getPartChar(this.props.SectionOrder)}: ${singleSection.name}`}</div>
        <div className = 'section-list-wrapper'>
          <div className = 'list-activities'>
            {singleSection.activities.map((activity, index) => 
              activity.type === "Text" 
                ?
                  <ul key = {index} className = 'activitiesList'><li>{activity.content}</li></ul>
                : null 
            )}
          </div>
          <img src={singleSection.image} className = 'section-image' alt = {singleSection.image} />
        </div>
        <div className = 'question-wrapper'>
          {
            singleSection.activities.map((question, index) => 
              question.type === "Question" 
                ? 
                  <div key = {index} className = 'question-prompt'>
                    {question.prompt} 
                    <QuestionActivities SaveData = {this.saveData} Options = {question.options} />
                  </div> 
                : 
                  null
              )
          }
        </div>
        <div className = 'button-wrapper'>
          <button className = 'button-back' onClick = {this.props.BackToProgram}>Back</button>
          <button className = 'button-continue'>Continue</button>
        </div>
      </ModalActivityStyle>
      )
  } 
}