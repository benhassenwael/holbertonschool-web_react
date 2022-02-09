import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "./utils";

const close = () => {
  console.log("Close button has been clicked");
};

export function Notifications() {
  return (
    <div className="Notifications">
      <button
        style={{ display: "inline", float: "right" }}
        aria-label="Close"
        onClick={close}
      >
        <img style={{ width: "10px" }} src={closeIcon} alt="Close" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}
