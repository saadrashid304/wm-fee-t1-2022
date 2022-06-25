import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Drawer from "./Components/Drawer/Drawer";
import Backdrop from "./Components/Backdrop/Backdrop";
import Message from "./Components/Message/Message";
import Card from "./Components/Card/Card";
import "./App.css";

const App = () => {
	const [displayDrawer, setDisplayDrawer] = useState(false);
	const drawerButtonClickHandler = () => {
		setDisplayDrawer(true);
  };
  const backdropClickHandler = () => {
    setDisplayDrawer(false);
  }
	return (
		<div className="App">
			<NavBar drawerHandler={drawerButtonClickHandler} />
			<Drawer display={displayDrawer} />
			{displayDrawer && <Backdrop click={backdropClickHandler} />}
			<Message />
			<Card />
		</div>
	);
};

export default App;
