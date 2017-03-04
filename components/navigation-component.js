var React = require("react");
import {Link} from "react-router";

var Navigation = React.createClass({
	render: function(){
		return(
			<nav className="nav navbar-default">
				<div className="container-fluid">
					<ul className="nav navbar-nav">
						<li className={(this.props.activeItem == "/" ) ? "active" : null}>
							<Link to={"/"}>Home</Link>
						</li>
						<li className={(this.props.activeItem == "/teams") ? "active" : null} >
							<Link to={"/teams"}>Teams</Link>
						</li>
						<li className= {(this.props.activeItem == "/matches") ? "active": null}>
							<Link to={"/matches"}>Matches</Link>
						</li>
						<li className={(this.props.activeItem == "/rankings") ? "active" : null}>
							<Link to={"/rankings"}>Rankings</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}, // render
});


module.exports = Navigation;
