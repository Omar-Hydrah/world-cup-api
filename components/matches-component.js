var React = require("react");
import {Link, DefaultRoute} from "react-router";


// React Components
var Round = require("./round-component.js");

var Matches = React.createClass({

	getInitialState: function(){
		return {
			data: this.props.data
		};
	}, // getInitialState

	render:function(){

		var componentState = this.state;
		var children = React.Children.map(this.props.children, function(child, index){
			return React.cloneElement(child, componentState);
		});
		// Used in styling the navigation tabs.
		var activeItem = this.props.location.pathname;
		return (
			<div>
				<br /><br />
				<ul className="nav nav-tabs nav-justified">
					<li className={(activeItem.match(/(first-round|^\/matches$)/)) ? "active" : null} >
						<Link to={"/matches/first-round"} >First Round</Link>
					</li>
					<li className={(activeItem == "/matches/second-round") ? "active" : null}>
						<Link to={"/matches/second-round"}>Second Round</Link>
					</li>
					<li className={(activeItem == "/matches/third-round") ? "active" : null}>
						<Link to={"/matches/third-round"}>Third Round</Link>
					</li>
					<li className={(activeItem == "/matches/fourth-round") ? "active" : null}>
						<Link to={"/matches/fourth-round"}>Fourth Round</Link>
					</li>
					<li className={(activeItem == "/matches/final-round") ? "active" : null}>
						<Link to={"/matches/final-round"}>Final Round</Link>
					</li>
				</ul>
				<Round round={this.props.location.pathname} data={this.props.data}/>
			</div>
		);
	}, // render
});

module.exports = Matches;
