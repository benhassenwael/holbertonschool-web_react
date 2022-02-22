import React from "react";
import PropTypes from "prop-types";

export default function NotificationItem({
  type,
  html,
  value,
  markAsRead,
  id,
}) {
  return value ? (
    <li data-notification-type={type} onClick={() => markAsRead(id)}>
      {value}
    </li>
  ) : (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      onClick={() => markAsRead(id)}
    />
  );
}

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
