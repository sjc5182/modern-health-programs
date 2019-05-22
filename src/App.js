import React from 'react';
import logo from './logo.svg';
import Axios from 'axios'
import Section from './components/DrowDownSections/Sections'
import SectionModals from './components/SectionsModals'
import WelcomePage from './components/Welcome'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      programs: [],
      individualProgram: {},
      isWelcome: true
    }
  }

  //#3fc6df,#69d8ec

  componentDidMount(){
    Axios.get('https://gist.githubusercontent.com/subwindow/34795c95e18349be72a53d2e0acc8068/raw/4f0545c6924a67498509b1899dfe6aec525f4d07/program.json')
      .then(res => {
        const programs = res.data.programs;
        const arr = []
        for(let progObj in programs){
          arr.push(programs[progObj])
        }
        this.setState({ 
          programs: [...arr]
         })
      })
      .catch(error => {console.log(error)})
  }

  subProgram = () => {
    const sigleProgram = this.state.programs.slice(0,1)
    this.setState(state => ({
      individualProgram: {...sigleProgram[0]},
      isWelcome: !state.isWelcome
    }))
  }

  render(){
    const { programs, individualProgram }= this.state
    console.log(individualProgram)
    return (
      <div className = 'App-container'>
        <div className = 'Bot-container-left'>
          <div className = 'Bot-sideBar-title'>Programs</div>
          {
            programs.map((programName, index) => <Section key = {index} ProgramName = {programName}/>)
          }
        </div>
        <div className = 'Bot-container-right'>
          {
            this.state.isWelcome ? <WelcomePage StartProgram = {this.subProgram}/> :
            <>
              <div className = 'Bot-title-wrapper'>
                <div className = 'Bot-container-title'>
                  {this.state.individualProgram.name}
                </div>
              </div>
              <div className = 'Bot-content-wapper'>
                <SectionModals Sections = {individualProgram.sections}/>
              </div>
            </>
          }
        </div>
      </div>
    )
}
}

export default App;




  //     programs.map(ele => 
  //       ele.sections.map(elements => elements.activities.map(value => 
  //         <div>
  //           <li>
  //             {value.content}
  //           </li>
  //         </div>
  //       ))
  //     )
  //   }
/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
