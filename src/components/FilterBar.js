import React from 'react';
import FilterAge from '../containers/FilterBar/FilterAge';
import FilterHeight from '../containers/FilterBar/FilterHeight';
import FilterWeight from '../containers/FilterBar/FilterWeight';
import FiltersSelected from '../containers/FilterBar/FiltersSelected';
import FilterProfession from '../containers/FilterBar/FilterProfession';
import FilterName from '../containers/FilterBar/FilterName';

import '../assets/styles/sass/layout.scss';

const FilterBar=()=>{
    return(
        <div>
            <FilterProfession/><br/>
            <FilterName/><br/>
            <FilterAge/><br/>
            <FilterHeight/><br/>
            <FilterWeight/><br/><hr/>
            <FiltersSelected/><br/>            
        </div>
    );
}

export default FilterBar;