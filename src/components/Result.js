import React from "react";
import loading from "../assets/loading.png";

export default class Result extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			code: props.cookieCode,
			loading: true,
		};

		setTimeout(() => {
			this.setState({loading: false});
		}, 1000);
	}

	render() {
		if(this.state.loading){
			return (
				<div className="container wrapper">
					<span className="loading">
						<img src={loading} alt="" />
					</span>
				</div>
			);
		}
		else{
			return (
				<>
					<div className="container wrapper">
						<div className="cookieCodeWrapper" id="codeWrapper">
							<div className="info">
								This is your Subway Cookie Code.
								Write down this code on your receipt and show your receipt at the counter!
							</div>
							<div className="cookieCode">
								{this.props.cookieCode}
							</div>
							<div className="info">
								Enjoy your free cookie!
							</div>
							<div className="startOver">
								<a href="#" className="text-subway-dark small" onClick={() => window.location.reload()}>Get another code</a>
							</div>
						</div>
					</div>

					{this.props.children}
				</>
			);
		}
	}
}
