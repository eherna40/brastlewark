import React from 'react';
import FilterAge from '../../containers/FilterBar/FilterAge';
import FilterHeight from '../../containers/FilterBar/FilterHeight';
import FilterWeight from '../../containers/FilterBar/FilterWeight';
import FiltersSelected from '../../containers/FilterBar/FiltersSelected';

import '../../static/styles.scss';

const FilterBar=()=>{
    return(
        <div>
            <FiltersSelected/><br/>
            <FilterAge/><br/>
            <FilterHeight/><br/>
            <FilterWeight/>        
        </div>);
}

export default FilterBar;