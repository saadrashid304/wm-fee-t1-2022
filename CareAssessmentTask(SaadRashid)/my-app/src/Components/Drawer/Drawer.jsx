import React from "react";
import "./Drawer.css";

const Drawer = (props) => {
	let drawerClass = "drawer";
	if (props.display) {
		drawerClass = "drawer open";
	}
	return (
		<div className={drawerClass}>
			<div className="drawer_linkContainer1">
				<div>
					<div className="drawer_link">HOME</div>
					<div className="drawer_link">ABOUT</div>
					<div className="drawer_link">CONTACT</div>
				</div>
				<div className="space"></div>
				<div className="search_container">
					<input type="text" placeholder="Search" className="drawer_search" />
				</div>
			</div>
		</div>
	);
};

export default Drawer;
