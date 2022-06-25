import React from "react";
import "./NavBar.css";
import DrawerButton from "../DrawerButton/DrawerButton";
const search = require("../../search.png");

const NavBar = (props) => {
	return (
		<div>
			<div className="navbar_container">
				<div className="navbar_drawer">
					<DrawerButton click={props.drawerHandler} />
				</div>
				<div className="navbar_linkContainer">
					<div className="navbar_linkContainer1">
						<div className="navbar_link">HOME</div>
						<div className="navbar_link">ABOUT</div>
						<div className="navbar_link">CONTACT</div>
					</div>
                </div>
                <div className="space"></div>
				<div>
					<input type="text" placeholder="Search" className="navbar_search" />
				</div>
			</div>
		</div>
	);
};

export default NavBar;
