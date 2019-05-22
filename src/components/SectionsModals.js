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

  backToProgram = () => {
    this.setState(state => ({
      isActivity: !state.isActivity,
    }))
  }
  
  render(){
    const { Sections } = this.props
    console.log(this.state.getModalOrder)
    return(
      !this.state.isActivity ? <ProgramModal programList = {Sections} ModalSelect = {this.selectModal}/>
      : <ModalActivity SectionOrder = {this.state.getModalOrder} Section = {Sections} BackToProgram = {this.backToProgram}/>
    )
  }
 }