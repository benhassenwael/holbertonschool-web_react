import React from "react";
import { getFullYear, getFooterCopy } from "../utils";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
    </div>
  );
}
