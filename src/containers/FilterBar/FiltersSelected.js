import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../assets/styles/sass/layout.scss";

class FiltersSelected extends Component {
  render() {
    const {
      age,
      height,
      weight,
      population,
      gnomeSelected,
      professionSelected
    } = this.props;

    const visibleAgeFilter =
        (age.from && parseFloat(age.min) !== parseFloat(age.from)) ||
        (age.to && parseFloat(age.max) !== parseFloat(age.to))
          ? `Age from ${age.from.toFixed(2)} to ${age.to.toFixed(2)}`
          : "",
      visibleHeightFilter =
        (height.from && parseFloat(height.min) !== parseFloat(height.from)) ||
        (height.to && parseFloat(height.max) !== parseFloat(height.to))
          ? `Height from ${height.from.toFixed(2)} to ${height.to.toFixed(2)}`
          : "",
      visibleWeightFilter =
        (weight.from && parseFloat(weight.min) !== parseFloat(weight.from)) ||
        (weight.to && parseFloat(weight.max) !== parseFloat(weight.to))
          ? `Weight from ${weight.from.toFixed(2)} to ${weight.to.toFixed(2)}`
          : "",
      visibleGnomeSelected = gnomeSelected
        ? `Gnome: like ${gnomeSelected}`
        : "",
      visibleProfessionSelected = professionSelected
        ? `Profession ${professionSelected}`
        : "";

    return (
      <div className="FiltersSelected">
        <div className="filter-match">{population.length} match</div>
        <div className="filter-item">{visibleAgeFilter}</div>
        <div className="filter-item">{visibleHeightFilter}</div>
        <div className="filter-item">{visibleWeightFilter}</div>
        <div className="filter-item">{visibleGnomeSelected}</div>
        <div className="filter-item">{visibleProfessionSelected}</div>
      </div>
    );
  }
}

FiltersSelected.PropTypes = {
  age: PropTypes.number,
  height: PropTypes.number,
  gnomeSelected: PropTypes.object,
  professionSelected: PropTypes.object,
  population: PropTypes.array
};

const mapStateToProps = state => {
  return {
    age: state.filters.age,
    height: state.filters.height,
    weight: state.filters.weight,
    gnomeSelected: state.filters.gnomeSelected,
    professionSelected: state.filters.professionSelected,
    population: state.inhabitants.population.filter(item => item.display)
  };
};

export default connect(
  mapStateToProps,
  null
)(FiltersSelected);
