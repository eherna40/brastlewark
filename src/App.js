import React, {Component} from 'react';
import Wrapper from './containers/Wrapper';

import './static/layout.scss';

class App extends Component {

  state={isOpened:false};

  onClickTo(value){
    this.setState({isOpened: true});
  }
  
  constructor() {
    super();
    this.onClickTo = this.onClickTo.bind(this);
  }



  render () { 
    const { isOpened } = this.state;
    return (
      
      <div className="grid-unit" back>
            {isOpened && (
              <div style={{position:'absolute'}}>
                <Wrapper/>
              </div>
            )}
            {!isOpened && (
            <div> 
              <div className="lockup">
                  <h2 className="lockup--heading" id="js-mainHeading">Brastlewark</h2>
                  <h1 className="lockup--sub-heading" id="js-subHeading">Welcome</h1>
              </div>
              <br/><br/><br/>
              <div className='layout-wrapper layout-mobile-sidebar-active'>
                      <div className="p-grid p-fluid dashboard">
                          <div className="main-card">
                              <div className="card summary">
                                  <span className="title">Inhabitants</span>
                                  <span className="detail">Our greatest pride</span>
                                  <span className="count brastlewark" style={{cursor: 'pointer'}} onClick={() => this.onClickTo("populationLink")}>Meet own population</span>
                              </div>
                          </div>
                          <div className="main-card">
                              <div className="card summary">
                                  <span className="title">History</span>
                                  <span className="detail">We are a magical</span>
                                  <span className="count brastlewark" style={{cursor: 'pointer'}} onClick={() => this.onClickTo("populationLink")}>Know it</span>
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
