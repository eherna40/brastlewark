import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import "./../assets/styles/sass/layout.scss";

import GnomeDetail from "./GnomeDetail";

export class GnomeList extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          {!this.props.loading &&
            this.props.population.map(item => (
              <div className="card-gnome" key={item.id}>
                <GnomeDetail item={item} />
              </div>
            ))}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    population: state.inhabitants.population.filter(item => item.display),
    age: state.filters.age,
    loading: state.filters.loading
  };
};

export default connect(
  mapStateToProps,
  null
)(GnomeList);
