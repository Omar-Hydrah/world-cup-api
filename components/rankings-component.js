var React = require("react");

var Rankings = React.createClass({

	render: function(){
		return(
			<div>
				<br />
				<h3>First Place</h3>
				<div className="alert alert-success">
					{this.props.data.rankings.firstPlace}
				</div>
				<h3>Second Place</h3>
				<div className="alert alert-warning">
					{this.props.data.rankings.secondPlace}
				</div>
				<h3>Third Place</h3>
				<div className="alert alert-info">
					{this.props.data.rankings.thirdPlace}
				</div>
			</div>	
		);
	}, // render
});


module.exports = Rankings;