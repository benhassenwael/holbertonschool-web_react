import React from "react";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
//import closeIcon from "./close-icon.png";
import { getLatestNotification } from "../utils";

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
        {/* <img style={{ width: "10px" }} src={closeIcon} alt="Close" /> */}
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="ultraUrgent" html={{__html: getLatestNotification()}} />
      </ul>
    </div>
  );
}
