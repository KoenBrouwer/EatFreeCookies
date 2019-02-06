import React from "react";

import step1 from "../assets/add-to-home-screen/step1.png";
import step2 from "../assets/add-to-home-screen/step2.png";
import step3 from "../assets/add-to-home-screen/step3.png";
import shareIcon from "../assets/add-to-home-screen/share-icon.png";

export default class AddToHomeScreen extends React.Component {

	render() {
		const isiPhone = /iPhone/.test(navigator.userAgent);
		const isStandaloneApp = window.matchMedia('(display-mode: standalone)').matches;

		if(isiPhone && !isStandaloneApp){
			return (
				<div className="addToHomeScreen">
					<div className="container wrapper">
						<h1>Enjoying this?</h1>
						<p>Add this to your homescreen for quick access!</p>

						<img src={step1} alt="Step 1" />
						<p>
							<strong>1</strong> Tap
							<img src={shareIcon} alt="Share icon" className="inline-icon" />
							                   on the bottom of the screen.
						</p>

						<img src={step2} alt="Step 2" />
						<p>
							<strong>2</strong> Tap "Add to Home Screen".
						</p>

						<img src={step3} alt="Step 3" />
						<p>
							<strong>3</strong> Tap "Add".
						</p>
					</div>
				</div>
			);
		}

		return <></>
	}

}
