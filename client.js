var React = require("react");
var ReactDOM = require("react-dom");
import {Router, Route, hashHistory} from "react-router";

var data = require("./data/2010.json");
// data = JSON.parse(data);

// React components
var Teams      = require("./components/teams-component.js");
var Matches    = require("./components/matches-component.js");
var Rankings   = require("./components/rankings-component.js");
var Navigation = require("./components/navigation-component.js");
var FirstRound = require("./components/first-round.js");
var SecondRound = require("./components/second-round.js");

var App = React.createClass({

	getInitialState:function(){
		return {
			data: data
		};
	}, // getInitialState

	render: function(){
		var componentState = this.state;
		// Updating the children components, to have the state by default.
		var children = React.Children.map(this.props.children, function(child, index){
			return React.cloneElement(child, componentState) ;
		}.bind(this));

		return(
			<div>
				<h1>Merhaba React'tan</h1>
				<Navigation activeItem={this.props.location.pathname}/>
				{children}
			</div>
		);
	}
});

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="teams" component={Teams} />
			<Route path="matches" component={Matches} />
			{/* matches/* will accept any round passed into it */}
			{/* example: #/matches/first-round */}
			<Route path="matches/*" component={Matches} />
			<Route path="rankings" component={Rankings} />
		</Route>
	</Router>
);

ReactDOM.render(
	routes , 
	document.getElementById("react-container")
);