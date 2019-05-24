import React from 'react'
import { Checkbox } from 'semantic-ui-react';

 export default class SectionList extends React.Component {
  state = {
    checked: false
  }

  toggle = () => this.setState(prevState =>({
    checked: !prevState.checked
  }))

  handSideBarNav = (event) =>{
    this.props.NavOrder(event.currentTarget.getAttribute('value'))
  }

  render(){
    const { Program } = this.props
    return(
      <div className = 'section-wrapper'>
        {
          Program.sections.map((list, index) =>    
            <div className = 'section-box' 
              key = {index} 
              value = {index} 
              onClick = {this.handSideBarNav}
            >
              <Checkbox />
              <div className = 'sections-label'>{list.name}</div>
            </div>
          )
        }       
      </div>
    )
  }
 }