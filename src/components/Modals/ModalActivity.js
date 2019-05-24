import React from 'react'
import { ModalActivityStyle } from '../../styled-components/ModalActivity/style'
import QuestionActivities from './QuestionActivities'

export default class ModalActivity extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      answer: '',
      arrAnswer: []

    }
  }
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

  handleActivities = () => {
    const arrAnswerForward = this.state.arrAnswer.slice()
    if(arrAnswerForward.indexOf(this.state.answer) === -1){
      arrAnswerForward.push(this.state.answer)
    }else{
      arrAnswerForward.push('No Answer')
    }
    this.setState({
      arrAnswer: [...arrAnswerForward]
    }, ()=>{
      this.props.ActivityContinue(this.props.SectionOrder)
      localStorage.setItem(this.props.ProgramName, JSON.stringify(this.state.arrAnswer))
    })
  }

  handleBackButton = () => {
    const arrAnswerBack = this.state.arrAnswer.slice()
    arrAnswerBack.pop()
    this.setState({
      arrAnswer: [...arrAnswerBack]
    }, ()=>{
      this.props.BackToSection(this.props.SectionOrder)
      localStorage.setItem(this.props.ProgramName, JSON.stringify(this.state.arrAnswer))
    })
  }

  handleGetAnswer = (answer) => {
    this.setState({
      answer
    })
  }

  render(){
    const { Section, SectionOrder } = this.props
    const singleSection = Section[SectionOrder]
    console.log(SectionOrder)
    return (
      <ModalActivityStyle>
        <div className = 'section-title'>{`Part ${this.getPartChar(this.props.SectionOrder)}: ${singleSection.name}`}</div>
        <div className = 'section-list-wrapper'>
          <div className = 'list-activities'>
            {singleSection.activities.map((activity, index) => 
              activity.type === "Text" 
                ?
                  <ul key = {index} className = 'activitiesList'>
                    <li>{activity.content}</li>
                  </ul>
                : null 
            )}
          </div>
          <div className = 'image-wrapper'>
            <img src={singleSection.image} className = 'section-image' alt = {singleSection.image} />
          </div>
        </div>
          {/* singleSection.activities.some(question => question.type === 'Question') */}
          <div className = 'question-wrapper'>
            {
              singleSection.activities.map((question, index) => 
                question.type === "Question" 
                  ? 
                    <div key = {index} className = 'question-prompt'>
                      {question.prompt} 
                      <QuestionActivities 
                        Options = {question.options}
                        GetAnswer = {this.handleGetAnswer}
                      />
                    </div> 
                  : 
                    null
              )
            }
          </div>
        <div className = 'button-wrapper'>
          <button className = 'button-back' onClick = {this.handleBackButton}>Back</button> 
          <button className = 'button-continue' onClick = {this.handleActivities}>
            Continue
          </button>
        </div>
      </ModalActivityStyle>
    )
  } 
}