import React from 'react';
import FilterAge from '../../containers/FilterBar/FilterAge';
import FilterWeight from '../../containers/FilterBar/FilterWeight';
const FilterBar=()=>{
    return(
        <div>
            <FilterAge/><br/>
            <FilterWeight/>        
        </div>);
}

export default FilterBar;