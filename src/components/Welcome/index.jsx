import React from "react";
import PropTypes from "prop-types";

const Welcome = ({numOfError}) => {

  return (<React.Fragment>
    <p>You made {numOfError} errors.</p>
  </React.Fragment>);
};

Welcome.propTypes = {
  numOfError: PropTypes.number
};

export default Welcome;
