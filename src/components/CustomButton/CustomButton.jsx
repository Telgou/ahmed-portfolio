import React, { forwardRef } from "react";
import { Button } from "@material-ui/core";
import "./CustomButton.css";

const CustomButton = forwardRef(({ text, icon, ...props }, ref) => {
  return (
    <Button
      {...props}
      ref={ref}
      className="custom_btn"
      endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
});

export default CustomButton;
