import React from "react";
import { getFullYear, getFooterCopy } from "../utils";
import AppContext from "../App/AppContext";

export default function Footer() {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <div className="footer">
            <p>
              Copyright {getFullYear()} - {getFooterCopy(true)}
            </p>
            {context.user.isLoggedIn && <a href="#">Contact us</a>}
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}
