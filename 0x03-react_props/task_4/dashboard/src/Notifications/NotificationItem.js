import React from "react";
import PropTypes from 'prop-types';

export default function NotificationItem({ type, html, value }) {
  return value ? (
    <li data-notification-type={type}>{value}</li>
  ) : (
    <li data-notification-type={type} dangerouslySetInnerHTML={html} />
  );
}

NotificationItem.prototype = {
  value: PropTypes.string,
  html: PropTypes.shape({
      __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired
}

NotificationItem.defaultProps = {
  type: 'default',
};
