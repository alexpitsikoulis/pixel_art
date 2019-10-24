import React, { useState } from "react";

export default function Pallet(props) {
	const [colorChoice, setColorChoice] = useState(props.color);
	const [previousColors, setPreviousColors] = useState([]);

	if (previousColors.length > 3) {
		setPreviousColors([...previousColors].slice(1));
	}

	const palletStyles = {
		height: "100px",
		width: "100px",
		background: props.color
	};

	function handleInputChange(event) {
		let copiedColorChoice = { colorChoice };
		copiedColorChoice = event.target.value;
		setColorChoice(copiedColorChoice);
	}

	function handleColorChange() {
		setPreviousColors([...previousColors].concat(props.color));
		props.setColor(colorChoice);
	}

	function selectPreviousColor(event) {
		setPreviousColors([...previousColors].concat(props.color));
		props.setColor(event.target.className.split(" ")[1]);
	}

	const prevPallets = previousColors.map((prev, i) => {
		return (
			<div
				className={`previous ${prev}`}
				key={i}
				style={{
					height: "20px",
					width: "20px",
					background: prev,
					margin: "5px"
				}}
				onClick={selectPreviousColor}></div>
		);
	});

	return (
		<div>
			<div id='swatches'>
				{prevPallets}
				<div style={palletStyles} id='pallet'></div>
			</div>
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
