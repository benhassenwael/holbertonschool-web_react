import React, { Component } from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import "./BodySection.css";

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className="bodySectionWithMargin">
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.defaultProps = {
  title: "",
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
};

export default BodySectionWithMarginBottom;
