import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import "./index.css";

// Action types
const TOGGLE_SWITCH = "TOGGLE_SWITCH";

// Action creator
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });

// Reducer
const initialState = { lightOn: false };

const lightSwitchReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return { ...state, lightOn: !state.lightOn };
    default:
      return state;
  }
};

// Redux store
const store = createStore(lightSwitchReducer);

// React component
const Room = ({ lightOn, toggleSwitch }) => (
  <div className={`room ${lightOn ? "lit" : "dark"}`}>
    the room is {lightOn ? "lit" : "dark"}
    <br />
    <button onClick={toggleSwitch}>flip</button>
  </div>
  // <div>
  //   <h1>Room</h1>
  //   <p>Light is {lightOn ? "On" : "Off"}</p>
  //   <button onClick={toggleSwitch}>Toggle Light</button>
  // </div>
);

// Map state to props
const mapStateToProps = state => ({
  lightOn: state.lightOn
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  toggleSwitch: () => dispatch(toggleSwitch())
});

// Connect the component to Redux
const ConnectedRoom = connect(
  mapStateToProps,
  mapDispatchToProps
)(Room);

// Render the connected component
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRoom />
  </Provider>,
  document.getElementById("root")
);
