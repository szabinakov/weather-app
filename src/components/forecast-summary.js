import React from "react";
import WeatherIcon from "react-icons-weather";
import PropTypes from "prop-types";
import "../styles/forecast-summary.css";
import moment from "moment";

const ForecastSummary = (props) => {
  return (
    <div className="container">
      <div className="date" data-testid="date-id">
        {moment(props.date).format("dddd Do MMM")}
      </div>
      <div className="temperature" data-testid="temperature-id">
        {props.temperature}
      </div>
      <div className="description" data-testid="description-id">
        {props.description}
      </div>
      <WeatherIcon
        className="icon"
        data-testid="icon-id"
        name="owm"
        iconId={props.icon}
      />
      <button onClick={() => props.onSelect(props.date)}>More details</button>
    </div>
  );
};

ForecastSummary.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    onSelect: PropTypes.func,
  }),
};

export default ForecastSummary;
