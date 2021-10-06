import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";
import logo from "../../assets/logo.svg";

export default class index extends Component {
  state = {
    newBox: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await api.post("/boxes", { title: this.state.newBox });
    this.props.history.push(`/box/${data._id}`);
  };

  handleInputChange = (e) => {
    this.setState({ newBox: e.target.value });
  };

  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt="RocketBox" />
          <input
            type="text"
            placeholder="Create a box"
            value={this.state.newBox}
            onChange={this.handleInputChange}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}
