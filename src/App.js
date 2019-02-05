import React, {Component} from 'react';
import Wrapper from './containers/Wrapper';
import History from './components/History';

import './static/layout.scss';

const OPEN_HISTORY= 'OPEN_HISTORY';
const OPEN_HABITANTS='OPEN_HABITANTS';
  
class App extends Component {
  
  state={open_habitants:false, open_history:false};

  onClickTo(option){
    switch(option){
      case OPEN_HABITANTS: 
        this.setState({open_habitants: true});    
        break;
      case OPEN_HISTORY:
        this.setState({open_history: true});    
        break;
      default:
        this.setState({open_habitants: false, open_history:false});    
        break;
      }    
  }
  
  constructor() {
    super();
    this.onClickTo = this.onClickTo.bind(this);
  }

  render () { 
    const { open_habitants,  open_history} = this.state;
    return (
      <div className="grid-unit">
            {open_habitants && (
              <div style={{position:'absolute', width:'100%'}}>
                <Wrapper/>
              </div>
            )}
            {open_history && (
              <div style={{position:'absolute', width:'100%'}}>
                <History/>
              </div>
            )}
            {!open_habitants && !open_history && (
            <div> 
              <div className="lockup">
                  <h2 className="lockup--heading" id="js-mainHeading">Brastlewark</h2>
                  <h1 className="lockup--sub-heading" id="js-subHeading">Welcome</h1>
              </div>
              <br/><br/><br/>
              <div className='layout-wrapper layout-mobile-sidebar-active'>
                      <div className="p-grid p-fluid dashboard">
                          <div className="main-card">
                              <div className="card summary" id="card-population">
                                  <span className="title">Inhabitants</span>
                                  <span className="detail">Our greatest pride</span>
                                  <span className="count brastlewark" style={{cursor: 'pointer'}} onClick={() => this.onClickTo(OPEN_HABITANTS)}>Meet own population</span>
                              </div>
                          </div>
                          <div className="main-card" id="card-our-history">
                              <div className="card summary">
                                  <span className="title">History</span>
                                  <span className="detail">We are a magical</span>
                                  <span className="count brastlewark" style={{cursor: 'pointer'}} onClick={() => this.onClickTo(OPEN_HISTORY)}>Know about us</span>
                              </div>
                          </div>
                      </div>
              </div>
            </div>
            )}           
        </div>
    )
  }
}
export default App;
