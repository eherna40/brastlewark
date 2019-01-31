import React from 'react';
import './../static/styles.scss';

const GnomeDetail = ({item}) => (
    <div className="GnomeDetail" >
      <img src={item.thumbnail} alt={item.name} />
      <label className="GnomeName">{item.name}</label><br/>
      <label className="GnomeExtraInfo">Age: {item.age} - Gender :{item.hair_color==='Pink'?'F':'M'}</label>     
    </div> 
);
export default GnomeDetail;