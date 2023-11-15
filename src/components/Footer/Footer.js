import React from "react";
import { Button, Typography } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import resumeData from "../../utils/resumeData";
import resumeDataFR from "../../utils/resumeData FR";

import "./Footer.css";

function Footer({language}) {
  const resumeDataTranslated = language === "en" ? resumeData : resumeDataFR ;
  return (
    <div className={"footer"}>
      <div className="footer_left">
        <Typography className="footer_name">
          {resumeDataTranslated.name}
          <small> - { language === "en" ? "Full Stack Developper" : "Développeur Full Stack"}</small>
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
