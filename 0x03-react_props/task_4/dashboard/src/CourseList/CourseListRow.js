import React from "react";
import PropTypes from "prop-types";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let row;
  if (isHeader) {
    row = textSecondCell ? (
      <>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </>
    ) : (
      <th colSpan="2">{textFirstCell}</th>
    );
  } else {
    row = (
      <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </>
    );
  }

  return <tr>{row}</tr>;
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
