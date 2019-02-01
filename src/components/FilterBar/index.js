import React from 'react';
import FilterAge from './FilterAge';


const FilterBar = (props) =>{
    const{classes, state, dispatch} = props;
    return(
        <div>
            <FilterAge classes={classes} state={state} dispatch={dispatch}/>
        </div>
    );
}

export default FilterBar;