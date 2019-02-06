import React from 'react';
import moment from "moment";

import Result from "./Result";
import AddToHomeScreen from "./AddToHomeScreen";

import {FORMATS} from "./formats.js";
import '../assets/App.scss';
import logo from "../assets/logo.png";
import loading from "../assets/loading.png";

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.fields = {
			storeNumber: React.createRef(),
			date: React.createRef(),
			time: React.createRef(),
			submitButton: React.createRef(),
		};

		this.state = {
			storeNumber: 45115,
			date: moment(),
			time: moment().subtract(15, "minutes"),
		};
	}

	componentDidMount() {
		this.fields.storeNumber.current.value = this.state.storeNumber;
		this.fields.date.current.value = this.state.date.format(FORMATS.DATE.SYSTEM);
		this.fields.time.current.value = this.state.time.format(FORMATS.TIME);
	}

	onChange(e) {
		this.setState({[e.currentTarget.id]: e.currentTarget.value});
	}

	onSubmit(e) {
		e.preventDefault();

		let randomScore = ("0" + Math.ceil((Math.random() * 3) + 7)).substr(-2, 2);
		const cookieCode = [
			randomScore,
			this.state.storeNumber,
			"0",
			this.state.date.format(FORMATS.COOKIECODE.DATE),
			this.state.time.format(FORMATS.COOKIECODE.TIME)
		];

		this.setState({
			cookieCode: cookieCode.join("-")
		});
	}

	render() {
		return (
			<>
				<div className="container wrapper">
					<img className="logo" src={logo} alt="Subway Logo" />

					{!this.state.cookieCode && (
						<form noValidate onSubmit={this.onSubmit}>
							<div className="form-group">
								<label htmlFor="storeNumber">Store number:</label>
								<input className="form-control form-control-lg" type="number" id="storeNumber" placeholder="eg. 45115" ref={this.fields.storeNumber} onChange={this.onChange} />
							</div>
							<div className="form-group">
								<label htmlFor="date">Date:</label>
								<input className="form-control form-control-lg" type="date" ref={this.fields.date} onChange={this.onChange} />
							</div>
							<div className="form-group">
								<label htmlFor="time">Time:</label>
								<input className="form-control form-control-lg" type="time" placeholder="hh:mm" ref={this.fields.time} onChange={this.onChange} />
							</div>
							<div className="form-group">
								<label htmlFor="submit">&nbsp;</label>
								<input className="form-control form-control-lg btn btn-lg btn-primary" type="submit" value="Generate cookie code" />
							</div>
						</form>
					)}
				</div>

				{this.state.cookieCode && (
					<Result cookieCode={this.state.cookieCode}>
						<AddToHomeScreen />
					</Result>
				)}
			</>
		);
	}

}
