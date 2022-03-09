import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const rowStyle = { backgroundColor: "#f5f5f5ab" };
const headerRowStyle = { backgroundColor: "#deb5b545" };

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let row;
  const tableItemStyle = css(
    isHeader ? styles.CourseListTh : styles.CourseListTd
  );

  if (isHeader) {
    row = textSecondCell ? (
      <>
        <th className={tableItemStyle}>{textFirstCell}</th>
        <th className={tableItemStyle}>{textSecondCell}</th>
      </>
    ) : (
      <th colSpan="2" className={css(styles.CourseListThSpan2)}>
        {textFirstCell}
      </th>
    );
  } else {
    row = (
      <>
        <td className={tableItemStyle}>{textFirstCell}</td>
        <td className={tableItemStyle}>{textSecondCell}</td>
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

const cssVars = {
  borderTableColor: "rgb(170, 170, 170);",
};

const styles = StyleSheet.create({
  CourseListTh: {
    borderTop: `1px solid ${cssVars.borderTableColor}`,
    borderBottom: `1px solid ${cssVars.borderTableColor}`,
    textAlign: "left",
    fontSize: "18px",
  },

  CourseListThSpan2: {
    textAlign: "center",
  },

  CourseListTd: {
    textAlign: "left",
  },
});

export default CourseListRow;
