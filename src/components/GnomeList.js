import React from 'react';
import Grid from '@material-ui/core/Grid';
import './../static/styles.scss';

import GnomeDetail from './GnomeDetail';

const GnomeList = ({items}) => {
    return (
        <Grid container spacing={5}>
            {items.length && items.map(item => 
                <div className="CardGnome" key={item.id}>
                    <GnomeDetail item={item}/>
                </div>
            )}
        </Grid>
    ); 
}
export default GnomeList;