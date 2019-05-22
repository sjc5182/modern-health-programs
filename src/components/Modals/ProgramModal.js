import React from 'react'
import { SectionsModalStyle } from '../../styled-components/SectionsModals/style'

export default class ProgramsModal extends React.Component {

  getPart = (partIndex) => {
    switch(partIndex) {
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

  render(){
    return (
      this.props.programList.map((list, index) => 
        <SectionsModalStyle key = {index} onClick = {()=> {this.props.ModalSelect(list.order)}}>
          <img src={list.image} className = 'img-size' alt = {list.image} />
          <div>
            <div className = 'modal-part'>Part {this.getPart(list.order)}</div>
            <div className = 'modal-description'>{list.name}</div>
          </div>
        </SectionsModalStyle>)
    )
  } 
}