import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const NotificationItem = React.memo(function NotificationItem({
  type,
  html,
  value,
  markAsRead,
  id,
}) {
  let typeStyle = css(type === "urgent" ? styles.urgent : styles.default);

  return value ? (
    <li
      className={typeStyle}
      data-notification-type={type}
      onClick={() => markAsRead(id)}
    >
      {value}
    </li>
  ) : (
    <li
      className={typeStyle}
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      onClick={() => markAsRead(id)}
    />
  );
});

NotificationItem.prototype = {
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {},
  id: NaN,
};

const styles = StyleSheet.create({
  default: {
    color: "blue",
  },

  urgent: {
    color: "red",
  },
});

export default NotificationItem;
