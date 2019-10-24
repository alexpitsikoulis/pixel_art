import React, { useState, useEffect } from "react";

export default function Canvas(props) {
	const [dragging, setDragging] = useState(false);

	const pixelData = [];

	for (let i = 0; i < 5000; i++) {
		pixelData.push({ id: i, color: "white" });
	}

	const [pixels, setPixels] = useState([...pixelData]);
	const pixelMap = pixels.map(pixel => {
		return (
			<div
				className='pixel'
				key={pixel.id}
				id={pixel.id}
				onMouseOver={changeColorDrag}
				onClick={changeColor}
				style={{
					background: pixels[pixel.id].color
				}}></div>
		);
	});

	function changeColorDrag(event) {
		if (dragging) {
			const copiedPixels = [...pixels];
			copiedPixels[event.target.id].color = props.color;
			setPixels(copiedPixels);
		}
	}

	function changeColor(event) {
		const copiedPixels = [...pixels];
		copiedPixels[event.target.id].color = props.color;
		setPixels(copiedPixels);
	}

	function mouseDown(event) {
		event.preventDefault();
		setDragging(true);
	}

	function mouseUp() {
		setDragging(false);
	}

	return (
		<div onPointerDown={mouseDown} onPointerUp={mouseUp}>
			<div className='canvas'>{pixelMap}</div>
		</div>
	);
}
