import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { fetchSmurfs } from "../actions/actions";
import SmurfHolder from "../components/SmurfHolder";
import SmurfList from "../components/SmurfList";

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>Smurf Database</h1>
        <SmurfHolder />
        <SmurfList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { fetchSmurfs })(App);