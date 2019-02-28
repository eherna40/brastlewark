import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./../static/styles/sass/layout.scss";
import * as at from "../actions/actionCreators";

export class GnomeDetail extends Component {
  handleClickOpen = id => {
    this.setState({ idShowDetail: id });
    this.props.showDetailGnome(id);
  };

  handleClickClose = () => {
    this.setState({ idShowDetail: "" });
    this.props.hideDetailGnome();
  };

  render() {
    const { item, idShowDetail } = this.props;
    return (
      <div>
        {item.id === idShowDetail && (
          <div className="modal-wrapper" id="popup">
            <div className="popup-contenedor">
              <h2>{item.name}</h2>
              <div className="image-detail">
                <img src={item.thumbnail} alt={item.name} />
              </div>
              <div className="profile">
                <div className="personal-information">
                  <label>Personal Information:</label>
                  <div>Age: {item.age}</div>
                  <div>Hair: {item.hair_color}</div>
                  <div>Height: {item.height}</div>
                  <div>Weight: {item.weight}</div>
                </div>
                <hr />
                <div className="profession-list">
                  <label>Profession List:</label>
                  {item.professions.map(item => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
                <hr />
                <div className="friend-list">
                  <label>Friend List:</label>
                  {item.friends.length === 0 && (
                    <div style={{ color: "red" }}>Without friends</div>
                  )}
                  {item.friends.map(item => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </div>
              <button
                className="popup-cerrar"
                onClick={() => this.handleClickClose(item.id)}
              >
                X
              </button>
            </div>
          </div>
        )}
        <div className="gnome-detail">
          <img src={item.thumbnail} alt={item.name} />
          <label className="gnome-name">{item.name.substring(0, 18)}</label>
          <br />
          <label className="gnome-extra-info">
            Age: {item.age} - Gender :{item.hair_color === "Pink" ? "F" : "M"}
          </label>
          <a
            href="#popup"
            className="popup-link"
            onClick={() => this.handleClickOpen(item.id)}
          >
            More info
          </a>
        </div>
      </div>
    );
  }
}

GnomeDetail.propTypes = {
  population: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  age: PropTypes.number,
  idShowDetail: PropTypes.number
};

const mapStateToProps = state => {
  return {
    population: state.inhabitants.population.filter(item => item.display),
    age: state.filters.age,
    loading: state.filters.loading,
    idShowDetail: state.filters.idShowDetail
  };
};

const mapDispatchToProps = dispatch => ({
  showDetailGnome: id => {
    dispatch(at.showHideDetail(id));
  },
  hideDetailGnome: () => {
    dispatch(at.showHideDetail(null));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GnomeDetail);
