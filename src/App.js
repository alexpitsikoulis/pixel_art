import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Canvas from "./components/Canvas";
import Pallet from "./components/Pallet";

function App() {
  const [color, setColor] = useState("black");

	return (
		<div className='App'>
			<h1>Pixel Art</h1>
			<Pallet color={color} setColor={setColor} />
			<Canvas color={color} />
		</div>
	);
}

export default App;
