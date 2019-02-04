import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../static/styles.scss';

import * as at from '../actions/actionCreators';

class GnomeDetail extends Component{
  handleClickOpen = (id) => {
    this.setState({showDetail: true});
    this.props.showDetailGnome(id);
  };  

  handleClickClose = id => {
    this.setState({ showDetail: false });
    this.props.hideDetailGnome(id);
  };
  
  render(){
      const { item } = this.props;
      return (
        <div>
           {item.showDetail && (<div className='modal-wrapper' id="popup">
                <div className="popup-contenedor">
                    <h2>{item.name}</h2>
                    <div className="Imagedetail">
                      <img src={item.thumbnail} alt={item.name}/>
                    </div>
                    <div className="Profile">
                      <div className="PersonalInformation">
                        <label>Personal Information:</label>
                        <div>Age: {item.age}</div>
                        <div>Hair: {item.hair_color}</div>
                        <div>Height: {item.height}</div>
                        <div>Weight: {item.weight}</div>
                      </div>
                      <hr/>
                      <div className="ProfessionList">
                        <label>Profession List:</label>
                        {item.professions.map(item=> <div>{item}</div>)}
                      </div>
                      <hr/>                    
                      <div className="FriendList">
                        <label>Friend List:</label>
                        {item.friends.length===0 && <div style={{color:'red'}}>Without friends</div>}
                        {item.friends.map(item=> <div>{item}</div>)}
                      </div>                      
                    </div>
                    <button className="popup-cerrar" onClick={()=> this.handleClickClose(item.id)}>X</button>
                </div>
           </div>
           )}
          <div className="GnomeDetail" >
            <img src={item.thumbnail} alt={item.name} />
            <label className="GnomeName">{item.name.substring(0, 18)}</label><br/>
            <label className="GnomeExtraInfo">Age: {item.age} - Gender :{item.hair_color==='Pink'?'F':'M'}</label>
            <a href="#popup"  className="popup-link" onClick={() => this.handleClickOpen(item.id)}>More info</a>
          </div>
         </div>
      );
    }
  };

const mapStateToProps = state => {
  return {
      population: state.inhabitants.population.filter(item => item.display), 
      age: state.filters.age, 
      loading: state.filters.loading
    }
};

const mapDispatchToProps = dispatch => ({
  showDetailGnome : (id) => {
    dispatch(at.showHideDetail(id, true));
  },
  hideDetailGnome : (id) => {
    dispatch(at.showHideDetail(id, false));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(GnomeDetail);