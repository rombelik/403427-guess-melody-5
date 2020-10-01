import React from "react";
import Welcome from '../Welcome';
import PropTypes from 'prop-types';

const App = ({numOfError}) => {

  return (<React.Fragment>
    <Welcome name={numOfError} />
  </React.Fragment>);
};

App.propTypes = {
  numOfError: PropTypes.number
};

export default App;
