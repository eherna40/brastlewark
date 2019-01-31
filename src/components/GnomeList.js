import React from 'react';
import './../static/styles.scss';

import GnomeDetail from './GnomeDetail';

const GnomeList = ({items}) => {
    return (items.length && items.map(item => 
        <div className="CardGnome" key={item.id}>
           <GnomeDetail item={item}/>
        </div>
    )); 
}
export default GnomeList;