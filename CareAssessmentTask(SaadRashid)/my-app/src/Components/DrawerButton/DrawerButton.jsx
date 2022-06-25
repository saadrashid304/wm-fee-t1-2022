import React from "react";
import "./DrawerButton.css";

const DrawerButton = (props) => (
	<button className="btn" onClick={props.click}>
		<div className="btn_line"></div>
		<div className="btn_line"></div>
		<div className="btn_line"></div>
	</button>
);

export default DrawerButton;
