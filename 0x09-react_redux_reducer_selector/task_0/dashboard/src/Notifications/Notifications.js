import React, { Component } from "react";
import NotificationItem from "./NotificationItem";
//import closeIcon from "./close-icon.png";
import NotificationItemShape from "./NotificationItemShape";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

export class Notifications extends Component {
  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead,
    } = this.props;
    return (
      <>
        <div
          className={css(styles.menuItem)}
          id="menuItem"
          onClick={handleDisplayDrawer}
        >
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)} id="Notifications">
            <button
              style={{ display: "inline", float: "right" }}
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              {/* <img style={{ width: "10px" }} src={closeIcon} alt="Close" /> */}
            </button>
            {listNotifications.length > 0 ? (
              <p>Here is the list of notifications</p>
            ) : (
              <p>No new notification for now</p>
            )}
            <ul>
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  id={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={markNotificationAsRead}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};

const cssVars = {
  mainColor: "#e01d3f",
};

const styles = StyleSheet.create({
  menuItem: {
    textAlign: "right",
  },

  notifications: {
    float: "right",
    border: `3px dashed ${cssVars.mainColor}`,
    padding: "10px",
    marginBottom: "20px",
  },

  p: {
    margin: 0,
    marginTop: "15px",
  },
});
