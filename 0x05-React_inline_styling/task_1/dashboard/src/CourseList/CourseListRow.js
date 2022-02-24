import React from "react";
import PropTypes from "prop-types";

const rowStyle = { backgroundColor: "#f5f5f5ab" };
const headerRowStyle = { backgroundColor: "#deb5b545" };

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

  return <tr style={isHeader ? headerRowStyle : rowStyle}>{row}</tr>;
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
