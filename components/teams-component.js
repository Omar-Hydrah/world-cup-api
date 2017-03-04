var React = require("react");

var Teams = React.createClass({

	render: function(){

		var teams = this.props.data.teams;
		// Preparing teams to be displayed inside a table.
		teams = teams.map(function(team, index){
			return ( 
				<tr key={index} >
					<td>{team}</td>
				</tr> 
			);
		});

		return (
			<div>
				<br /><br />
				<div className="panel panel-default">
					<div className="panel-heading">World Cup 2010 Participating Teams</div> 
					<table className="table table-striped">
						<tbody>
							{teams}
						</tbody>
					</table>
				</div>
			</div>
		);
	}, // render
});

module.exports = Teams;