import React, { Component } from "react";
import { connect } from "react-redux";
import Nouislider from "react-nouislider";
import wNumb from "wnumb";

import "./../../static/styles/nouislider.css";
import * as at from "../../actions/actionCreators";
import * as types from "../../actions/actionTypes";

class FilterHeight extends Component {
  onChange(value) {
    let self = this;
    this.props.setHeightSelected(value);
    setTimeout(function() {
      self.props.applyFilters(types.SET_HEIGHT_SELECTED);
    }, 200);
  }

  render() {
    const { height, loading } = this.props;
    let max = (!loading && height && height.max) || 400;
    let min = (!loading && height && height.min) || 0;
    let from = (!loading && height && height.from) || min;
    let to = (!loading && height && height.to) || max;
    return (
      <div className="filter-height">
        Heigth ({min.toFixed(2)} - {max.toFixed(2)}):
        <Nouislider
          range={{ min: min, max: max }}
          start={[from, to]}
          step={1}
          connect={true}
          format={wNumb({ decimals: 2, thousand: "", suffix: "" })}
          tooltips
          onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    height: state.filters.height,
    loading: state.filters.loading
  };
};

const mapDispatchToProps = dispatch => ({
  setHeightSelected: value => {
    return dispatch(
      at.setHeightSelected(parseInt(value[0]), parseInt(value[1]))
    );
  },
  applyFilters: type => {
    console.log(type);
    return dispatch(at.applyFilters(type));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterHeight);
