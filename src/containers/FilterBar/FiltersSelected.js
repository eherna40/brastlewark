import React, { Component } from 'react';
import {connect} from 'react-redux';

import '../../static/styles.scss';

class FiltersSelected extends Component {
    render() {
        const { age, height, weight } = this.props;
        
        const visibleAgeFilter          =   ((age.from && (parseFloat(age.min) !== parseFloat(age.from))) ||
                                             (age.to && (parseFloat(age.max) !== parseFloat(age.to))))?
                                             `Age from ${age.from.toFixed(2)} to ${age.to.toFixed(2)}`:'',
              visibleHeightFilter       =   ((height.from && (parseFloat(height.min) !== parseFloat(height.from))) || 
                                             (height.to && (parseFloat(height.max) !== parseFloat(height.to))))?
                                             `Height from ${height.from.toFixed(2)} to ${height.to.toFixed(2)}`:'',           
              visibleWeightFilter       =   ((weight.from && (parseFloat(weight.min) !== parseFloat(weight.from))) ||
                                             (weight.to && (parseFloat(weight.max) !== parseFloat(weight.to))))?
                                             `Weight from ${weight.from.toFixed(2)} to ${weight.to.toFixed(2)}`:'';
              /*visibleGnomeSelected      =   (gnomeSelected)?
                                            `Gnome: ${gnomeSelected}`:'',
              visibleProfessionSelected =   (professionSelected)?
                                            `Profession ${professionSelected}`:'';*/
        return(
            <div className="FiltersSelected">
                <div className="FilterItem">{visibleAgeFilter}</div>
                <div className="FilterItem">{visibleHeightFilter}</div>
                <div className="FilterItem">{visibleWeightFilter}</div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return{
        age: state.filters.age,
        height: state.filters.height,
        weight: state.filters.weight,
        gnomeSelected: state.filters.gnomeSelected,
        professionSelected: state.filters.professionSelected
    };
}

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersSelected);