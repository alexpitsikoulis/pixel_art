import React, { useState } from "react";

export default function Pallet(props) {
	const [colorChoice, setColorChoice] = useState(props.color);

	const palletStyles = {
		height: "100px",
		width: "100px",
		background: props.color,
		margin: "5px auto"
	};

	let previousColors

	function handleInputChange(event) {
		let copiedColorChoice = { colorChoice };
		copiedColorChoice = event.target.value;
		setColorChoice(copiedColorChoice);
	}

	function handleColorChange() {
		props.setColor(colorChoice);
	}

	return (
		<div>
			<div style={palletStyles} id='pallet'></div>
			<input
				type='text'
				id='colorPicker'
				value={colorChoice}
				onChange={handleInputChange}
			/>
			<button onClick={handleColorChange}>Change Color</button>
		</div>
	);
}
