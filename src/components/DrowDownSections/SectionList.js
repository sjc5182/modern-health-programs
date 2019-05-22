import React from 'react'
import { Checkbox } from 'semantic-ui-react';

 export default class SectionList extends React.Component {
  render(){
    const { List } = this.props
    return(
      <div className = 'section-wrapper'>
        {
          List.map((list, index) =>    
            <div className = 'section-box' key = {index}>    
              <Checkbox />
              <div className = 'sections-label'>{list.name}</div>
            </div>
          )
        }       
      </div>
    )
  }
 }