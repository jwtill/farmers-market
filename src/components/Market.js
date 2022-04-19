import React from "react";
import PropTypes from "prop-types";

function Market(props) {
  return (
    <React.Fragment>
      <h3>{props.day} | {props.location} | Booth{props.booth}</h3>
      <hr />
      <h4>Hours: {props.hours}</h4>
    </React.Fragment>

  )
}

Ticket.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string
}

export default Market;