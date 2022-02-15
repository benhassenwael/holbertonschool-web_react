import React from "react";

export default function NotificationItem({ type, html, value }) {
  return value ? (
    <li data-notification-type={type}>{value}</li>
  ) : (
    <li data-notification-type={type} dangerouslySetInnerHTML={html} />
  );
}
