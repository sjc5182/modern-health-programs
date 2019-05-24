import React from 'react'
import ModalActivity from './Modals/ModalActivity'
import ProgramModal from '../components/Modals/ProgramModal'

 export default class SectionModals extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isActivity: false,
      getModalOrder: ''
    }
  }
  
  selectModal = (order) => {
    this.setState(state => ({
      isActivity: !state.isActivity,
      getModalOrder: order
    }))
  }

  backToSection = (activity) => {
    if(activity>0){
      this.setState({
        getModalOrder: activity-1
      })
    }else{
      this.setState(state => ({
        isActivity: !state.isActivity,
      }))

    }
  }

  activityContinue = (activity) => {
    if(activity < this.props.Sections.length-1){
      this.setState({
        getModalOrder: activity+1
      })
    }else{
      this.setState(state => ({
        isActivity: !state.isActivity
      }))
      this.props.ProgramSwitch(Number(this.props.ProgramOrder) + 1);
    }
  }

  render(){
    const { Sections, ProgramName } = this.props
    console.log(Sections)
    return(
      !this.state.isActivity 
        ? 
          <ProgramModal programList = {Sections} ModalSelect = {this.selectModal}/>
        : 
          <ModalActivity 
            SectionOrder = {this.state.getModalOrder}
            ProgramName = {ProgramName}
            Section = {Sections} 
            BackToSection = {this.backToSection} 
            ActivityContinue = {this.activityContinue}
          />
    )
  }
 }